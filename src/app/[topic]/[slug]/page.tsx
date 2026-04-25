import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getArticle, getRelatedArticles, getAllArticles } from '@/lib/articles';
import { getTopicBySlug, topics } from '@/lib/topics';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  return getAllArticles().map(a => ({ topic: a.topic, slug: a.slug }));
}
export async function generateMetadata({ params }: { params: { topic: string; slug: string } }) {
  const a = getArticle(params.topic, params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    openGraph: { title: a.title, description: a.description, type: 'article', publishedTime: a.date },
  };
}

async function md(s: string) { return (await remark().use(html).process(s)).toString(); }

export default async function ArticlePage({ params }: { params: { topic: string; slug: string } }) {
  const article = getArticle(params.topic, params.slug);
  if (!article) notFound();
  const topic = getTopicBySlug(params.topic);
  const related = getRelatedArticles(article);
  const html_ = await md(article.content);
  const ps = html_.split(/(<\/p>)/);
  const mid = Math.ceil(ps.length / 2);
  const p1 = ps.slice(0, mid*2).join('');
  const p2 = ps.slice(mid*2).join('');
  const dateStr = new Date(article.date).toLocaleDateString('fr-FR', { day:'numeric', month:'long', year:'numeric' });
  const ld = { '@context':'https://schema.org','@type':'Article', headline:article.title, description:article.description, datePublished:article.date, author:{'@type':'Person',name:article.author}, publisher:{'@type':'Organization',name:'Trend Pulse'} };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}} />
      <main className="flex-1">
        {/* Hero */}
        <div className="border-b border-white/[0.04]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
            <div className="flex items-center gap-2 mb-4 text-xs text-gray-600">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link><span>/</span>
              <Link href={`/${params.topic}`} className="hover:text-white transition-colors">{topic?.name}</Link><span>/</span>
              <span className="text-gray-500 truncate">{article.title}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {article.tags.map(t => (
                <span key={t} className="px-2 py-0.5 rounded bg-white/[0.05] text-[11px] font-medium text-gray-400">{t}</span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.2] mb-4">{article.title}</h1>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">{article.description}</p>
            <div className="flex items-center gap-4 mt-6 text-xs text-gray-600">
              <span className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-[9px] font-bold text-indigo-400">TP</div>
                {article.author}
              </span>
              <span>{dateStr}</span>
              <span>{article.readingTime} min de lecture</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <article className="flex-1 max-w-3xl prose-article">
              <div dangerouslySetInnerHTML={{__html: p1}} />
              {/* In-article ad placeholder */}
              <div className="my-10 py-6 border-y border-white/[0.04] text-center text-xs text-gray-700">
                Espace publicitaire
              </div>
              <div dangerouslySetInnerHTML={{__html: p2}} />
            </article>

            <aside className="lg:w-[280px] shrink-0 space-y-8">
              {/* Ad */}
              <div className="aspect-[4/3] rounded-lg bg-[#0c0c10] border border-white/[0.04] flex items-center justify-center text-xs text-gray-700">
                Espace publicitaire
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div>
                  <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">À lire aussi</h3>
                  {related.map(a => <ArticleCard key={a.slug} article={a} variant="compact" />)}
                </div>
              )}

              {/* Topics */}
              <div>
                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">Rubriques</h3>
                <div className="space-y-0.5">
                  {topics.map(t => (
                    <Link key={t.id} href={`/${t.slug}`} className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-white/[0.03] transition-colors group">
                      <span className="text-sm group-hover:scale-110 transition-transform">{t.icon}</span>
                      <span className="text-xs text-gray-500 group-hover:text-white transition-colors">{t.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
