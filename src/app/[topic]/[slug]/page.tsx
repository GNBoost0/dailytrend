import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getArticle, getRelatedArticles, getAllArticles } from '@/lib/articles';
import { getTopicBySlug, topics } from '@/lib/topics';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export async function generateStaticParams() {
  return getAllArticles().map(a => ({ topic: a.topic, slug: a.slug }));
}
export async function generateMetadata({ params }: { params: { topic: string; slug: string } }) {
  const a = getArticle(params.topic, params.slug);
  if (!a) return {};
  return { title: a.title, description: a.description, openGraph: { title: a.title, description: a.description, type: 'article', publishedTime: a.date, images: a.image ? [a.image] : [] } };
}

async function md(s: string) { return (await remark().use(gfm).use(html).process(s)).toString(); }

export default async function ArticlePage({ params }: { params: { topic: string; slug: string } }) {
  const article = getArticle(params.topic, params.slug);
  if (!article) notFound();
  const topic = getTopicBySlug(params.topic);
  const related = getRelatedArticles(article, 5);
  const htmlRaw = await md(article.content);
  // Wrap tables in scrollable container
  const html_ = htmlRaw.replace(/<table>/g, '<div class="table-wrapper"><table>').replace(/<\/table>/g, '</table></div>');
  const dateStr = new Date(article.date).toLocaleDateString('fr-FR', { day:'numeric', month:'long', year:'numeric' });
  const ld = { '@context':'https://schema.org','@type':'Article', headline:article.title, description:article.description, datePublished:article.date, image:article.image, author:{'@type':'Person',name:'Julian COLPART',url:'https://www.dailytrend.fr/a-propos',image:'https://www.dailytrend.fr/images/author-julian-colpart.png',jobTitle:'Fondateur & Rédacteur en chef',worksFor:{'@type':'Organization',name:'DailyTrend'}}, publisher:{'@type':'Organization',name:'DailyTrend',logo:{'@type':'ImageObject',url:'https://www.dailytrend.fr/logo.png'}} };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}} />
      <main className="flex-1">
        {/* Hero with image + strong overlay for text readability */}
        <div className="relative border-b" style={{borderColor:'var(--border)'}}>
          {article.image && (
            <div className="absolute inset-0">
              <img src={article.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/85 to-[var(--bg-primary)]/50" />
            </div>
          )}
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
            {/* Breadcrumb with text shadow */}
            <div className="flex items-center gap-2 mb-4 text-xs whitespace-nowrap overflow-hidden" style={{color:'#ccc', textShadow:'0 1px 4px rgba(0,0,0,0.8)'}}>
              <Link href={`/${params.topic}`} className="hover:text-white transition-colors shrink-0">{topic?.icon} {topic?.name}</Link><span className="shrink-0">/</span>
              <span className="truncate">{article.title}</span>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {article.tags.map(t => (
                <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-medium backdrop-blur-sm" style={{background:'rgba(0,0,0,0.4)',color:'#ddd',textShadow:'0 1px 2px rgba(0,0,0,0.5)'}}>{t}</span>
              ))}
            </div>
            {/* Title with strong shadow */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.2] mb-4 text-white" style={{textShadow:'0 2px 10px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)'}}>{article.title}</h1>
            {/* Description with shadow */}
            <p className="text-base sm:text-lg leading-relaxed text-gray-200" style={{textShadow:'0 1px 4px rgba(0,0,0,0.7)'}}>{article.description}</p>
            {/* Meta — auteur avec photo, date, lecture */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm font-semibold text-white" style={{WebkitTextStroke:'0.8px rgba(0,0,0,0.8)'}}>
              <a href="/a-propos" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <img src="/images/author-julian-colpart.png" alt="Julian COLPART" className="w-9 h-9 rounded-full object-cover ring-2 ring-white/40" />
                <span>Julian COLPART</span>
              </a>
              <time>{dateStr}</time>
              <span>{article.readingTime} min de lecture</span>
            </div>
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <article className="flex-1 max-w-3xl prose-article">
              <div dangerouslySetInnerHTML={{__html: html_}} />

              {/* Bloc auteur en bas d'article */}
              <div className="mt-12 p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5" style={{background:'var(--bg-secondary)', border:'1px solid var(--border)'}}>
                <img src="/images/author-julian-colpart.png" alt="Julian COLPART" className="w-20 h-20 rounded-full object-cover shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-base font-extrabold mb-0.5" style={{color:'var(--text-primary)'}}>Julian COLPART</p>
                  <p className="text-xs font-semibold mb-2" style={{color:'var(--accent)'}}>Fondateur & Rédacteur en chef</p>
                  <p className="text-sm leading-relaxed" style={{color:'var(--text-secondary)'}}>Passionné de tech, d'IA et de tendances qui façonnent notre quotidien. Je vérifie et valide chaque article publié sur DailyTrend pour garantir l'exactitude et la qualité de l'information.</p>
                </div>
              </div>
            </article>

            <aside className="lg:w-[280px] shrink-0 space-y-8">
              {/* Related articles */}
              {related.length > 0 && (
                <div>
                  <h3 className="text-base font-extrabold mb-4" style={{color:'var(--text-primary)'}}>À lire aussi</h3>
                  {related.map(a => <ArticleCard key={a.slug} article={a} variant="compact" />)}
                </div>
              )}

              {/* Topics — cartes comme sur l'accueil */}
              <div>
                <h3 className="text-base font-extrabold mb-4" style={{color:'var(--text-primary)'}}>Rubriques</h3>
                <div className="grid grid-cols-2 gap-2">
                  {topics.map(t => (
                    <Link key={t.id} href={`/${t.slug}`}
                      className="group relative overflow-hidden rounded-xl transition-all hover:opacity-90" style={{border:'1px solid var(--border)'}}>
                      <div className="aspect-[4/3] relative">
                        {t.image ? (
                          <img src={t.image} alt={t.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${(t as any).color}`} />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                          <span className="text-xl mb-0.5 drop-shadow-lg">{t.icon}</span>
                          <span className="text-[10px] font-bold text-white text-center leading-tight drop-shadow-md">{t.name}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
