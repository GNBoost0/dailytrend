import { NextResponse } from 'next/server';

// Google Apps Script Web App URL
const APPS_SCRIPT_URL = process.env.DT_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbw_R9ILYYBguy_6eeVfAO4DflWdek8cIMfTwfgcfDfxbrY4YISvtdRwWpJDQI_xSrVr3Q/exec';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const resp = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(body),
      redirect: 'follow',
    });

    const text = await resp.text();
    try {
      const data = JSON.parse(text);
      return NextResponse.json(data);
    } catch {
      return NextResponse.json({ status: 'ok', raw: text });
    }
  } catch (err) {
    return NextResponse.json(
      { status: 'error', message: (err as Error).message },
      { status: 500 }
    );
  }
}
