import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getTopicBySlug } from '@/lib/topics';
import { getArticlesByTopic } from '@/lib/articles';

export const dynamicParams = false;
export async function generateStaticParams() {
  return [{slug:'ia'},{slug:'crypto'},{slug:'cyber'},{slug:'bien-etre'},{slug:'gaming'}];
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = getTopicBySlug(params.slug);
  if (!topic) return {};
  return { title: `${topic.name} — Trend Pulse`, description: topic.description };
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopicBySlug(params.slug);
  if (!topic) notFound();
  const articles = getArticlesByTopic(params.slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="border-b border-white/[0.04]" style={{background: `linear-gradient(135deg, var(--bg-primary), var(--bg-secondary))`}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center gap-2 mb-3 text-xs text-gray-600">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-gray-400">{topic.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-5xl sm:text-6xl">{topic.icon}</span>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{topic.name}</h1>
                <p className="text-sm text-gray-500 mt-1 max-w-lg">{topic.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {articles.length > 0 ? (
            <>
              <ArticleCard article={articles[0]} variant="hero" />
              {articles.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                  {articles.slice(1).map(a => <ArticleCard key={a.slug} article={a} />)}
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-600 py-20">Bientôt des articles ici…</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
