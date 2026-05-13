'use client';

import { useState, useEffect } from 'react';

const VAPID_PUBLIC_KEY = 'BD4Tnqty_Ax67GWwG9ctM203c_ay3nLi_J0hzuGjTZ6LAYhq_OqrFB6WUUik8NMVs8F2a7mLoqvcM_J_gEaPa7Q';

function urlBase64ToUint8Array(base64: string) {
  const padding = '='.repeat((4 - base64.length % 4) % 4);
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = globalThis.atob(b64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}

async function ensureServiceWorker(): Promise<ServiceWorkerRegistration> {
  const reg = await navigator.serviceWorker.register('/sw.js');
  if (reg.active) return reg;
  return new Promise((resolve) => {
    const sw = reg.installing || reg.waiting;
    if (!sw) { resolve(reg); return; }
    sw.addEventListener('statechange', () => { if (sw.state === 'activated') resolve(reg); });
    setTimeout(() => resolve(reg), 10000);
  });
}

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationModal({ isOpen, onClose }: NotificationModalProps) {
  const [status, setStatus] = useState<'checking' | 'enabled' | 'disabled' | 'unsupported'>('checking');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setError('');
    checkStatus();
  }, [isOpen]);

  const checkStatus = async () => {
    setStatus('checking');
    try {
      if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
        setStatus('unsupported');
        return;
      }
      const reg = await ensureServiceWorker();
      const sub = await reg.pushManager.getSubscription();
      setStatus(sub ? 'enabled' : 'disabled');
    } catch {
      setStatus('disabled');
    }
  };

  const enableNotifications = async () => {
    setLoading(true);
    setError('');
    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        setError('Permission refusée.');
        setLoading(false);
        return;
      }

      const reg = await ensureServiceWorker();
      const subscription = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      });

      const res = await fetch('/api/push-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'subscribe', subscription: subscription.toJSON() }),
      });

      if (res.ok) {
        setStatus('enabled');
        localStorage.setItem('dt-engagement', JSON.stringify({ status: 'subscribed', date: Date.now() }));
      } else {
        setError('Erreur serveur.');
      }
    } catch (e: any) {
      setError(e.message || 'Erreur');
    }
    setLoading(false);
  };

  const disableNotifications = async () => {
    setLoading(true);
    setError('');
    try {
      const reg = await ensureServiceWorker();
      const sub = await reg.pushManager.getSubscription();
      if (sub) {
        await fetch('/api/push-subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'unsubscribe', endpoint: sub.endpoint }),
        });
        await sub.unsubscribe();
      }
      setStatus('disabled');
      localStorage.setItem('dt-engagement', JSON.stringify({ status: 'dismissed', date: Date.now() }));
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
        <div className="w-full max-w-sm rounded-2xl p-6 shadow-2xl relative" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
          <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ color: 'var(--text-muted)', background: 'var(--bg-secondary)' }}>✕</button>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--accent)', color: 'white' }}>🔔</div>
            <div>
              <h3 className="font-extrabold text-base" style={{ color: 'var(--text-primary)' }}>Notifications</h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>1 notif par jour, jamais de spam</p>
            </div>
          </div>
          {error && <div className="mb-3 p-3 rounded-xl text-xs text-red-600 bg-red-50">{error}</div>}
          {status === 'checking' && <p className="text-sm text-center py-4" style={{ color: 'var(--text-muted)' }}>⏳ Vérification...</p>}
          {status === 'unsupported' && <p className="text-sm text-center py-4" style={{ color: 'var(--text-muted)' }}>Notifications non supportées.</p>}
          {(status === 'enabled' || status === 'disabled') && (
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl text-sm" style={{ background: status === 'enabled' ? 'rgba(34,197,94,0.1)' : 'var(--bg-secondary)', color: status === 'enabled' ? '#22c55e' : 'var(--text-muted)' }}>
                <span className="text-lg">{status === 'enabled' ? '✅' : '⚪'}</span>
                <span className="font-medium">{status === 'enabled' ? 'Notifications activées' : 'Notifications désactivées'}</span>
              </div>
              <button onClick={status === 'disabled' ? enableNotifications : disableNotifications} disabled={loading} className="w-full py-3 rounded-xl text-sm font-bold disabled:opacity-50" style={{ background: status === 'disabled' ? 'var(--accent)' : 'var(--bg-secondary)', color: status === 'disabled' ? 'white' : 'var(--text-primary)', border: status === 'disabled' ? 'none' : '1px solid var(--border)' }}>
                {loading ? '⏳ Chargement...' : status === 'disabled' ? '🔔 Activer' : '🔕 Désactiver'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
