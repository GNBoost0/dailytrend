import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/articles';
import { topics } from '@/lib/topics';

export default function Home() {
  const articles = getAllArticles();
  const hero = articles[0];
  const grid = articles.slice(1, 7);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        {hero && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <ArticleCard article={hero} variant="hero" />
          </section>
        )}

        {/* Grid */}
        {grid.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Derniers articles</h2>
              <div className="flex-1 h-px bg-white/[0.04]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {grid.map(a => <ArticleCard key={`${a.topic}-${a.slug}`} article={a} />)}
            </div>
          </section>
        )}

        {/* Topic strips */}
        {topics.map(topic => {
          const topicArticles = articles.filter(a => a.topic === topic.slug);
          if (topicArticles.length === 0) return null;
          return (
            <section key={topic.id} className="border-t border-white/[0.04]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{topic.icon}</span>
                    <h2 className="text-sm font-bold text-white">{topic.name}</h2>
                  </div>
                  <Link href={`/${topic.slug}`} className="text-[12px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                    Tout voir →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {topicArticles.slice(0, 3).map(a => <ArticleCard key={a.slug} article={a} />)}
                </div>
              </div>
            </section>
          );
        })}

        {/* Topics bar */}
        <section className="border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {topics.map(topic => (
                <Link key={topic.id} href={`/${topic.slug}`}
                  className="group flex flex-col items-center gap-2 p-5 rounded-xl bg-[#0c0c10] border border-white/[0.04] hover:border-white/[0.08] hover:bg-[#0f0f14] transition-all">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{topic.icon}</span>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{topic.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from 'next/link';
