// DailyTrend Service Worker — Push notifications
const VAPID_PUBLIC_KEY = 'BJz_Xeqn5j15mWV3zJsOyF6WY76MAPvuUF56JRD7goZvVQ7GYqIhPgn1pYsw7vrhDF10UJ7qU807tG5OYDRNP3I';

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '📰 DailyTrend';
  const options = {
    body: data.body || 'Nouveaux articles disponibles !',
    icon: '/logo-header.png',
    badge: '/logo-header.png',
    data: {
      url: data.url || '/',
    },
    actions: [
      { action: 'open', title: 'Lire' },
      { action: 'close', title: 'Plus tard' },
    ],
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes(url) && 'focus' in client) return client.focus();
      }
      return clients.openWindow(url);
    })
  );
});
