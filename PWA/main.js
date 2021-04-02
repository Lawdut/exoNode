if (navigator.serviceWorker) {
    //installation d'un service worker
    //INSTALLING du cycle de vie du service worker
    navigator.serviceWorker.register('service-worker.js');
}else {
    console.log ("t'es un looser safari");
}