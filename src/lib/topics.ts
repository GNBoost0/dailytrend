export const topics = [
  {
    id: 'ia',
    name: 'Intelligence Artificielle',
    slug: 'ia',
    icon: '🤖',
    color: 'from-purple-500 to-indigo-600',
    image: '/images/topics/ia.jpg',
    description: 'Dernières avancées en IA, LLM, machine learning et outils intelligents.',
    twitter: '@DailyTrendFr',
  },
  {
    id: 'crypto',
    name: 'Crypto & Blockchain',
    slug: 'crypto',
    icon: '💰',
    color: 'from-amber-500 to-orange-600',
    image: '/images/topics/crypto.jpg',
    description: 'Marchés crypto, analyses, DeFi, NFT et regulation.',
    twitter: '@DailyTrendFr',
  },
  {
    id: 'cyber',
    name: 'Cybersécurité',
    slug: 'cyber',
    icon: '🛡️',
    color: 'from-emerald-500 to-teal-600',
    image: '/images/topics/cyber.jpg',
    description: 'Menaces, protection, VPN, fuites de données et vie privée.',
    twitter: '@DailyTrendFr',
  },
  {
    id: 'bien-etre',
    name: 'Bien-être & Biohacking',
    slug: 'bien-etre',
    icon: '🧬',
    color: 'from-pink-500 to-rose-600',
    image: '/images/topics/bien-etre.jpg',
    description: 'Santé, optimisation, nutrition, sommeil et performance.',
    twitter: '@DailyTrendFr',
  },
  {
    id: 'gaming',
    name: 'Gaming & E-sport',
    slug: 'gaming',
    icon: '🎮',
    color: 'from-cyan-500 to-blue-600',
    image: '/images/topics/gaming.jpg',
    description: 'Jeux vidéo, tournois, reviews et industry news.',
    twitter: '@DailyTrendFr',
  },
  {
    id: 'finance',
    name: 'Finance & Business',
    slug: 'finance',
    icon: '📈',
    color: 'from-green-500 to-emerald-600',
    image: '/images/topics/finance.jpg',
    description: 'Investissement, assurance, entrepreneuriat, B2B et stratégies financières.',
    twitter: '@DailyTrendFr',
  },
] as const;

export type Topic = typeof topics[number];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find(t => t.slug === slug);
}
