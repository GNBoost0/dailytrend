import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGODB_URI || '';
const DB_NAME = 'dailytrend';
const COLLECTION = 'push_subscriptions';

let cachedClient: MongoClient | null = null;

async function getClient(): Promise<MongoClient> {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const client = await getClient();
    const db = client.db(DB_NAME);
    const col = db.collection(COLLECTION);

    if (body.action === 'subscribe') {
      const sub = body.subscription;
      const endpoint = sub.endpoint;
      
      await col.updateOne(
        { endpoint },
        {
          $set: {
            endpoint,
            keys: sub.keys,
            date: new Date().toISOString(),
          },
        },
        { upsert: true }
      );

      const count = await col.countDocuments();
      return NextResponse.json({ status: 'ok', message: 'Subscription enregistrée', total: count });
    }

    if (body.action === 'unsubscribe') {
      await col.deleteOne({ endpoint: body.endpoint });
      const count = await col.countDocuments();
      return NextResponse.json({ status: 'ok', message: 'Désinscrit', total: count });
    }

    return NextResponse.json({ status: 'error', message: 'Action inconnue' }, { status: 400 });
  } catch (err) {
    return NextResponse.json(
      { status: 'error', message: (err as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await getClient();
    const db = client.db(DB_NAME);
    const col = db.collection(COLLECTION);
    const subs = await col.find({}, { projection: { _id: 0 } }).toArray();
    return NextResponse.json({ status: 'ok', count: subs.length, subscriptions: subs });
  } catch (err) {
    return NextResponse.json(
      { status: 'error', message: (err as Error).message },
      { status: 500 }
    );
  }
}
