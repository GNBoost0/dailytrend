import Link from 'next/link';
import { Article } from '@/lib/articles';
import { getTopicBySlug } from '@/lib/topics';

interface Props { article: Article; variant?: 'hero' | 'card' | 'compact'; }

export default function ArticleCard({ article, variant = 'card' }: Props) {
  const topic = getTopicBySlug(article.topic);
  const d = new Date(article.date);
  const date = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });

  if (variant === 'hero') return (
    <Link href={`/${article.topic}/${article.slug}`} className="group block">
      <article className="relative rounded-2xl overflow-hidden bg-[#0c0c10] border border-white/[0.04] hover:border-white/[0.08] transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[340px]">
          <div className={`lg:col-span-3 relative bg-gradient-to-br ${topic?.color} overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[140px] opacity-[0.12] group-hover:opacity-[0.18] group-hover:scale-105 transition-all duration-700">{topic?.icon}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0c0c10]/80 hidden lg:block" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur text-[11px] font-semibold text-white/90">
                {topic?.icon} {topic?.name}
              </span>
            </div>
          </div>
          <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3 text-[12px] text-gray-500">
              <time>{date}</time>
              <span>·</span>
              <span>{article.readingTime} min</span>
            </div>
            <h2 className="text-xl lg:text-2xl font-extrabold text-white leading-[1.25] mb-3 group-hover:text-indigo-400 transition-colors line-clamp-3">
              {article.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{article.description}</p>
          </div>
        </div>
      </article>
    </Link>
  );

  if (variant === 'compact') return (
    <Link href={`/${article.topic}/${article.slug}`} className="group block py-3 border-b border-white/[0.04] last:border-0">
      <div className="flex gap-3">
        <div className={`w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br ${topic?.color} flex items-center justify-center`}>
          <span className="text-base opacity-50">{topic?.icon}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-[13px] font-semibold text-gray-300 group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
          <div className="flex items-center gap-1.5 mt-1 text-[11px] text-gray-600">
            <span>{date}</span><span>·</span><span>{article.readingTime} min</span>
          </div>
        </div>
      </div>
    </Link>
  );

  // Default card
  return (
    <Link href={`/${article.topic}/${article.slug}`} className="group block">
      <article className="h-full flex flex-col rounded-xl overflow-hidden bg-[#0c0c10] border border-white/[0.04] hover:border-white/[0.08] transition-all">
        <div className={`relative aspect-[16/10] bg-gradient-to-br ${topic?.color} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-[0.15] group-hover:opacity-[0.22] group-hover:scale-110 transition-all duration-500">{topic?.icon}</span>
          </div>
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/40 backdrop-blur text-[10px] font-semibold text-white/90">
              {topic?.icon} {topic?.name}
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2 text-[11px] text-gray-600">
            <time>{date}</time><span>·</span><span>{article.readingTime} min</span>
          </div>
          <h3 className="text-[15px] font-bold text-white leading-snug line-clamp-2 mb-2 group-hover:text-indigo-400 transition-colors">
            {article.title}
          </h3>
          <p className="text-[13px] text-gray-500 line-clamp-2 flex-1 leading-relaxed">{article.description}</p>
        </div>
      </article>
    </Link>
  );
}
