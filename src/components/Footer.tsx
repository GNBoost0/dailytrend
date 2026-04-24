'use client';

import Link from 'next/link';
import { topics } from '@/lib/topics';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="text-xl font-extrabold bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                Trend Pulse
              </span>
            </Link>
            <p className="text-sm text-gray-500">
              Votre source quotidienne d&apos;actualités tech et tendances.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3">Rubriques</h3>
            <div className="space-y-2">
              {topics.map(topic => (
                <Link key={topic.id} href={`/${topic.slug}`} className="block text-sm text-gray-400 hover:text-white">
                  {topic.icon} {topic.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3">Liens</h3>
            <div className="space-y-2">
              <Link href="/a-propos" className="block text-sm text-gray-400 hover:text-white">À propos</Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-white">Contact</Link>
              <Link href="/mentions-legales" className="block text-sm text-gray-400 hover:text-white">Mentions légales</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">Recevez le récap quotidien.</p>
            <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-3 py-2 bg-surface-800 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button type="submit" className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-500 transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Trend Pulse. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
