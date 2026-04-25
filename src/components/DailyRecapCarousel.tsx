'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { topics } from '@/lib/topics';

interface RecapArticle {
  slug: string;
  title: string;
  description: string;
  topic: string;
  image: string;
  tags: string[];
}

interface RecapEntry {
  date: string;
  title: string;
  body: string;
  articles: RecapArticle[];
}

function getTopicIcon(slug: string) {
  return topics.find(t => t.slug === slug)?.icon || '📰';
}
function getTopicName(slug: string) {
  return topics.find(t => t.slug === slug)?.name || slug;
}
function formatDate(d: string) {
  try { return new Date(d).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'long' }); }
  catch { return d; }
}

function ScrollCarousel({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hintPlayed, setHintPlayed] = useState(false);

  const check = () => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    check();
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);

    // Animation hint mobile : petit scroll automatique après 2s
    if (!hintPlayed && el.scrollWidth > el.clientWidth) {
      const timer = setTimeout(() => {
        el.scrollBy({ left: 120, behavior: 'smooth' });
        setTimeout(() => el!.scrollBy({ left: -120, behavior: 'smooth' }), 600);
        setHintPlayed(true);
      }, 2000);
      return () => clearTimeout(timer);
    }

    return () => {
      el.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [hintPlayed]);

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <div
      className={`relative ${className || ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Flèche gauche */}
      {canLeft && hovered && (
        <button
          onClick={() => scroll(-1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'var(--bg-primary)', border: '2px solid var(--accent)', color: 'var(--accent)' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}
      {/* Flèche droite */}
      {canRight && (
        <button
          onClick={() => scroll(1)}
          className={`absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 hidden sm:flex ${hovered ? 'opacity-100' : 'opacity-50 animate-pulse'}`}
          style={{ background: 'var(--accent)', color: 'white', border: 'none' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}
      {/* Mobile hint indicator */}
      {canRight && !hovered && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 sm:hidden">
          <div className="w-8 h-8 rounded-full flex items-center justify-center animate-bounce" style={{ background: 'var(--accent)', color: 'white' }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      )}
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}
      >
        {children}
      </div>
    </div>
  );
}

export default function DailyRecapCarousel({ recaps }: { recaps: RecapEntry[] }) {
  if (!recaps || recaps.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <div className="flex items-center gap-3 mb-5">
        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider" style={{ background: 'var(--accent)', color: 'white' }}>
          ✍️ Rédacteur en chef
        </span>
        <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
      </div>

      <ScrollCarousel>
        {recaps.map(recap => (
          <div key={recap.date} className="snap-start shrink-0 w-[320px] sm:w-[360px]">
            <div className="rounded-2xl overflow-hidden h-full" style={{ border: '1px solid var(--border)' }}>
              {/* Header de la carte */}
              <div className="p-4 pb-3" style={{ background: 'var(--bg-secondary)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: 'var(--accent)', color: 'white' }}>
                    {formatDate(recap.date)}
                  </span>
                  <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                    {recap.articles.length} article{recap.articles.length > 1 ? 's' : ''}
                  </span>
                </div>
                <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                  {recap.body.slice(0, 200)}{recap.body.length > 200 ? '...' : ''}
                </p>
              </div>

              {/* Liste des articles du récap */}
              <div className="p-3 space-y-2">
                {recap.articles.slice(0, 5).map(article => (
                  <Link
                    key={article.slug}
                    href={`/${article.topic}/${article.slug}`}
                    className="flex gap-3 p-2 rounded-xl transition-all hover:scale-[1.01]"
                    style={{ background: 'var(--bg-secondary)' }}
                  >
                    <img
                      src={`/images/articles/${article.image}`}
                      alt={article.title}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-0.5">
                        <span className="text-[10px]">{getTopicIcon(article.topic)}</span>
                        <span className="text-[9px] font-semibold uppercase" style={{ color: 'var(--accent)' }}>{getTopicName(article.topic)}</span>
                      </div>
                      <h4 className="font-bold text-xs leading-tight line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                        {article.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </ScrollCarousel>
    </section>
  );
}

// Export pour les carrousels de rubriques
export { ScrollCarousel };
