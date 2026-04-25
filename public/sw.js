/// <reference lib="webworker" />
declare let self: ServiceWorkerGlobalScope;

const CACHE_NAME = 'dailytrend-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/logo-header.png',
  '/icon-512.png',
];

// Installation — pré-cache les assets statiques
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activation — nettoyer les vieux caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch — network first, cache fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache les pages et assets en succès
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // Fallback cache si hors ligne
        return caches.match(event.request).then((cached) => {
          return cached || new Response('Hors ligne', { status: 503 });
        });
      })
  );
});

// Push notification
self.addEventListener('push', (event) => {
  let data: any = {};
  try {
    data = event.data?.json() || {};
  } catch {
    data = { title: '📰 DailyTrend', body: 'Nouveaux articles disponibles !' };
  }

  const title = data.title || '📰 DailyTrend';
  const options: NotificationOptions = {
    body: data.body || 'De nouveaux articles sont disponibles.',
    icon: '/icon-512.png',
    badge: '/icon-512.png',
    tag: 'dailytrend-daily',
    data: { url: data.url || '/' },
    actions: [
      { action: 'open', title: 'Lire' },
      { action: 'dismiss', title: 'Plus tard' },
    ],
    vibrate: [100, 50, 100],
    renotify: true,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Clic sur notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const urlToOpen = event.notification.data?.url || '/';

  if (event.action === 'dismiss') return;

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if (client.url.includes(new URL(urlToOpen, self.location.origin).pathname) && 'focus' in client) {
          return client.focus();
        }
      }
      return self.clients.openWindow(urlToOpen);
    })
  );
});

export {};
