import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'À propos — Trend Pulse' };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-6">À propos de Trend Pulse</h1>
        <div className="article-content">
          <p>Trend Pulse est votre source quotidienne d&apos;actualités et d&apos;analyses sur les sujets qui façonnent notre futur.</p>
          <h2>Nos rubriques</h2>
          <ul>
            <li><strong>Intelligence Artificielle</strong> — Dernières avancées en IA, LLM et outils intelligents</li>
            <li><strong>Crypto & Blockchain</strong> — Marchés, analyses, DeFi et regulation</li>
            <li><strong>Cybersécurité</strong> — Menaces, protection et vie privée</li>
            <li><strong>Bien-être & Biohacking</strong> — Santé, optimisation et performance</li>
            <li><strong>Gaming & E-sport</strong> — Jeux vidéo, tournois et industry news</li>
          </ul>
          <p>Chaque jour, nous publions des articles frais, rigoureusement documentés et optimisés pour vous informer rapidement et efficacement.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
