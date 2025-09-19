const CACHE_NAME = 'lpu-touch-v4';
const urlsToCache = [
    '/touch-web/',
    '/touch-web/index.html',
    '/touch-web/dashboard.html',
    '/touch-web/mess.html',
    '/touch-web/scanner.html',
    '/touch-web/approve.html',
    '/touch-web/breakfast.html',
    '/touch-web/lunch.html',
    '/touch-web/tea.html',
    '/touch-web/dinner.html',
    '/touch-web/dashboard.css',
    '/touch-web/manifest.json',
    '/touch-web/assests/nav.jpg',
    '/touch-web/assests/foot.jpg',
    '/touch-web/assests/dashboard.jpg',
    '/touch-web/assests/mess.jpg',
    '/touch-web/assests/mess3.jpg',
    '/touch-web/assests/approvedi.jpg',
    '/touch-web/assests/approvedf.jpg',
    '/touch-web/assests/logo192.png',
    '/touch-web/assests/logo512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});