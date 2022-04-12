/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-5ad03d8';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./basne_z_koncentracniho_tabora_001.html","./basne_z_koncentracniho_tabora_002.html","./basne_z_koncentracniho_tabora_003.html","./basne_z_koncentracniho_tabora_004.html","./basne_z_koncentracniho_tabora_005.html","./basne_z_koncentracniho_tabora_006.html","./basne_z_koncentracniho_tabora_007.html","./basne_z_koncentracniho_tabora_008.html","./basne_z_koncentracniho_tabora_009.html","./basne_z_koncentracniho_tabora_010.html","./basne_z_koncentracniho_tabora_011.html","./basne_z_koncentracniho_tabora_012.html","./basne_z_koncentracniho_tabora_013.html","./basne_z_koncentracniho_tabora_014.html","./basne_z_koncentracniho_tabora_015.html","./basne_z_koncentracniho_tabora_016.html","./basne_z_koncentracniho_tabora_017.html","./basne_z_koncentracniho_tabora_018.html","./basne_z_koncentracniho_tabora_019.html","./basne_z_koncentracniho_tabora_020.html","./basne_z_koncentracniho_tabora_021.html","./basne_z_koncentracniho_tabora_022.html","./basne_z_koncentracniho_tabora_023.html","./basne_z_koncentracniho_tabora_024.html","./basne_z_koncentracniho_tabora_025.html","./basne_z_koncentracniho_tabora_026.html","./basne_z_koncentracniho_tabora_027.html","./basne_z_koncentracniho_tabora_028.html","./basne_z_koncentracniho_tabora_029.html","./basne_z_koncentracniho_tabora_030.html","./basne_z_koncentracniho_tabora_031.html","./basne_z_koncentracniho_tabora_032.html","./basne_z_koncentracniho_tabora_033.html","./basne_z_koncentracniho_tabora_034.html","./basne_z_koncentracniho_tabora_035.html","./basne_z_koncentracniho_tabora_036.html","./basne_z_koncentracniho_tabora_037.html","./basne_z_koncentracniho_tabora_038.html","./basne_z_koncentracniho_tabora_039.html","./basne_z_koncentracniho_tabora_040.html","./basne_z_koncentracniho_tabora_041.html","./basne_z_koncentracniho_tabora_042.html","./basne_z_koncentracniho_tabora_043.html","./basne_z_koncentracniho_tabora_044.html","./basne_z_koncentracniho_tabora_045.html","./basne_z_koncentracniho_tabora_046.html","./basne_z_koncentracniho_tabora_047.html","./basne_z_koncentracniho_tabora_048.html","./basne_z_koncentracniho_tabora_049.html","./basne_z_koncentracniho_tabora_050.html","./basne_z_koncentracniho_tabora_051.html","./basne_z_koncentracniho_tabora_052.html","./basne_z_koncentracniho_tabora_053.html","./basne_z_koncentracniho_tabora_054.html","./basne_z_koncentracniho_tabora_055.html","./basne_z_koncentracniho_tabora_056.html","./basne_z_koncentracniho_tabora_057.html","./basne_z_koncentracniho_tabora_058.html","./basne_z_koncentracniho_tabora_059.html","./basne_z_koncentracniho_tabora_060.html","./basne_z_koncentracniho_tabora_061.html","./basne_z_koncentracniho_tabora_062.html","./basne_z_koncentracniho_tabora_063.html","./basne_z_koncentracniho_tabora_064.html","./basne_z_koncentracniho_tabora_065.html","./basne_z_koncentracniho_tabora_066.html","./basne_z_koncentracniho_tabora_067.html","./basne_z_koncentracniho_tabora_068.html","./basne_z_koncentracniho_tabora_069.html","./basne_z_koncentracniho_tabora_070.html","./basne_z_koncentracniho_tabora_071.html","./basne_z_koncentracniho_tabora_072.html","./basne_z_koncentracniho_tabora_073.html","./basne_z_koncentracniho_tabora_074.html","./basne_z_koncentracniho_tabora_075.html","./basne_z_koncentracniho_tabora_076.html","./basne_z_koncentracniho_tabora_077.html","./basne_z_koncentracniho_tabora_078.html","./basne_z_koncentracniho_tabora_079.html","./basne_z_koncentracniho_tabora_080.html","./basne_z_koncentracniho_tabora_081.html","./basne_z_koncentracniho_tabora_082.html","./basne_z_koncentracniho_tabora_083.html","./basne_z_koncentracniho_tabora_084.html","./basne_z_koncentracniho_tabora_085.html","./basne_z_koncentracniho_tabora_086.html","./basne_z_koncentracniho_tabora_087.html","./basne_z_koncentracniho_tabora_088.html","./basne_z_koncentracniho_tabora_089.html","./basne_z_koncentracniho_tabora_090.html","./basne_z_koncentracniho_tabora_091.html","./basne_z_koncentracniho_tabora_092.html","./basne_z_koncentracniho_tabora_093.html","./basne_z_koncentracniho_tabora_094.html","./basne_z_koncentracniho_tabora_095.html","./basne_z_koncentracniho_tabora_096.html","./basne_z_koncentracniho_tabora_097.html","./basne_z_koncentracniho_tabora_098.html","./basne_z_koncentracniho_tabora_099.html","./basne_z_koncentracniho_tabora_100.html","./basne_z_koncentracniho_tabora_101.html","./basne_z_koncentracniho_tabora_102.html","./basne_z_koncentracniho_tabora_103.html","./basne_z_koncentracniho_tabora_104.html","./basne_z_koncentracniho_tabora_105.html","./basne_z_koncentracniho_tabora_106.html","./basne_z_koncentracniho_tabora_107.html","./basne_z_koncentracniho_tabora_108.html","./basne_z_koncentracniho_tabora_109.html","./basne_z_koncentracniho_tabora_110.html","./basne_z_koncentracniho_tabora_111.html","./basne_z_koncentracniho_tabora_112.html","./basne_z_koncentracniho_tabora_113.html","./basne_z_koncentracniho_tabora_114.html","./basne_z_koncentracniho_tabora_115.html","./basne_z_koncentracniho_tabora_116.html","./basne_z_koncentracniho_tabora_117.html","./basne_z_koncentracniho_tabora_118.html","./basne_z_koncentracniho_tabora_119.html","./basne_z_koncentracniho_tabora_120.html","./basne_z_koncentracniho_tabora_121.html","./basne_z_koncentracniho_tabora_122.html","./basne_z_koncentracniho_tabora_123.html","./basne_z_koncentracniho_tabora_124.html","./basne_z_koncentracniho_tabora_125.html","./basne_z_koncentracniho_tabora_126.html","./basne_z_koncentracniho_tabora_127.html","./basne_z_koncentracniho_tabora_128.html","./basne_z_koncentracniho_tabora_129.html","./colophon.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/image001.jpg","./resources/image002.jpg","./resources/image003.png","./resources/obalka.jpg","./resources/upoutavka_eknihy.jpg","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
