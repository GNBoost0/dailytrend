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
  const [hovered, setHovered] = useState(false);
  const [hintPlayed, setHintPlayed] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

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

    // Détecter tactile vs souris
    const touchCheck = () => { setIsTouch(true); };
    window.addEventListener('touchstart', touchCheck, { once: true });

    // Animation hint mobile : petit scroll auto
    if (!hintPlayed && el.scrollWidth > el.clientWidth) {
      const timer = setTimeout(() => {
        el.scrollBy({ left: 100, behavior: 'smooth' });
        setTimeout(() => { if (el) el.scrollBy({ left: -100, behavior: 'smooth' }); }, 500);
        setHintPlayed(true);
      }, 2500);
      return () => clearTimeout(timer);
    }

    return () => {
      el.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [hintPlayed]);

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* === DESKTOP : flèches au survol === */}
      {/* Flèche gauche */}
      {canLeft && hovered && !isTouch && (
        <button
          onClick={() => scroll(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-xl items-center justify-center transition-all hover:scale-110 hidden sm:flex"
          style={{ background: 'var(--bg-primary)', border: '2px solid var(--accent)', color: 'var(--accent)' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}

      {/* Flèche droite */}
      {canRight && hovered && !isTouch && (
        <button
          onClick={() => scroll(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-xl items-center justify-center transition-all hover:scale-110 hidden sm:flex"
          style={{ background: 'var(--accent)', color: 'white' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}

      {/* === MOBILE : indicateurs de scroll === */}
      {/* Indicateur droit — cercle animé */}
      {canRight && !hintPlayed && isTouch && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 sm:hidden pointer-events-none">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: 'var(--accent)',
              color: 'white',
              animation: 'scrollHintRight 1.5s ease-in-out infinite',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      )}

      {/* Indicateur gauche — cercle animé */}
      {canLeft && isTouch && (
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 sm:hidden pointer-events-none">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: 'var(--bg-primary)',
              color: 'var(--accent)',
              border: '2px solid var(--accent)',
              animation: 'scrollHintLeft 1.5s ease-in-out infinite',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
          </div>
        </div>
      )}

      {/* Carousel */}
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
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
