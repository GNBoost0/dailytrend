'use client';

import Link from 'next/link';
import { topics } from '@/lib/topics';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050507]/90 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="white" fillOpacity="0.9"/></svg>
            </div>
            <span className="text-[15px] font-extrabold tracking-tight text-white">Trend<span className="text-indigo-400">Pulse</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {topics.map(topic => (
              <Link key={topic.id} href={`/${topic.slug}`}
                className="px-3 py-1.5 rounded-md text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all">
                {topic.icon} <span className="ml-1">{topic.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 -mr-2 text-gray-400 hover:text-white">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-3 border-t border-white/[0.04] pt-2 space-y-0.5">
            {topics.map(topic => (
              <Link key={topic.id} href={`/${topic.slug}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-white/[0.05]">
                <span className="text-base">{topic.icon}</span> {topic.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
