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

        <div className="flex items-center gap-3 mb-4">
          <div className="relative flex items-center gap-2">
            <span className="text-lg">📅</span>
            <select
              value={recap.date}
              onChange={(e) => {
                const idx = recaps.findIndex(r => r.date === e.target.value);
                if (idx >= 0) setActiveIdx(idx);
              }}
              className="text-[12px] font-bold rounded-xl px-4 py-2 appearance-none cursor-pointer transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              style={{
                background: 'var(--accent)',
                color: 'white',
                border: 'none',
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 10px center',
                paddingRight: '32px',
              }}
            >
              {recaps.map(r => (
                <option key={r.date} value={r.date}>
                  {formatDate(r.date)}
                </option>
              ))}
            </select>
          </div>
          <DateTooltip />
        </div>

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
              <Link href={`/${article.topic}/${article.slug}`} className="group block py-2 transition-all hover:translate-x-1 active:scale-[0.98] sm:active:scale-100 cursor-pointer" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="flex gap-4 items-center">
                  <div className="w-24 h-16 shrink-0 rounded-lg overflow-hidden transition-transform group-hover:scale-105 group-active:scale-95" style={{ background: 'var(--bg-secondary)' }}>
                    <img src={article.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[15px] font-semibold leading-snug line-clamp-2 group-hover:opacity-80 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1.5 text-[12px]" style={{ color: 'var(--text-muted)' }}>
                      <span>{getTopicName(article.topic)}</span>
                    </div>
                  </div>
                  <div className="shrink-0 pr-1">
                    <span className="text-[11px] font-semibold animate-pulse" style={{ color: 'var(--accent)' }}>Lire →</span>
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

function DateTooltip() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShow(!show)}
        onBlur={() => setTimeout(() => setShow(false), 200)}
        className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all hover:scale-110 focus:outline-none"
        style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
      >
        <span className="inline-block" style={{ animation: 'glow 2s ease-in-out infinite' }}>ℹ️</span>
      </button>
      {show && (
        <div
          className="absolute right-0 top-8 z-50 w-56 rounded-xl p-3 text-xs leading-relaxed shadow-xl"
          style={{ background: 'var(--bg-primary)', border: '1px solid var(--accent)', color: 'var(--text-secondary)' }}
        >
          💡 Sélectionne une date pour voir le récap de cette journée. Par défaut, c&apos;est le récap du jour qui s&apos;affiche.
        </div>
      )}
    </div>
  );
}
