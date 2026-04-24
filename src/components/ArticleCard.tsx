import Link from 'next/link';
import { Article } from '@/lib/articles';
import { getTopicBySlug } from '@/lib/topics';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const topic = getTopicBySlug(article.topic);
  
  if (featured) {
    return (
      <Link href={`/${article.topic}/${article.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl bg-surface-800/50 border border-white/5 hover:border-brand-500/30 transition-all">
          <div className={`aspect-[16/9] bg-gradient-to-br ${topic?.color || 'from-brand-500 to-brand-700'} flex items-center justify-center`}>
            <span className="text-8xl opacity-30">{topic?.icon}</span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${topic?.color} text-white`}>
                {topic?.icon} {topic?.name}
              </span>
              <span className="text-xs text-gray-500">{article.readingTime} min de lecture</span>
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:text-brand-400 transition-colors mb-2">
              {article.title}
            </h2>
            <p className="text-gray-400 line-clamp-2">{article.description}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <time>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            </div>
          </div>
        </article>
      </Link>
    );
  }
  
  return (
    <Link href={`/${article.topic}/${article.slug}`} className="group block">
      <article className="flex flex-col h-full overflow-hidden rounded-xl bg-surface-800/50 border border-white/5 hover:border-brand-500/20 transition-all">
        <div className={`aspect-[16/9] bg-gradient-to-br ${topic?.color || 'from-brand-500 to-brand-700'} flex items-center justify-center`}>
          <span className="text-5xl opacity-30">{topic?.icon}</span>
        </div>
        <div className="flex flex-col flex-1 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/10 text-gray-300">
              {topic?.icon} {topic?.name}
            </span>
            <span className="text-[11px] text-gray-500">{article.readingTime} min</span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors line-clamp-2 mb-2">
            {article.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2 flex-1">{article.description}</p>
          <time className="mt-3 text-xs text-gray-500">
            {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
        </div>
      </article>
    </Link>
  );
}
