import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getTopicBySlug } from '@/lib/topics';
import { getArticlesByTopic } from '@/lib/articles';

export const dynamicParams = false;
export async function generateStaticParams() {
  return [{topic:'ia'},{topic:'crypto'},{topic:'cyber'},{topic:'bien-etre'},{topic:'gaming'},{topic:'finance'}];
}
export async function generateMetadata({ params }: { params: { topic: string } }) {
  const topic = getTopicBySlug(params.topic);
  if (!topic) return {};
  return { title: `${topic.name} — DailyTrend`, description: topic.description };
}

export default function TopicPage({ params }: { params: { topic: string } }) {
  const topic = getTopicBySlug(params.topic);
  if (!topic) notFound();
  const articles = getArticlesByTopic(params.topic);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero plein écran avec image de fond */}
        <div className="relative overflow-hidden" style={{minHeight:'320px'}}>
          {topic.image && (
            <div className="absolute inset-0">
              <img src={topic.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          )}
          <div className="relative flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20" style={{minHeight:'320px'}}>
            <div className="flex items-center gap-2 mb-4 text-xs text-white/60">
              <Link href="/" className="hover:text-white/90 transition-colors">Accueil</Link><span>/</span>
              <span className="text-white/80">{topic.name}</span>
            </div>
            <span className="text-6xl sm:text-7xl mb-4 drop-shadow-2xl">{topic.icon}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight" style={{WebkitTextStroke:'0.5px rgba(0,0,0,0.8)'}}>{topic.name}</h1>
            <p className="text-sm sm:text-base mt-3 max-w-xl text-white/80 leading-relaxed">{topic.description}</p>
            <div className="mt-4 text-xs text-white/50">{articles.length} article{articles.length !== 1 ? 's' : ''}</div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map(a => <ArticleCard key={a.slug} article={a} variant="card" />)}
            </div>
          ) : (
            <p className="text-center py-20" style={{color:'var(--text-muted)'}}>Bientôt des articles ici…</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
