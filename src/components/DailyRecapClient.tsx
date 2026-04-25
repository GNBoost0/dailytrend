'use client';

import { useState } from 'react';
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
function formatShortDate(d: string) {
  try { return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }); }
  catch { return d; }
}

export default function DailyRecapClient({ recaps }: { recaps: RecapEntry[] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const recap = recaps[activeIdx];
  if (!recap) return null;

  const bodyParts = recap.body.split('[articles]');
  const intro = bodyParts[0].trim();
  const outro = bodyParts.length > 1 ? bodyParts[1].trim() : '';

  return (
    <section className="border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Titre + dates */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Daily<span style={{ color: 'var(--accent)' }}>Recap</span>
          </h2>
          {recaps.length > 1 && (
            <div className="flex gap-1.5 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              {recaps.map((r, i) => (
                <button
                  key={r.date}
                  onClick={() => setActiveIdx(i)}
                  className="shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all"
                  style={{
                    background: i === activeIdx ? 'var(--accent)' : 'var(--bg-secondary)',
                    color: i === activeIdx ? 'white' : 'var(--text-muted)',
                  }}
                >
                  {formatShortDate(r.date)}
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="text-[11px] font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
          📅 {formatDate(recap.date)}
        </p>

        {/* Flux continu */}
        <div className="space-y-4">
          {intro && (
            <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
              {intro}
            </p>
          )}

          {recap.articles.map((article) => (
            <div key={article.slug} className="space-y-2">
              {/* Résumé texte */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <span className="font-bold" style={{ color: 'var(--text-primary)' }}>
                  {getTopicIcon(article.topic)} {article.title}
                </span>
                {' — '}{article.description}
              </p>
              {/* Carte compacte style "À lire aussi" */}
              <Link href={`/${article.topic}/${article.slug}`} className="group block py-2 transition-all hover:translate-x-1" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="flex gap-4">
                  <div className="w-24 h-16 shrink-0 rounded-lg overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
                    <img src={article.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[15px] font-semibold leading-snug line-clamp-2 group-hover:opacity-80 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1.5 text-[12px]" style={{ color: 'var(--text-muted)' }}>
                      <span>{getTopicName(article.topic)}</span>
                      <span>·</span>
                      <span>Lire →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {outro && (
            <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
              {outro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
