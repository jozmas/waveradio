const CACHE_NAME = 'waveradio-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Toto zabezpečí, že streamy budú fungovať aj cez service worker
    event.respondWith(fetch(event.request));
});