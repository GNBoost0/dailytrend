import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — DailyTrend',
  description: 'Contactez l\'équipe DailyTrend : questions, partenariats, signalement d\'erreurs ou suggestions.',
};

const SOCIALS = [
  {
    name: 'Twitter / X',
    handle: '@DailyTrendFr',
    url: 'https://x.com/DailyTrendFr',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: '#000000',
  },
  {
    name: 'Reddit',
    handle: 'u/DailyTrend',
    url: 'https://reddit.com/user/DailyTrend',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0zm4.388 3.199L18.45 5.26a1.5 1.5 0 011.828 2.373 1.5 1.5 0 01-2.136-.054l-1.924-1.924a1.5 1.5 0 012.17-.456zM7.5 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1.725 2.063A4.742 4.742 0 0112 18.375a4.742 4.742 0 01-2.775-.938.562.562 0 11.662-.91A3.617 3.617 0 0012 17.25c.822 0 1.569-.273 2.113-.723a.562.562 0 11.662.91v.826z" />
      </svg>
    ),
    color: '#FF4500',
  },
];

const CONTACT_REASONS = [
  { value: '', label: 'Sélectionnez un sujet' },
  { value: 'question', label: '💬 Question générale' },
  { value: 'erreur', label: '⚠️ Signaler une erreur' },
  { value: 'partenariat', label: '🤝 Proposition de partenariat' },
  { value: 'suggestion', label: '💡 Suggestion / idée d\'article' },
  { value: 'autre', label: '📧 Autre' },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, #e05500 100%)' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Parlons ensemble
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              Une question, un partenariat, une correction à signaler ?<br />
              On répond rapidement, promis.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 3 cartes info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-8 mb-12 relative z-10">
            <div className="rounded-2xl p-5 text-center shadow-lg" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
              <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-lg" style={{ background: 'rgba(240,112,0,0.1)', color: 'var(--accent)' }}>✉️</div>
              <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Email</h3>
              <a href="mailto:contact@dailytrend.fr" className="text-xs font-medium hover:underline" style={{ color: 'var(--accent)' }}>contact@dailytrend.fr</a>
            </div>
            <div className="rounded-2xl p-5 text-center shadow-lg" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
              <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-lg" style={{ background: 'rgba(240,112,0,0.1)', color: 'var(--accent)' }}>⏱️</div>
              <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Réactivité</h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Réponse sous 24-48h</p>
            </div>
            <div className="rounded-2xl p-5 text-center shadow-lg" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
              <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-lg" style={{ background: 'rgba(240,112,0,0.1)', color: 'var(--accent)' }}>🌐</div>
              <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Réseaux</h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>X · Reddit</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Formulaire — 3 colonnes */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl p-6 sm:p-8 shadow-lg" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
                <h2 className="text-xl font-extrabold mb-1" style={{ color: 'var(--text-primary)' }}>Envoyez-nous un message</h2>
                <p className="text-xs mb-6" style={{ color: 'var(--text-muted)' }}>Tous les champs marqués * sont obligatoires.</p>

                <form action="https://formsubmit.co/contact@dailytrend.fr" method="POST" className="space-y-5">
                  {/* Honeypot anti-spam */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_next" value="https://dailytrend.fr/contact?sent=1" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>Prénom *</label>
                      <input
                        type="text"
                        name="prenom"
                        required
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--accent)]"
                        style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                        placeholder="Julian"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--accent)]"
                        style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                        placeholder="vous@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>Sujet *</label>
                    <select
                      name="sujet"
                      required
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--accent)]"
                      style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                    >
                      {CONTACT_REASONS.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--accent)] resize-none"
                      style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
                    style={{ background: 'var(--accent)' }}
                  >
                    Envoyer le message →
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar — 2 colonnes */}
            <div className="lg:col-span-2 space-y-6">
              {/* Réseaux sociaux */}
              <div className="rounded-2xl p-6 shadow-lg" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
                <h3 className="text-base font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>Nos réseaux</h3>
                <div className="space-y-3">
                  {SOCIALS.map(s => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl transition-all hover:translate-x-1"
                      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ color: s.color }}>
                        {s.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>{s.name}</div>
                        <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{s.handle}</div>
                      </div>
                      <svg className="w-4 h-4 ml-auto shrink-0" style={{ color: 'var(--text-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  ))}
                </div>

                {/* Comptes par rubrique */}
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <p className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Comptes par rubrique (X)</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['@DailyTrendFr'].map(h => (
                      <span key={h} className="px-2 py-1 rounded-lg text-[10px] font-medium" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ rapide */}
              <div className="rounded-2xl p-6 shadow-lg" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
                <h3 className="text-base font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>Questions fréquentes</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--text-secondary)' }}>💬 Comment proposer un sujet d'article ?</p>
                    <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>Utilisez le formulaire ci-contre avec le sujet « Suggestion ». On lit toutes les propositions.</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--text-secondary)' }}>⚠️ J'ai repéré une erreur, comment la signaler ?</p>
                    <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>Sélectionnez « Signaler une erreur » et précisez l'article concerné. L'exactitude est notre priorité.</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--text-secondary)' }}>🤝 Vous acceptez les partenariats ?</p>
                    <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>Oui, si ça apporte de la valeur à nos lecteurs. Contactez-nous via le formulaire ou directement par email.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
