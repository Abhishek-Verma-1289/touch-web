const CACHE_NAME = 'lpu-touch-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/dashboard.html',
    '/mess.html',
    '/scanner.html',
    '/approve.html',
    '/breakfast.html',
    '/lunch.html',
    '/tea.html',
    '/dinner.html',
    '/dashboard.css',
    '/manifest.json',
    '/assests/nav.jpg',
    '/assests/foot.jpg',
    '/assests/dashboard.jpg',
    '/assests/mess.jpg',
    '/assests/mess3.jpg',
    '/assests/approvedi.jpg',
    '/assests/approvedf.jpg',
    '/assests/logo192.jpg',
    '/assests/logo512.jpg'
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