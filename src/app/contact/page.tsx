import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Contact — Trend Pulse' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-6">Contact</h1>
        <div className="article-content">
          <p>Une question, une suggestion ou un partenariat ? Contactez-nous :</p>
          <p>📧 <strong>contact@trend-pulse.fr</strong></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
