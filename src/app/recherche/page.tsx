'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { topics } from '@/lib/topics';
import { Suspense } from 'react';

export default function SearchPageWrapper() {
  return (
    <Suspense fallback={<div className="flex-1" style={{background:'var(--bg-primary)'}} />}>
      <SearchPage />
    </Suspense>
  );
}

function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState('all');
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    // Charger les articles côté client via un endpoint API
    fetch('/api/articles')
      .then(r => r.json())
      .then(data => setArticles(data))
      .catch(() => setArticles([]));
  }, []);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const filtered = useMemo(() => {
    let result = articles;

    // Filtre par rubrique
    if (filter !== 'all') {
      result = result.filter(a => a.topic === filter);
    }

    // Filtre par recherche textuelle
    if (query.trim()) {
      const q = query.toLowerCase().trim();
      const terms = q.split(/\s+/);
      result = result.filter(a => {
        const text = `${a.title} ${a.description} ${(a.tags || []).join(' ')} ${a.topic}`.toLowerCase();
        return terms.every(t => text.includes(t));
      });
    }

    // Tri par date décroissante
    return result.sort((a, b) => b.date.localeCompare(a.date));
  }, [articles, query, filter]);

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Titre */}
          <h1 className="text-2xl sm:text-3xl font-black mb-6" style={{color:'var(--text-primary)'}}>
            Recherche
          </h1>

          {/* Barre de recherche */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="18" height="18" fill="none" stroke="var(--text-muted)" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Que cherchez-vous ?"
                className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[var(--accent)] transition-shadow"
                style={{background:'var(--bg-secondary)', color:'var(--text-primary)', border:'1px solid var(--border)'}}
                autoFocus
              />
            </div>

            {/* Filtre rubrique */}
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="px-4 py-3 rounded-xl text-sm outline-none cursor-pointer"
              style={{background:'var(--bg-secondary)', color:'var(--text-primary)', border:'1px solid var(--border)'}}
            >
              <option value="all">Toutes les rubriques</option>
              {topics.map(t => (
                <option key={t.id} value={t.slug}>{t.icon} {t.name}</option>
              ))}
            </select>
          </div>

          {/* Résultats */}
          <div className="mb-4 text-sm" style={{color:'var(--text-muted)'}}>
            {filtered.length} résultat{filtered.length !== 1 ? 's' : ''}
            {query && <span> pour « <strong style={{color:'var(--text-primary)'}}>{query}</strong> »</span>}
            {filter !== 'all' && <span> dans {topics.find(t => t.slug === filter)?.name}</span>}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filtered.map(a => <ArticleCard key={`${a.topic}-${a.slug}`} article={a} variant="card" />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-semibold" style={{color:'var(--text-primary)'}}>Aucun résultat</p>
              <p className="text-sm mt-1" style={{color:'var(--text-muted)'}}>Essayez avec d'autres mots-clés ou une autre rubrique.</p>
              <Link href="/" className="inline-block mt-4 px-5 py-2 rounded-lg text-sm font-semibold text-white" style={{background:'var(--accent)'}}>
                Retour à l'accueil
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
