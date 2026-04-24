import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumb from '@/components/Breadcrumb';
import { AdBanner, AdSidebar } from '@/components/Adsense';
import { getTopicBySlug } from '@/lib/topics';
import { getArticlesByTopic } from '@/lib/articles';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { slug: 'ia' }, { slug: 'crypto' }, { slug: 'cyber' },
    { slug: 'bien-etre' }, { slug: 'gaming' },
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = getTopicBySlug(params.slug);
  if (!topic) return {};
  return {
    title: `${topic.name} — Articles & Actualités`,
    description: topic.description,
    openGraph: { title: `${topic.name} | Trend Pulse`, description: topic.description },
  };
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopicBySlug(params.slug);
  if (!topic) notFound();

  const articles = getArticlesByTopic(params.slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero topic */}
        <section className={`bg-gradient-to-br ${topic.color} py-12`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[
              { label: 'Accueil', href: '/' },
              { label: topic.name },
            ]} />
            <div className="flex items-center gap-4">
              <span className="text-6xl">{topic.icon}</span>
              <div>
                <h1 className="text-4xl font-extrabold text-white">{topic.name}</h1>
                <p className="text-white/80 mt-2 text-lg">{topic.description}</p>
              </div>
            </div>
          </div>
        </section>

        <AdBanner />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              {articles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {articles.map(article => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-12">Les articles arrivent bientôt dans cette rubrique...</p>
              )}
            </div>
            <aside className="lg:w-[300px] shrink-0 space-y-6">
              <AdSidebar />
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
