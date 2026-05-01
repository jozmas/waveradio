self.addEventListener('install', (e) => {
  console.log('WaveRadio SW installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('WaveRadio SW activated');
});

self.addEventListener('fetch', (e) => {
  // Tento prázdny handler stačí na to, aby Chrome povolil inštaláciu
});