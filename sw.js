// E-Budak Service Worker
// Versi cache — ubah nombor ini setiap kali update supaya cache refresh
const CACHE_NAME = 'ebudak-v1';

// Fail yang perlu dicache untuk offline
const FILES_TO_CACHE = [
  '/ebudak/',
  '/ebudak/index.html',
  '/ebudak/manifest.json',
  '/ebudak/icon-192.png',
  '/ebudak/icon-512.png'
];

// Install: cache semua fail penting
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app shell...');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: buang cache lama
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: serve dari cache dulu, baru network (offline-first)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache response baharu
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Kalau offline & tiada cache, tunjuk index.html
        return caches.match('/ebudak/index.html');
      });
    })
  );
});
