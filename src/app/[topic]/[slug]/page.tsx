import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleCard from '@/components/ArticleCard';
import { AdBanner, AdInArticle, AdSidebar } from '@/components/Adsense';
import { getArticle, getArticlesByTopic, getRelatedArticles, getAllArticles } from '@/lib/articles';
import { getTopicBySlug } from '@/lib/topics';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map(a => ({ topic: a.topic, slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { topic: string; slug: string } }) {
  const article = getArticle(params.topic, params.slug);
  if (!article) return {};
  const topic = getTopicBySlug(params.topic);
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description },
  };
}

async function markdownToHtml(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}

export default async function ArticlePage({ params }: { params: { topic: string; slug: string } }) {
  const article = getArticle(params.topic, params.slug);
  if (!article) notFound();
  
  const topic = getTopicBySlug(params.topic);
  const related = getRelatedArticles(article);
  const contentHtml = await markdownToHtml(article.content);
  
  // Split content for in-article ad
  const paragraphs = contentHtml.split('</p>');
  const midPoint = Math.floor(paragraphs.length / 2);
  const firstHalf = paragraphs.slice(0, midPoint).join('</p>') + '</p>';
  const secondHalf = paragraphs.slice(midPoint).join('</p>');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { '@type': 'Person', name: article.author },
    publisher: { '@type': 'Organization', name: 'Trend Pulse' },
    mainEntityOfPage: `https://trend-pulse.vercel.app/${params.topic}/${params.slug}`,
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="flex-1">
        <section className={`bg-gradient-to-br ${topic?.color || 'from-brand-500 to-brand-700'} py-16`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[
              { label: 'Accueil', href: '/' },
              { label: topic?.name || '', href: `/${params.topic}` },
              { label: article.title },
            ]} />
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {article.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-white/80 mt-4">{article.description}</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-white/60">
              <span>Par {article.author}</span>
              <time>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
              <span>{article.readingTime} min de lecture</span>
            </div>
          </div>
        </section>

        <AdBanner />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <article className="flex-1 max-w-3xl">
              <div className="article-content" dangerouslySetInnerHTML={{ __html: firstHalf }} />
              <AdInArticle />
              <div className="article-content" dangerouslySetInnerHTML={{ __html: secondHalf }} />
            </article>
            <aside className="lg:w-[300px] shrink-0 space-y-6">
              <AdSidebar />
              {related.length > 0 && (
                <div>
                  <h3 className="font-bold text-white mb-4">Articles similaires</h3>
                  <div className="space-y-4">
                    {related.map(a => (
                      <a key={a.slug} href={`/${a.topic}/${a.slug}`} className="block group">
                        <h4 className="text-sm font-medium text-gray-300 group-hover:text-brand-400 transition-colors line-clamp-2">
                          {a.title}
                        </h4>
                        <span className="text-xs text-gray-500">{new Date(a.date).toLocaleDateString('fr-FR')}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
