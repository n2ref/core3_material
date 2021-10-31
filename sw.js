self.importScripts('/assets/js/lib/idb-keyval.min.js');

const CACHE_NAME     = 'v9';
const includeToCache = [
    '/',
    '/manifest.json',
    '/index.html',

    '/assets/css/lib/material-components-web.min.css',
    '/assets/css/main.css',
    '/assets/css/auth.css',
    '/assets/css/menu.css',

    '/assets/fonts/material-icons.woff2',
    '/assets/fonts/material-icons-outlined.woff2',
    '/assets/fonts/material-icons-round.woff2',
    '/assets/fonts/material-icons-sharp.woff2',
    '/assets/fonts/material-icons-two-tone.woff2',

    '/assets/js/lib/ejs/ejs.min.js',
    '/assets/js/lib/jquery.min.js',
    '/assets/js/lib/material-components-web.min.js',
    '/assets/js/lib/idb-keyval.min.js',
    '/assets/js/md5.min.js',
    '/assets/js/main.js',
    '/assets/js/auth.js',
    '/assets/js/menu.js',

    '/assets/img/favicon.ico',
    '/assets/img/logo.png',
    '/assets/img/70x70.png',
    '/assets/img/150x150.png',
    '/assets/img/192x192.png',
    '/assets/img/310x150.png'
];




// Запуск сервис-воркера и кеширование всего содержимого приложения
self.addEventListener('install', e => {

    // не ждать обновления кэша
    self.skipWaiting();

    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(includeToCache);
        })
    );
});


// Активация
self.addEventListener('activate', event => {

    self.clients.claim();

    // удалите все кеши, которых нет в cacheName который избавится от версии
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (CACHE_NAME !== key) {
                    return caches.delete(key);
                }
            })
        )).then(() => {
            console.log(CACHE_NAME + ' now ready to handle fetches!');
        })
    );
});


// Просматривает все запросы
self.addEventListener('fetch', e => {

    // Добавление авторизапции к запросам
    if (e.request.url.substr(0, location.origin.length) === location.origin &&
        (
            (e.request.destination === 'image' &&
             e.request.url.indexOf('index.php') === -1 &&
             ['.png', '.jpg', '.gif', '.ico'].indexOf(e.request.url.substr(-4)) === -1) ||

            (e.request.destination === '' &&
             e.request.headers.get('Core2m') === '')
        )
    ) {

        e.respondWith(async function() {
            const authToken = await idbKeyvalMin.get('auth-token');

            let modifiedHeaders = new Headers(e.request.headers);
            modifiedHeaders.set('CORE2M', 'Bearer ' + authToken);

            const newRequest = new Request(e.request, {
                method: e.request.method,
                headers: modifiedHeaders,
                mode: 'same-origin',
                credentials: e.request.credentials,
                redirect: 'manual'
            })

            return fetch(newRequest);
        }());

    } else {
        // если сервер ничего не вернул, то берем из кэша
        // ЗАКОММЕНТИРОВАТЬ ЭТОТ БЛОК ДЛЯ РАЗРАБОТКИ
        // e.respondWith(
        //     caches.match(e.request).then(response => {
        //         return response || fetch(e.request);
        //     })
        // );
    }
});



// Push
self.addEventListener('push', (event) => {
    console.log('SW: push');
    const title =   'Push уведомление из Service Worker';
    const options = {
        'body' : event.data.text()
    };
    event.waitUntil(self.registration.showNotification(title, options))
});


/**
 *
 */
self.addEventListener('message', function (messageEvent) {

    switch (messageEvent.data.topic) {
        case 'set-auth-token':
            //setStorage('auth-token', messageEvent.data.token);
            idbKeyvalMin.set('auth-token', messageEvent.data.token);
            break;
    }
});








/**
 *
 * @param success
 */
function connectStorage (success) {

    let openRequest = indexedDB.open('core-web', 1);


    openRequest.onupgradeneeded = function() {
        let db = openRequest.result;

        if ( ! db.objectStoreNames.contains('storage')) {
            db.createObjectStore('storage');
        }
    };

    openRequest.onerror = function() {
        console.error("Error", openRequest.error);
    };

    openRequest.onsuccess = function () {
        success(openRequest.result);
    }
}


/**
 *
 * @param key
 * @param success
 */
async function getStorage(key, success) {

    let promise = new Promise((resolve, reject) => {

        connectStorage(function (db) {

            let transaction = db.transaction('storage', 'readwrite');
            let storage = transaction.objectStore("storage");

            let result = storage.get(key);

            result.onsuccess = function (event) {
                resolve(event.target.result)
            }
        });
    });

    return await promise;
}


/**
 * @param key
 * @param value
 */
function setStorage(key, value) {

    connectStorage(function (db) {
        let transaction = db.transaction('storage', 'readwrite');
        let storage = transaction.objectStore("storage");

        let request = storage.put(value, key);


        // Добавлено в хранилище
        request.onsuccess = function() {

        };

        // Ошибка
        request.onerror = function() {
            console.error("Ошибка", request.error);
        };
    });
}


