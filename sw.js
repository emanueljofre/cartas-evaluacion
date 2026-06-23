/* Service worker — habilita instalar como PWA y uso offline.
   Solo corre cuando la app se sirve por http(s) (no en file://).

   Estrategia:
   - App y mazos (mismo origen) + navegaciones → NETWORK-FIRST: cada carga online trae lo último
     publicado (así un deploy nuevo se ve en la siguiente visita, sin bumpear versiones a mano).
     Si no hay red, cae al cache (offline sigue funcionando).
   - /vendor/ (KaTeX, inmutable) → CACHE-FIRST (rápido y offline).
   Bump CACHE cuando cambie la lista CORE o esta lógica. */
var CACHE = "flashcards-v11";
var CORE = [
  ".",
  "index.html",
  "app.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "vendor/katex/katex.min.css",
  "vendor/katex/katex.min.js",
  "banco/manifest.js",
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE).catch(function () {}); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { return k === CACHE ? null : caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function putCopy(req, res) {
  if (res && res.status === 200 && res.type === "basic") {
    var copy = res.clone();
    caches.open(CACHE).then(function (c) { c.put(req, copy); });
  }
  return res;
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var sameOrigin = url.origin === self.location.origin;

  // KaTeX vendorizado: inmutable → cache-first.
  if (sameOrigin && url.pathname.indexOf("/vendor/") >= 0) {
    e.respondWith(
      caches.match(req).then(function (hit) {
        return hit || fetch(req).then(function (res) { return putCopy(req, res); });
      })
    );
    return;
  }

  // App, mazos y navegaciones: network-first con fallback al cache (offline).
  // `cache: "no-cache"` fuerza revalidación contra el servidor (ETag → 304 si no cambió,
  // 200 fresco si cambió). Sin esto, el propio fetch del SW podía recibir una copia del
  // HTTP cache del navegador y servir mazos/app viejos pese a estar "online".
  if (sameOrigin || req.mode === "navigate") {
    var fresh = fetch(req, { cache: "no-cache" }).catch(function () { return fetch(req); });
    e.respondWith(
      fresh.then(function (res) { return putCopy(req, res); }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || (req.mode === "navigate" ? caches.match("index.html") : undefined);
        });
      })
    );
    return;
  }
  // Cross-origin (p. ej. fonts de Google): dejar pasar; lo cachea el navegador.
});
