import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface RecapEntry {
  date: string;        // YYYY-MM-DD
  title: string;       // Titre du récap
  body: string;        // Corps du message du rédacteur
  articles: {
    slug: string;
    title: string;
    description: string;
    topic: string;
    image: string;
    tags: string[];
  }[];
}

const RECAPS_DIR = path.join(process.cwd(), 'content/recaps');

export function getAllRecaps(): RecapEntry[] {
  if (!fs.existsSync(RECAPS_DIR)) return [];
  
  const files = fs.readdirSync(RECAPS_DIR)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse(); // Plus récent d'abord
  
  return files.map(file => {
    const raw = fs.readFileSync(path.join(RECAPS_DIR, file), 'utf-8');
    const { data, content } = matter(raw);
    return {
      date: data.date || file.replace('.md', ''),
      title: data.title || `Récap du ${data.date || file.replace('.md', '')}`,
      body: content.trim(),
      articles: data.articles || [],
    };
  });
}

export function getTodayRecap(): RecapEntry | null {
  const recaps = getAllRecaps();
  return recaps.length > 0 ? recaps[0] : null;
}

export function createRecap(date: string, title: string, body: string, articles: RecapEntry['articles']): void {
  if (!fs.existsSync(RECAPS_DIR)) {
    fs.mkdirSync(RECAPS_DIR, { recursive: true });
  }
  
  const frontmatter = {
    date,
    title,
    articles,
  };
  
  const md = `---\n${Object.entries(frontmatter).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n')}\n---\n\n${body}\n`;
  fs.writeFileSync(path.join(RECAPS_DIR, `${date}.md`), md, 'utf-8');
}
