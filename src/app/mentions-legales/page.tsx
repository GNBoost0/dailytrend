import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = { title: 'Mentions légales — DailyTrend' };

export default function MentionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-6" style={{color:'var(--text-primary)'}}>Mentions légales</h1>
          
          <div className="prose-article">
            <h2>Éditeur du site</h2>
            <p><strong>DailyTrend</strong> est un site d'information à vocation journalistique.</p>
            <ul>
              <li><strong>Éditeur :</strong> Julian COLPART</li>
              <li><strong>Siège social :</strong> 12 Avenue Mazarin, 91380 Chilly-Mazarin, France</li>
              <li><strong>Email :</strong> contact@dailytrend.fr</li>
              <li><strong>Directeur de la publication :</strong> Julian COLPART</li>
            </ul>

            <h2>Hébergement</h2>
            <p>Ce site est hébergé par :</p>
            <ul>
              <li><strong>Vercel Inc.</strong></li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
            </ul>

            <h2>Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, graphismes, logos, mise en page) est la propriété de DailyTrend ou de ses contributeurs. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de l'éditeur.</p>

            <h2>Données personnelles</h2>
            <p>DailyTrend collecte uniquement l'adresse email des abonnés à la newsletter, dans le seul but d'envoyer le récap quotidien. Ces données ne sont ni vendues, ni partagées avec des tiers à des fins commerciales.</p>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour l'exercer, contactez-nous à <strong>contact@dailytrend.fr</strong>.</p>
            <p>Pour plus d'informations, consultez notre <Link href="/politique-de-confidentialite" className="underline" style={{color:'var(--accent)'}}>Politique de confidentialité</Link>.</p>

            <h2>Cookies</h2>
            <p>Ce site utilise des cookies techniques nécessaires à son fonctionnement. Des cookies tiers (Google AdSense, Google Analytics) peuvent être déposés pour mesurer l'audience et afficher des publicités personnalisées.</p>
            <p>La liste détaillée des cookies utilisés et leurs finalités sont disponibles dans notre <Link href="/politique-de-confidentialite" className="underline" style={{color:'var(--accent)'}}>Politique de confidentialité</Link>.</p>

            <h2>Conditions d'utilisation</h2>
            <p>L'utilisation du site DailyTrend implique l'acceptation pleine et entière des présentes mentions légales. Ces conditions sont susceptibles d'être modifiées ou complétées à tout moment.</p>

            <h2>Limitation de responsabilité</h2>
            <p>DailyTrend s'efforce de fournir des informations aussi précises que possible. Toutefois, le site ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
            <p>Les informations diffusées sur le site sont présentées à titre informatif et n'ont pas de valeur contractuelle. Malgré les mises à jour régulières, le site ne peut être tenu responsable de l'utilisation des informations contenues dans ses pages.</p>

            <h2>Liens hypertextes</h2>
            <p>Le site peut contenir des liens vers d'autres sites. DailyTrend n'exerce aucun contrôle sur le contenu de ces sites tiers et ne saurait être tenu responsable de leur contenu ou de leur politique de confidentialité.</p>

            <h2>Droit applicable</h2>
            <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>

            <h2>Contact</h2>
            <p>Pour toute question relative à ces mentions légales : <strong>contact@dailytrend.fr</strong></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
