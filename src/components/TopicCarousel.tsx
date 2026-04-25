'use client';

import { useRef, useState, useEffect } from 'react';
import ArticleCard from '@/components/ArticleCard';

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  topic: string;
  tags: string[];
  image: string;
  author: string;
  readingTime: number;
  content: string;
}

export default function TopicCarousel({ articles }: { articles: Article[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [desktopHover, setDesktopHover] = useState(false);

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
    return () => {
      el.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setDesktopHover(true)}
      onMouseLeave={() => setDesktopHover(false)}
    >
      {/* ===== MOBILE : pastilles permanentes ===== */}
      {/* Pastille droite — visible tant qu'on peut scroller à droite */}
      {canRight && (
        <div className="absolute right-1 top-1/2 -translate-y-1/2 z-10 pointer-events-none sm:hidden">
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, var(--accent), #d95000)',
              color: 'white',
              boxShadow: '0 2px 12px rgba(240,112,0,0.4)',
              animation: 'scrollHintRight 1.8s ease-in-out infinite',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      )}

      {/* Pastille gauche — visible dès qu'on peut scroller à gauche */}
      {canLeft && (
        <div className="absolute left-1 top-1/2 -translate-y-1/2 z-10 pointer-events-none sm:hidden">
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: '36px',
              height: '36px',
              background: 'rgba(255,255,255,0.85)',
              color: 'var(--accent)',
              border: '2px solid var(--accent)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
              animation: 'scrollHintLeft 1.8s ease-in-out infinite',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </div>
        </div>
      )}

      {/* ===== DESKTOP : flèches au survol ===== */}
      {canLeft && desktopHover && (
        <button
          onClick={() => scroll(-1)}
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full items-center justify-center transition-all hover:scale-110"
          style={{
            background: 'var(--bg-primary)',
            color: 'var(--accent)',
            border: '2px solid var(--accent)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}

      {canRight && desktopHover && (
        <button
          onClick={() => scroll(1)}
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full items-center justify-center transition-all hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, var(--accent), #d95000)',
            color: 'white',
            border: 'none',
            boxShadow: '0 2px 12px rgba(240,112,0,0.4)',
          }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}

      {/* Carousel scrollable — py-4 pour laisser de la place au scale hover */}
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pb-2 pt-4 sm:py-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}
      >
        {articles.map(a => (
          <div key={a.slug} className="snap-start shrink-0 w-[280px] sm:w-[300px]">
            <ArticleCard article={a} variant="card" />
          </div>
        ))}
      </div>
    </div>
  );
}
