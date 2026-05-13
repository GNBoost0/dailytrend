'use client';

import { useState, useEffect, useCallback } from 'react';
import { onPromptAvailable, consumeDeferredPrompt } from '@/lib/pwa';

const VAPID_PUBLIC_KEY = 'BD4Tnqty_Ax67GWwG9ctM203c_ay3nLi_J0hzuGjTZ6LAYhq_OqrFB6WUUik8NMVs8F2a7mLoqvcM_J_gEaPa7Q';

function urlBase64ToUint8Array(base64: string) {
  const padding = '='.repeat((4 - base64.length % 4) % 4);
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = globalThis.atob(b64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}

const STORAGE_KEY = 'dt-engagement';
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

interface EngagementData {
  status: 'subscribed' | 'dismissed';
  date: number;
}

function getEngagement(): EngagementData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setEngagement(status: 'subscribed' | 'dismissed') {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ status, date: Date.now() }));
}

// Vérifier si l'utilisateur a vraiment une subscription push active
async function hasActivePushSubscription(): Promise<boolean> {
  try {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) return false;
    const reg = await navigator.serviceWorker.getRegistration('/sw.js');
    if (!reg) return false;
    const sub = await reg.pushManager.getSubscription();
    return !!sub;
  } catch {
    return false;
  }
}

// Attendre que le SW soit actif
async function ensureServiceWorker(): Promise<ServiceWorkerRegistration> {
  const reg = await navigator.serviceWorker.register('/sw.js');
  if (reg.active) return reg;
  return new Promise((resolve, reject) => {
    const sw = reg.installing || reg.waiting;
    if (!sw) { resolve(reg); return; }
    const onStateChange = () => {
      if (sw.state === 'activated') resolve(reg);
      else if (sw.state === 'redundant') reject(new Error('SW redundant'));
    };
    sw.addEventListener('statechange', onStateChange);
    setTimeout(() => resolve(reg), 10000);
  });
}

type PromptStep = 'idle' | 'notifications' | 'homescreen';

export default function EngagementPrompt() {
  const [step, setStep] = useState<PromptStep>('idle');
  const [dismissed, setDismissed] = useState(false);
  const [hasPrompt, setHasPrompt] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return onPromptAvailable(() => setHasPrompt(true));
  }, []);

  // Logique d'affichage principale
  useEffect(() => {
    let cancelled = false;

    async function init() {
      // 1) Vérifier si déjà abonné push
      const isSubscribed = await hasActivePushSubscription();
      if (cancelled) return;

      if (isSubscribed) {
        // Déjà abonné → ne jamais montrer, nettoyer le localStorage
        setEngagement('subscribed');
        return;
      }

      // 2) Vérifier le localStorage
      const data = getEngagement();

      if (data && data.status === 'subscribed') {
        // Marqué abonné mais pas de sub réelle → re-check sera fait au prochain load
        return;
      }

      if (data && data.status === 'dismissed') {
        const elapsed = Date.now() - data.date;
        if (elapsed < ONE_WEEK_MS) return; // Attendre 1 semaine
      }

      // 3) Afficher dans 60s
      const timer = setTimeout(() => {
        if (!cancelled) setStep('notifications');
      }, 60000);

      return () => clearTimeout(timer);
    }

    init();
    return () => { cancelled = true; };
  }, []);

  const dismiss = useCallback(() => {
    setDismissed(true);
    setStep('idle');
    setEngagement('dismissed');
  }, []);

  const enableNotifications = async () => {
    setLoading(true);
    try {
      if (!('serviceWorker' in navigator)) {
        dismiss();
        return;
      }

      const reg = await ensureServiceWorker();

      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        setLoading(false);
        dismiss();
        return;
      }

      const subscription = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      });

      await fetch('/api/push-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'subscribe', subscription: subscription.toJSON() }),
      });

      setEngagement('subscribed');
    } catch {
      // Erreur silencieuse
    }
    setLoading(false);

    // Passer à l'étape homescreen si dispo
    if (hasPrompt) {
      setTimeout(() => setStep('homescreen'), 800);
    } else {
      setDismissed(true);
      setStep('idle');
    }
  };

  const addToHomescreen = async () => {
    const prompt = consumeDeferredPrompt();
    if (prompt) {
      prompt.prompt();
      await prompt.userChoice;
    } else {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        alert('📱 Ouvre le menu de partage (↗️) puis "Sur l\'écran d\'accueil"');
      } else {
        alert('📱 Ouvre le menu du navigateur (⋮) puis "Installer l\'application"');
      }
    }
    setEngagement('subscribed');
    setDismissed(true);
    setStep('idle');
  };

  if (dismissed || step === 'idle') return null;

  return (
    <>
      <div className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm" onClick={dismiss} />
      <div className="fixed bottom-0 left-0 right-0 z-[101] p-4 flex justify-center" style={{ animation: 'slideUp 0.4s ease-out' }}>
        <div className="w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--accent)' }} />

          {step === 'notifications' && (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'var(--accent)', color: 'white' }}>🔔</div>
                <div>
                  <h3 className="font-extrabold text-base" style={{ color: 'var(--text-primary)' }}>Ne rate aucune actu</h3>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>1 notif par jour, c&apos;est tout.</p>
                </div>
              </div>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Reçois chaque jour un récap des meilleurs articles IA, Crypto, Cyber, Gaming et plus encore.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={enableNotifications}
                  disabled={loading}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ background: 'var(--accent)' }}
                >
                  {loading ? '⏳ Activation...' : '🔔 Activer les notifications'}
                </button>
                <button onClick={dismiss} className="px-4 py-2.5 rounded-xl text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                  Plus tard
                </button>
              </div>
            </>
          )}

          {step === 'homescreen' && (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'var(--accent)', color: 'white' }}>📱</div>
                <div>
                  <h3 className="font-extrabold text-base" style={{ color: 'var(--text-primary)' }}>DailyTrend à portée de main</h3>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Accès rapide depuis ton écran</p>
                </div>
              </div>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Ajoute DailyTrend sur ton écran d&apos;accueil pour y accéder en un tap.
              </p>
              <div className="flex gap-2">
                <button onClick={addToHomescreen} className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90" style={{ background: 'var(--accent)' }}>
                  📲 Installer l&apos;app
                </button>
                <button onClick={dismiss} className="px-4 py-2.5 rounded-xl text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                  Non merci
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
