self.addEventListener('install', event => {
    console.log("installation de service worker")

    event.waitUntil(
        caches.open("cache01").then((cache)=>{
            return cache.addAll([
                '/',
                '/index.html',
                '/main.js'
            ])
        }))
})

self.addEventListener('activate', (event) => {
    console.log("activation de service worker");
})

self.addEventListener('fetch', (event) => {
    console.log('Evenement fetch', event.request.url)
    /*if(!navigator.onLine) { /*pour vérifier si le navigateur est bien offline
        event.respondWith(new Response("plus de connexion ... mode dégradé"))
        //pour tester, aller dans application, service-workers, "offline"
    }*/

    event.respondWith(
        caches.match(event.request).then((res) => {
            console.log("RES:", res)
            return (res)
        })
    )
})