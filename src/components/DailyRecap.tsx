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
  try { return new Date(d).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }); }
  catch { return d; }
}

export default function DailyRecap({ recaps }: { recaps: RecapEntry[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollWidth > el.clientWidth + 10);
    check();
    el.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => { el.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
  }, []);

  const scrollTo = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 400, behavior: 'smooth' });
  };

  if (!recaps || recaps.length === 0) return null;

  return (
    <section className="border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Titre style header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Daily<span style={{ color: 'var(--accent)' }}>Recap</span>
          </h2>
          {/* Sélecteur de date si plusieurs récaps */}
          {recaps.length > 1 && (
            <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              {recaps.map((r, i) => (
                <button
                  key={r.date}
                  onClick={() => setActiveIdx(i)}
                  className="shrink-0 px-3 py-1 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background: i === activeIdx ? 'var(--accent)' : 'var(--bg-secondary)',
                    color: i === activeIdx ? 'white' : 'var(--text-muted)',
                  }}
                >
                  {formatDate(r.date).replace(/^\w+/, m => m.charAt(0).toUpperCase() + m.slice(1)).split(' ').slice(0, 3).join(' ')}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Flux du récap */}
        {(() => {
          const recap = recaps[activeIdx];
          if (!recap) return null;

          return (
            <div className="max-w-2xl mx-auto">
              {/* Date */}
              <p className="text-xs font-medium mb-3" style={{ color: 'var(--text-muted)' }}>
                📅 {formatDate(recap.date)}
              </p>

              {/* Message du rédac */}
              <div className="rounded-xl p-4 mb-6" style={{ background: 'var(--bg-secondary)', borderLeft: '3px solid var(--accent)' }}>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
                  {recap.body}
                </p>
              </div>

              {/* Articles : résumé + carte pour chacun */}
              {recap.articles.length > 0 && (
                <div className="space-y-6">
                  {recap.articles.map((article, idx) => (
                    <div key={article.slug}>
                      {/* Résumé de l'article */}
                      <div className="flex items-start gap-2 mb-3">
                        <span className="text-xs mt-0.5">{getTopicIcon(article.topic)}</span>
                        <div className="flex-1">
                          <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>
                            {getTopicName(article.topic)}
                          </p>
                          <h3 className="font-bold text-sm leading-tight mb-1" style={{ color: 'var(--text-primary)' }}>
                            {article.title}
                          </h3>
                          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                            {article.description}
                          </p>
                        </div>
                      </div>
                      {/* Carte cliquable */}
                      <Link href={`/${article.topic}/${article.slug}`}>
                        <div className="rounded-xl overflow-hidden transition-all hover:scale-[1.01] hover:shadow-lg" style={{ border: '1px solid var(--border)' }}>
                          <img
                            src={`/images/articles/${article.image}`}
                            alt={article.title}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-3 flex items-center justify-between" style={{ background: 'var(--bg-secondary)' }}>
                            <span className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>Lire l'article →</span>
                            <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                              {getTopicIcon(article.topic)} {getTopicName(article.topic)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {/* Conclusion */}
              <div className="mt-6 text-center">
                <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                  Bonne lecture ! 🚀
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
