'use client';

import Link from 'next/link';
import { topics } from '@/lib/topics';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="white" fillOpacity="0.9"/></svg>
              </div>
              <span className="text-sm font-extrabold text-white">Trend<span className="text-indigo-400">Pulse</span></span>
            </Link>
            <p className="text-xs text-gray-600 leading-relaxed">L'actu tech sans bullshit.<br/>Chaque jour.</p>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3">Rubriques</h4>
            {topics.map(t => (
              <Link key={t.id} href={`/${t.slug}`} className="block text-xs text-gray-600 hover:text-white py-1 transition-colors">{t.icon} {t.name}</Link>
            ))}
          </div>
          <div>
            <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3">Pages</h4>
            <Link href="/a-propos" className="block text-xs text-gray-600 hover:text-white py-1">À propos</Link>
            <Link href="/contact" className="block text-xs text-gray-600 hover:text-white py-1">Contact</Link>
            <Link href="/mentions-legales" className="block text-xs text-gray-600 hover:text-white py-1">Mentions légales</Link>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3">Newsletter</h4>
            <p className="text-xs text-gray-600 mb-2">Le récap quotidien dans votre boîte.</p>
            <form className="flex gap-1.5" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="email" className="flex-1 min-w-0 px-2.5 py-1.5 bg-white/[0.04] border border-white/[0.06] rounded-md text-xs text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/40" />
              <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-md hover:bg-indigo-500">OK</button>
            </form>
          </div>
        </div>
        <div className="pt-6 border-t border-white/[0.04] text-center text-[11px] text-gray-700">
          © {new Date().getFullYear()} Trend Pulse
        </div>
      </div>
    </footer>
  );
}
