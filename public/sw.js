// DailyTrend Service Worker v2 — PWA conforme
const CACHE_NAME = 'dailytrend-v2';

const PRECACHE_URLS = [
  '/',
  '/manifest.json',
  '/logo-header.png',
  '/icon-512x512.png',
  '/icon-maskable-512.png',
  '/apple-touch-icon.png',
];

// Install — pré-cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

// Activate — nettoyer vieux caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch — network first, cache fallback
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        if (response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(function() {
        return caches.match(event.request).then(function(cached) {
          return cached || new Response('Hors ligne', { status: 503 });
        });
      })
  );
});

// Push notifications
self.addEventListener('push', function(event) {
  var data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: 'DailyTrend', body: 'Nouveaux articles !' };
  }

  var title = data.title || 'DailyTrend';
  var options = {
    body: data.body || 'De nouveaux articles sont disponibles.',
    icon: '/icon-512x512.png',
    badge: '/icon-maskable-512.png',
    tag: 'dailytrend-daily',
    data: { url: data.url || '/' },
    actions: [
      { action: 'open', title: 'Lire' },
      { action: 'dismiss', title: 'Plus tard' }
    ],
    vibrate: [100, 50, 100],
    renotify: true
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'dismiss') return;

  var url = (event.notification.data && event.notification.data.url) || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clients) {
      for (var i = 0; i < clients.length; i++) {
        if (clients[i].url.indexOf(url) !== -1 && 'focus' in clients[i]) {
          return clients[i].focus();
        }
      }
      return self.clients.openWindow(url);
    })
  );
});
