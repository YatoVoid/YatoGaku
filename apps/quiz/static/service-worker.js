/**
 * Service Worker for Smart Quiz PWA
 * Provides offline functionality and caching strategies
 */

const CACHE_NAME = 'smart-quiz-v1';
const RUNTIME_CACHE = 'smart-quiz-runtime-v1';

// Files to cache on install (critical app shell)
const PRECACHE_URLS = [
  '/',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Install event - precache app shell
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Precaching app shell');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions and other origins
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version and update cache in background
          fetchAndCache(request);
          return cachedResponse;
        }

        // Not in cache, fetch from network
        return fetchAndCache(request);
      })
      .catch(() => {
        // Network error and not in cache - return offline page if available
        if (request.destination === 'document') {
          return caches.match('/');
        }
      })
  );
});

/**
 * Fetch from network and cache the response
 */
function fetchAndCache(request) {
  return fetch(request)
    .then((response) => {
      // Don't cache non-successful responses
      if (!response || response.status !== 200 || response.type === 'error') {
        return response;
      }

      // Clone the response
      const responseToCache = response.clone();

      // Cache the response
      caches.open(RUNTIME_CACHE)
        .then((cache) => {
          cache.put(request, responseToCache);
        });

      return response;
    });
}

// Listen for messages from the app
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});
