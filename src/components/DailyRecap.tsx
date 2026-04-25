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

export default function DailyRecap({ recaps }: { recaps: RecapEntry[] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!recaps || recaps.length === 0) return null;

  const recap = recaps[activeIdx];
  if (!recap) return null;

  // Découper le body en intro et conclusion
  // Le body peut contenir un marqueur [articles] pour séparer
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
                  {(() => { try { return new Date(r.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }); } catch { return r.date; } })()}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date */}
        <p className="text-[11px] font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
          📅 {formatDate(recap.date)}
        </p>

        {/* Flux de lecture intégré */}
        <div className="space-y-5">
          {/* Intro du rédac */}
          {intro && (
            <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
              {intro}
            </p>
          )}

          {/* Articles intégrés dans le flux */}
          {recap.articles.map((article) => (
            <div key={article.slug} className="space-y-2.5">
              {/* Résumé intégré au texte */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{getTopicIcon(article.topic)} {article.title}</span>
                {' — '}{article.description}
              </p>
              {/* Carte image */}
              <Link href={`/${article.topic}/${article.slug}`}>
                <div className="rounded-xl overflow-hidden transition-all hover:shadow-lg" style={{ border: '1px solid var(--border)' }}>
                  <img
                    src={`/images/articles/${article.image}`}
                    alt={article.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="px-3 py-2.5 flex items-center justify-between" style={{ background: 'var(--bg-secondary)' }}>
                    <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>Lire l'article →</span>
                    <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                      {getTopicName(article.topic)}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Outro du rédac */}
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
