'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c499922e1a7fc6a98875f5741dc76947",
"index.html": "19d3bff963884aa3b48f83b6124f1912",
"/": "19d3bff963884aa3b48f83b6124f1912",
"main.dart.js": "53fffab5f8d83fd1f2ecc1be5da5171c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "a0408baed6ce7923925f987dcc77b942",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "59fc7d15ac14c847e8702e29cc71a51f",
"assets/AssetManifest.json": "0c77003108dd9453357dfbed435614e7",
"assets/NOTICES": "8b0251ca08977ee6d545bc5d85acd6f3",
"assets/FontManifest.json": "de772feb8c60437b1a75d370c25d7aaa",
"assets/AssetManifest.bin.json": "3b6cbb3d3c980ad5c710e33e9bb458d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "5530dc96a013849f2739b2393d1b8102",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fc5c2181de469995b3ee512ebb6e5c1b",
"assets/fonts/MaterialIcons-Regular.otf": "64dda46d4ad07e4040b7cb823e2d0af5",
"assets/assets/images/career/on_premise.png": "e090c106bbfe49b3f5fe30c5d2c025fd",
"assets/assets/images/career/off_premise.png": "e6aea0dc1d9af6cba1d117dca745461e",
"assets/assets/images/career/sales.png": "530ca47ad2863b757471dc0cbff068bb",
"assets/assets/images/career/it_data.png": "75c67af89f084ba5ef3f3aee2b3ecfc6",
"assets/assets/images/career/model.png": "97651b27268660a2ecb97d897391f18d",
"assets/assets/images/career/trade-mkt.png": "6dbc9deb2dfad94e5ba2291abdb17703",
"assets/assets/images/career/background.png": "a5ffaaf59b754e1518b6fd6b9c531152",
"assets/assets/images/career/procurement.png": "d06aa2c40682bc780bf6309b96a85cd3",
"assets/assets/images/career/rtm.png": "08ca78f85245ce6b77fc34aecffb76d7",
"assets/assets/images/career/it_privacy.png": "f97f708796f28da94997067c0bb07301",
"assets/assets/images/vi.png": "7080ff7096fb7e0607b0569e1e2f518f",
"assets/assets/images/landing_page1.png": "50fbf899b927fb9365b8f2c812188cb8",
"assets/assets/images/fizz_up.png": "e6286d288d9e2d77b1c9889ee643b20a",
"assets/assets/images/en.png": "e667999048e9c8c5c5610d1d33908e52",
"assets/assets/images/model.png": "415e002326f686915693c7b92913a0da",
"assets/assets/images/coke_fresh.png": "683ff17271cb4b67a591540d94554eb4",
"assets/assets/images/water2.png": "c02e4489d8194ed805de3bea51ddc89e",
"assets/assets/images/about/background.png": "01206e65ca48db796b949d86ea72050a",
"assets/assets/images/about/about1.png": "f065c5f70a1f735c2737267a679d8081",
"assets/assets/images/water1.png": "16879e87dafef31023c577763c296415",
"assets/assets/images/background.png": "f95c3edb867f74318492259a1a71f1a2",
"assets/assets/images/logo.png": "27b37624ae91441b57f8c4fd2fbc4780",
"assets/assets/images/logo_white.png": "4064814ec67960b1ba0671c11bee7542",
"assets/assets/images/essence/Model.png": "8c238d62ad8a5597b16a140fd09e0096",
"assets/assets/images/essence/en1.png": "cebd597fd541c663ddf564e2f138f328",
"assets/assets/images/essence/en2.png": "0c22ee16de9bc8317b5e181f8a83d68e",
"assets/assets/images/essence/background.png": "35d4b5b41bd19a52b3fa0b556b6d85aa",
"assets/assets/images/essence/vi1.png": "45be41edd48272b558d9fae6d56e47e8",
"assets/assets/images/apply_now_active.png": "37a9a3c72754cf0cbd7a5595b494de8f",
"assets/assets/images/overview/background.png": "3b0dc21e1ffb346ea56e7b7744d89368",
"assets/assets/images/overview/overview1.png": "4281a2330e40d18c32dcfb12d2c91ff7",
"assets/assets/images/image1.png": "ac654f0947172a41263d8ef0e715aa92",
"assets/assets/images/apply_now.png": "833a7ee65b79f86c7d90955e284dd135",
"assets/assets/resources/districts.json": "4ac129da46a62f4067429931f3ad16e9",
"assets/assets/resources/wards.json": "54503744ade964fe83ef185f49b2abc7",
"assets/assets/resources/cities.json": "234779ad202f47905bee393ab96c52e1",
"assets/assets/font/Poppins-light.ttf": "4f5ac5006e88c6bd33ba44bdd71d2c16",
"assets/assets/font/Poppins-medium.ttf": "b1f91231be5d2704de64eb59f32c9213",
"assets/assets/font/Poppins-light-italic.otf": "8dc38b6da4179fb6fbd123d815240bb7",
"assets/assets/font/Poppins-bold-italic.otf": "39e02f68500b45efdf9d87f5770ca2cc",
"assets/assets/font/Poppins-italic.otf": "64e838b9ef3275db2341f1b023caf63a",
"assets/assets/font/Poppins-semi-bold-italic.otf": "9582ae7be5223034f369a722f052e448",
"assets/assets/font/Poppins-medium-italic.otf": "d11c31441864d4a8048a9763160f561b",
"assets/assets/font/Poppins-regular.ttf": "cfdac3e045c683955e6bd3afabbb8a60",
"assets/assets/font/Poppins-bold.ttf": "53f5bf25fd339d41aded7b8a6181196e",
"assets/assets/font/Poppins-black.ttf": "2638325e100a2c1c5411c267da4d79b9",
"assets/assets/font/Poppins-semi-bold.ttf": "65f6fb50aafbcd361fc0bfb5b5712f31",
"assets/assets/font/Poppins-black-italic.otf": "242874089c5dd06f4746659b06e98f51",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
