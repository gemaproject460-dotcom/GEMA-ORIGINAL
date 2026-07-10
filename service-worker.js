const CACHE_NAME = "gema-offline-v1";


const ARCHIVOS = [

    "/GEMA-ORIGINAL/",

    "/GEMA-ORIGINAL/index.html",
    "/GEMA-ORIGINAL/index.css",
    "/GEMA-ORIGINAL/index.js",

    "/GEMA-ORIGINAL/capacitaciones.html",
    "/GEMA-ORIGINAL/capacitaciones.css",
    "/GEMA-ORIGINAL/capacitaciones.js",

    "/GEMA-ORIGINAL/donaciones.html",
    "/GEMA-ORIGINAL/donaciones.css",
    "/GEMA-ORIGINAL/donaciones.js",

    "/GEMA-ORIGINAL/informacion.html",
    "/GEMA-ORIGINAL/informacion.css",
    "/GEMA-ORIGINAL/informacion.js",

    "/GEMA-ORIGINAL/k9.html",
    "/GEMA-ORIGINAL/k9.css",
    "/GEMA-ORIGINAL/k9.js",

    "/GEMA-ORIGINAL/mapa.html",

    "/GEMA-ORIGINAL/monitoreo.html",
    "/GEMA-ORIGINAL/monitoreo.css",
    "/GEMA-ORIGINAL/monitoreo.js",

    "/GEMA-ORIGINAL/naturales.html",
    "/GEMA-ORIGINAL/naturales.css",
    "/GEMA-ORIGINAL/naturales.js",

    "/GEMA-ORIGINAL/niños.html",
    "/GEMA-ORIGINAL/niños.css",
    "/GEMA-ORIGINAL/niños.js",

    "/GEMA-ORIGINAL/prevencion.html",
    "/GEMA-ORIGINAL/prevencion.css",
    "/GEMA-ORIGINAL/prevencion.js",

    "/GEMA-ORIGINAL/productos.html",
    "/GEMA-ORIGINAL/productos.css",

    "/GEMA-ORIGINAL/sangre.html",
    "/GEMA-ORIGINAL/sangre.css",
    "/GEMA-ORIGINAL/sangre.js",

    "/GEMA-ORIGINAL/urbanas.html",
    "/GEMA-ORIGINAL/urbanas.css",
    "/GEMA-ORIGINAL/urbanas.js"

];



self.addEventListener("install", evento => {

    evento.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => {

            return cache.addAll(ARCHIVOS);

        })

    );

});



self.addEventListener("fetch", evento => {

    evento.respondWith(

        caches.match(evento.request)

        .then(respuesta => {

            return respuesta || fetch(evento.request);

        })

    );

});
