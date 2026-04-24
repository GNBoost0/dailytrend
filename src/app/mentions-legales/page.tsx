import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Mentions légales — Trend Pulse' };

export default function MentionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-6">Mentions légales</h1>
        <div className="article-content">
          <h2>Éditeur du site</h2>
          <p>Trend Pulse est un site d&apos;information à vocation journalistique.</p>
          <h2>Hébergement</h2>
          <p>Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <h2>Propriété intellectuelle</h2>
          <p>L&apos;ensemble du contenu de ce site (textes, images, graphismes) est protégé par le droit d&apos;auteur. Toute reproduction est interdite sans autorisation préalable.</p>
          <h2>Données personnelles</h2>
          <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
