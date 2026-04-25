import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Stockage local des subscriptions dans un fichier JSON
const SUBS_FILE = path.join(process.cwd(), 'data', 'push-subscriptions.json');

async function getSubs(): Promise<any[]> {
  try {
    const data = await fs.readFile(SUBS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSubs(subs: any[]) {
  const dir = path.dirname(SUBS_FILE);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(SUBS_FILE, JSON.stringify(subs, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const subs = await getSubs();

    if (body.action === 'subscribe') {
      const sub = body.subscription;
      // Vérifier si déjà inscrit
      const existing = subs.findIndex((s: any) => s.endpoint === sub.endpoint);
      if (existing >= 0) {
        subs[existing] = { ...sub, date: new Date().toISOString() };
      } else {
        subs.push({ ...sub, date: new Date().toISOString() });
      }
      await saveSubs(subs);
      return NextResponse.json({ status: 'ok', message: 'Subscription enregistrée', total: subs.length });
    }

    if (body.action === 'unsubscribe') {
      const filtered = subs.filter((s: any) => s.endpoint !== body.endpoint);
      await saveSubs(filtered);
      return NextResponse.json({ status: 'ok', message: 'Désinscrit', total: filtered.length });
    }

    if (body.action === 'count') {
      return NextResponse.json({ status: 'ok', count: subs.length });
    }

    return NextResponse.json({ status: 'error', message: 'Action inconnue' }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ status: 'error', message: (err as Error).message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const subs = await getSubs();
    return NextResponse.json({ status: 'ok', count: subs.length, subscriptions: subs });
  } catch (err) {
    return NextResponse.json({ status: 'error', message: (err as Error).message }, { status: 500 });
  }
}
