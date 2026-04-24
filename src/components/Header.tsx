import Link from 'next/link';
import { topics } from '@/lib/topics';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-extrabold bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              Trend Pulse
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {topics.map(topic => (
              <Link
                key={topic.id}
                href={`/${topic.slug}`}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <span className="mr-1">{topic.icon}</span>
                <span className="hidden lg:inline">{topic.name}</span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-1">
            {topics.map(topic => (
              <Link
                key={topic.id}
                href={`/${topic.slug}`}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                title={topic.name}
              >
                {topic.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
