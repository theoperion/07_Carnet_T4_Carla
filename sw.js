/* Carnet T4 (Carla) · hors connexion (calé sur le Carnet T3 1.8.3)
   Réseau d'abord pour la page et les scripts (la dernière version est toujours prise quand il y a du réseau),
   copie du téléphone si le réseau est absent ou trop lent. Les appels au script Google ne passent jamais par ici. */
importScripts('version.js');   // un changement de numéro dans version.js renouvelle tout le cache
const CACHE = 'carnet-t4-carla-' + ((self.CARNET_VERSION || {}).app || '0');
const ASSETS = ['./', './index.html', './version.js', './manifest.json', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => Promise.all(ASSETS.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting())); });
// ne nettoie que SES caches : Versus et le Carnet T3, sur le même site, gardent leur hors connexion
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => (x.startsWith('carnet-t4-carla-') && x !== CACHE) || /^carnet-t3-v\d+$/.test(x)).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
const delai = ms => new Promise((_, rej) => setTimeout(() => rej(new Error('lent')), ms));
self.addEventListener('fetch', e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== location.origin) return;
  const page = req.mode === 'navigate' || /\.(html|js)$/.test(u.pathname) || u.pathname.endsWith('/');
  const frais = fetch(req, { cache: 'no-cache' }).then(r => { if (r && r.ok) { const copie = r.clone(); return caches.open(CACHE).then(c => c.put(req, copie)).then(() => r); } return r; });
  e.waitUntil(frais.catch(() => null));   // la nouvelle version est gardée même si elle arrive tard
  e.respondWith((async () => {
    const c = await caches.open(CACHE), hit = await c.match(req, { ignoreSearch: true }) || (req.mode === 'navigate' ? await c.match('./index.html') : null);
    if (!page && hit) return hit;                                   // icônes, manifeste : copie d'abord
    try { return await Promise.race([frais, delai(4000)]); }        // page et scripts : réseau d'abord
    catch (err) { if (hit) return hit; throw err; }
  })());
});
