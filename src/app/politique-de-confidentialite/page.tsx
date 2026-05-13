import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Politique de confidentialité — DailyTrend' };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2" style={{color:'var(--text-primary)'}}>Politique de confidentialité</h1>
          <p className="text-sm mb-8" style={{color:'var(--text-muted)'}}>Dernière mise à jour : 6 mai 2026</p>

          <div className="prose-article">
            <p>La protection de vos données personnelles est une priorité pour DailyTrend. La présente politique de confidentialité décrit les données que nous collectons, les raisons de cette collecte, la manière dont nous les utilisons et vos droits en la matière, conformément au Règlement Général sur la Protection des Données (RGPD — Règlement (UE) 2016/679) et à la loi Informatique et Libertés.</p>

            <h2>1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données personnelles est :</p>
            <ul>
              <li><strong>Nom :</strong> Julian COLPART, éditeur du site DailyTrend</li>
              <li><strong>Email :</strong> contact@dailytrend.fr</li>
              <li><strong>Site :</strong> www.dailytrend.fr</li>
            </ul>

            <h2>2. Données personnelles collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul>
              <li><strong>Adresse email</strong> — uniquement si vous vous inscrivez à notre newsletter (récap quotidien). Cette donnée est collectée sur la base de votre consentement explicite.</li>
              <li><strong>Données de navigation</strong> — pages visitées, durée de visite, navigateur utilisé, appareil, système d&apos;exploitation. Ces données sont collectées automatiquement via des cookies techniques et des outils d&apos;analyse.</li>
              <li><strong>Données de push notifications</strong> — si vous activez les notifications navigateur, un token anonyme est stocké pour vous envoyer des notifications. Aucune donnée personnelle n&apos;est associée à ce token.</li>
            </ul>
            <p>Nous ne collectons <strong>aucune donnée sensible</strong> (origine ethnique, opinions politiques, convictions religieuses, données de santé, orientation sexuelle, etc.).</p>

            <h2>3. Finalités du traitement</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul>
              <li>L&apos;envoi de la newsletter quotidienne (récap des articles du jour) — base légale : <strong>consentement</strong> (art. 6.1.a RGPD)</li>
              <li>L&apos;analyse de l&apos;audience du site (mesure de fréquentation, comportement de navigation) — base légale : <strong>intérêt légitime</strong> (art. 6.1.f RGPD)</li>
              <li>L&apos;affichage de publicités personnalisées via Google AdSense — base légale : <strong>consentement</strong> (art. 6.1.a RGPD)</li>
              <li>L&apos;envoi de notifications push si vous les avez activées — base légale : <strong>consentement</strong> (art. 6.1.a RGPD)</li>
              <li>La gestion des contacts et demandes envoyées via l&apos;email contact@dailytrend.fr — base légale : <strong>intérêt légitime</strong> (art. 6.1.f RGPD)</li>
            </ul>

            <h2>4. Durée de conservation des données</h2>
            <ul>
              <li><strong>Adresses email (newsletter)</strong> — conservées jusqu&apos;à votre désinscription. Vous pouvez vous désinscrire à tout moment via le lien prévu dans chaque email.</li>
              <li><strong>Données de navigation / cookies</strong> — conservées selon la durée de vie de chaque cookie (voir section Cookies ci-dessous).</li>
              <li><strong>Demandes de contact</strong> — conservées 12 mois maximum après le dernier échange.</li>
            </ul>

            <h2>5. Cookies</h2>
            <h3>5.1 Cookies techniques (obligatoires)</h3>
            <p>Ces cookies sont strictement nécessaires au fonctionnement du site et ne nécessitent pas votre consentement :</p>
            <ul>
              <li><strong>Préférences de thème</strong> (dt-theme) — stocke votre choix de mode clair/sombre. Durée : 1 an.</li>
              <li><strong>Service Worker</strong> — nécessaire au fonctionnement de l&apos;application progressive (PWA). Pas de donnée personnelle stockée.</li>
            </ul>

            <h3>5.2 Cookies de mesure d&apos;audience</h3>
            <p>Si Google Analytics est utilisé, les cookies suivants peuvent être déposés (soumis à votre consentement) :</p>
            <ul>
              <li><code>_ga</code>, <code>_ga_*</code> — identifiant de suivi Google Analytics. Durée : 13 mois maximum.</li>
            </ul>
            <p>Les données Analytics sont anonymisées (IP tronquées) et utilisées uniquement pour comprendre comment les visiteurs utilisent le site.</p>

            <h3>5.3 Cookies publicitaires (Google AdSense)</h3>
            <p>Google AdSense peut déposer les cookies suivants pour afficher des publicités pertinentes (soumis à votre consentement) :</p>
            <ul>
              <li><code>__gads</code>, <code>__gpi</code>, <code>IDE</code>, <code>NID</code> — cookies de ciblage publicitaire Google. Durée : 13 mois maximum.</li>
            </ul>
            <p>Google utilise ces cookies pour diffuser des annonces basées sur vos visites antérieures sur ce site ou sur d&apos;autres sites. Vous pouvez personnaliser vos préférences publicitaires sur la page <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Paramètres des annonces Google</a>.</p>
            <p>Pour refuser le suivi par Google Analytics, vous pouvez installer le <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">module de désactivation Google Analytics</a>.</p>

            <h3>5.4 Gestion des cookies</h3>
            <p>Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres de votre navigateur. La désactivation de certains cookies peut affecter votre expérience sur le site.</p>

            <h2>6. Partage des données</h2>
            <p>Vos données personnelles ne sont <strong>jamais vendues</strong> à des tiers. Elles peuvent être partagées avec les prestataires suivants, uniquement dans le cadre des finalités décrites ci-dessus :</p>
            <ul>
              <li><strong>Vercel Inc.</strong> — hébergement du site. Vercel peut traiter des données techniques (logs, IP) pour assurer le fonctionnement du site. Politique de confidentialité : <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a></li>
              <li><strong>Google Ireland Ltd</strong> — services AdSense et potentiellement Analytics. Politique de confidentialité : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
            </ul>
            <p>Aucun transfert de données en dehors de l&apos;Espace Économique Européen n&apos;est effectué en dehors des prestataires listés ci-dessus, qui assurent des garanties conformes au RGPD (clauses contractuelles types).</p>

            <h2>7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
            <ul>
              <li><strong>Droit d&apos;accès</strong> — obtenir une copie de vos données personnelles que nous détenons</li>
              <li><strong>Droit de rectification</strong> — corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l&apos;effacement</strong> — demander la suppression de vos données personnelles</li>
              <li><strong>Droit à la limitation du traitement</strong> — demander la suspension du traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré et couramment utilisé</li>
              <li><strong>Droit d&apos;opposition</strong> — vous opposer au traitement de vos données pour des raisons légitimes</li>
              <li><strong>Droit de retirer votre consentement</strong> — à tout moment, sans compromettre la licéité du traitement effectué avant le retrait</li>
            </ul>
            <p>Pour exercer ces droits, contactez-nous à : <strong>contact@dailytrend.fr</strong></p>
            <p>Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">www.cnil.fr/fr/plaintes</a></p>

            <h2>8. Sécurité des données</h2>
            <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute modification, divulgation ou destruction. Le site utilise le protocole HTTPS (chiffrement TLS) pour toutes les communications.</p>

            <h2>9. Données des mineurs</h2>
            <p>DailyTrend ne s&apos;adresse pas spécifiquement aux personnes de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles auprès de mineurs. Si vous êtes un parent ou un tuteur et pensez que votre enfant nous a fourni des données personnelles, veuillez nous contacter à contact@dailytrend.fr.</p>

            <h2>10. Modifications de cette politique</h2>
            <p>Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Toute modification substantielle sera signalée sur le site. La date de dernière mise à jour est indiquée en haut de cette page.</p>

            <h2>11. Contact</h2>
            <p>Pour toute question relative à la protection de vos données personnelles :</p>
            <ul>
              <li><strong>Email :</strong> contact@dailytrend.fr</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
