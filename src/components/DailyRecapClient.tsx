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
            <DateDropdown value={recap.date} recaps={recaps} onChange={(date) => {
            const idx = recaps.findIndex(r => r.date === date);
            if (idx >= 0) setActiveIdx(idx);
          }} />
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

function DateDropdown({ value, recaps, onChange }: { value: string; recaps: RecapEntry[]; onChange: (date: string) => void }) {
  const [open, setOpen] = useState(false);

  const displayDate = (() => {
    try { return new Date(value).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'long' }); }
    catch { return value; }
  })();

  // Grouper les récaps par mois
  const grouped = recaps.reduce((acc, r) => {
    const month = (() => { try { return new Date(r.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }); } catch { return r.date; } })();
    if (!acc[month]) acc[month] = [];
    acc[month].push(r);
    return acc;
  }, {} as Record<string, RecapEntry[]>);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        className="flex items-center gap-2 text-[12px] font-bold rounded-xl px-4 py-2 transition-all hover:shadow-md focus:outline-none"
        style={{ background: 'var(--accent)', color: 'white' }}
      >
        <span>📅</span>
        <span>{displayDate}</span>
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 9l6 6 6-6" /></svg>
      </button>

      {open && (
        <div
          className="absolute left-0 top-full mt-2 z-50 rounded-xl shadow-2xl overflow-hidden"
          style={{ background: 'var(--bg-primary)', border: '1px solid var(--accent)', minWidth: '220px' }}
        >
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider" style={{ background: 'var(--accent)', color: 'white' }}>
            📆 Sélectionner une date
          </div>
          <div className="max-h-64 overflow-y-auto p-1">
            {Object.entries(grouped).map(([month, entries]) => (
              <div key={month}>
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  {month}
                </div>
                {entries.map(r => {
                  const dayStr = (() => {
                    try { return new Date(r.date).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric' }); }
                    catch { return r.date; }
                  })();
                  const isActive = r.date === value;
                  return (
                    <button
                      key={r.date}
                      onClick={() => { onChange(r.date); setOpen(false); }}
                      className="w-full text-left px-3 py-2 rounded-lg text-[12px] font-medium transition-all hover:translate-x-1"
                      style={{
                        background: isActive ? 'var(--accent)' : 'transparent',
                        color: isActive ? 'white' : 'var(--text-primary)',
                      }}
                    >
                      <span className="mr-2">{isActive ? '✅' : '📄'}</span>
                      {dayStr} <span style={{ color: isActive ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)', fontWeight: 400 }}>— {r.articles.length} article{r.articles.length > 1 ? 's' : ''}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DateTooltip() {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button
        onClick={() => setShow(!show)}
        className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all hover:scale-110 focus:outline-none sm:pointer-events-none"
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
