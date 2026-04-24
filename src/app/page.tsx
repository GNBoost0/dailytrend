import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { AdBanner } from '@/components/Adsense';
import { getAllArticles } from '@/lib/articles';
import { topics } from '@/lib/topics';

export default function Home() {
  const articles = getAllArticles();
  const featured = articles[0];
  const rest = articles.slice(1, 13);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        {featured && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
            <ArticleCard article={featured} featured />
          </section>
        )}

        <AdBanner />

        {/* Derniers articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <h2 className="text-2xl font-bold text-white mb-6">Derniers articles</h2>
          {rest.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(article => (
                <ArticleCard key={`${article.topic}-${article.slug}`} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Les articles arrivent bientôt...</p>
          )}
        </section>

        {/* Topics */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-6">Nos rubriques</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {topics.map(topic => (
              <a
                key={topic.id}
                href={`/${topic.slug}`}
                className={`group p-6 rounded-xl bg-gradient-to-br ${topic.color} bg-opacity-10 border border-white/5 hover:border-white/20 transition-all`}
              >
                <span className="text-4xl block mb-3">{topic.icon}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-white/90">{topic.name}</h3>
                <p className="text-sm text-white/60 mt-1">{topic.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
