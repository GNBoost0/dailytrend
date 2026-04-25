'use client';

import { useState, useRef, useEffect } from 'react';
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

interface DailyRecapProps {
  recaps: RecapEntry[];
}

function getTopicIcon(topicSlug: string): string {
  const t = topics.find(t => t.slug === topicSlug);
  return t ? t.icon : '📰';
}

function getTopicName(topicSlug: string): string {
  const t = topics.find(t => t.slug === topicSlug);
  return t ? t.name : topicSlug;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default function DailyRecap({ recaps }: DailyRecapProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRecap, setActiveRecap] = useState(0);
  const dialogContentRef = useRef<HTMLDivElement>(null);
  const recapListRef = useRef<HTMLDivElement>(null);

  if (!recaps || recaps.length === 0) return null;

  const latestRecap = recaps[0];
  const articleCount = latestRecap.articles.length;

  return (
    <>
      {/* Bandeau récap — remplace "Articles conseillés du jour" */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="w-full text-left rounded-2xl p-5 relative overflow-hidden transition-all hover:scale-[1.005] group"
          style={{
            background: 'linear-gradient(135deg, var(--accent) 0%, #d95000 100%)',
            boxShadow: '0 4px 24px rgba(240, 112, 0, 0.25)',
          }}
        >
          {/* Motif de fond subtil */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/20 -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/4" />
          </div>

          <div className="relative flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shrink-0 backdrop-blur-sm">
              ✍️
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white/90 text-[11px] font-bold uppercase tracking-wider">Message du rédacteur en chef</span>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>
              <h2 className="text-white font-extrabold text-lg leading-tight truncate">
                {latestRecap.title}
              </h2>
              <p className="text-white/80 text-sm mt-1 line-clamp-2">
                {latestRecap.body.slice(0, 120)}...
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-white/70 text-xs">{articleCount} article{articleCount > 1 ? 's' : ''} du jour</span>
                <span className="text-white/50 text-xs">•</span>
                <span className="text-white/70 text-xs">{formatDate(latestRecap.date)}</span>
              </div>
            </div>
            <div className="text-white/60 group-hover:text-white/90 transition-colors shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        </button>
      </div>

      {/* Modal / Boîte de dialogue */}
      {isOpen && (
        <>
          {/* Overlay semi-transparent */}
          <div
            className="fixed inset-0 z-[150] bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Boîte de dialogue */}
          <div className="fixed inset-0 z-[151] flex items-start justify-center pt-[5vh] sm:pt-[8vh] p-4">
            <div
              className="w-full max-w-2xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col"
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border)',
                maxHeight: '85vh',
              }}
            >
              {/* Header fixe */}
              <div className="shrink-0 p-5 border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--accent)', color: 'white' }}>
                      ✍️
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base" style={{ color: 'var(--text-primary)' }}>
                        Rédacteur en chef
                      </h3>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        Le récap quotidien de DailyTrend
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
                  >
                    ✕
                  </button>
                </div>

                {/* Sélecteur de date */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                  {recaps.map((recap, idx) => (
                    <button
                      key={recap.date}
                      onClick={() => setActiveRecap(idx)}
                      className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                      style={{
                        background: idx === activeRecap ? 'var(--accent)' : 'var(--bg-secondary)',
                        color: idx === activeRecap ? 'white' : 'var(--text-muted)',
                      }}
                    >
                      {formatDate(recap.date).replace(/^\w+/, m => m.charAt(0).toUpperCase() + m.slice(1))}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contenu scrollable */}
              <div ref={dialogContentRef} className="flex-1 overflow-y-auto p-5 space-y-4" style={{ scrollbarWidth: 'thin' }}>
                {(() => {
                  const recap = recaps[activeRecap];
                  if (!recap) return null;

                  return (
                    <>
                      {/* Message du rédac */}
                      <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)' }}>
                        <h4 className="font-bold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                          {recap.title}
                        </h4>
                        <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
                          {recap.body}
                        </p>
                      </div>

                      {/* Articles du jour */}
                      {recap.articles.length > 0 && (
                        <div className="space-y-3">
                          <h5 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                            📰 Articles du jour
                          </h5>
                          {recap.articles.map(article => (
                            <Link
                              key={article.slug}
                              href={`/${article.topic}/${article.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-xl overflow-hidden transition-all hover:scale-[1.01]"
                              style={{ border: '1px solid var(--border)' }}
                            >
                              <div className="flex gap-3 p-3">
                                <img
                                  src={`/images/articles/${article.image}`}
                                  alt={article.title}
                                  className="w-20 h-20 rounded-lg object-cover shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5 mb-1">
                                    <span className="text-xs">{getTopicIcon(article.topic)}</span>
                                    <span className="text-[10px] font-medium" style={{ color: 'var(--accent)' }}>{getTopicName(article.topic)}</span>
                                  </div>
                                  <h6 className="font-bold text-sm leading-tight line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                                    {article.title}
                                  </h6>
                                  <p className="text-xs mt-1 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                                    {article.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}

                      {recap.articles.length === 0 && (
                        <p className="text-sm text-center py-4" style={{ color: 'var(--text-muted)' }}>
                          Aucun article publié ce jour.
                        </p>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
