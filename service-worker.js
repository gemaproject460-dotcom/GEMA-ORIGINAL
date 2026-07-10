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
    "/GEMA-ORIGINAL/urbanas.js",

    // Imágenes GEMA
"/GEMA-ORIGINAL/Imagenes/Alpha.jpeg",
"/GEMA-ORIGINAL/Imagenes/BOMBEROS.png",
"/GEMA-ORIGINAL/Imagenes/CEFRF.png",
"/GEMA-ORIGINAL/Imagenes/CRUZ ROJA.png",
"/GEMA-ORIGINAL/Imagenes/Cruz Roja.jpg",
"/GEMA-ORIGINAL/Imagenes/GEMA KIDS.png",
"/GEMA-ORIGINAL/Imagenes/GLOBAL.png",
"/GEMA-ORIGINAL/Imagenes/IFRC.png",
"/GEMA-ORIGINAL/Imagenes/KIDS.png",
"/GEMA-ORIGINAL/Imagenes/LOGO.png",
"/GEMA-ORIGINAL/Imagenes/MEDECINE.png",
"/GEMA-ORIGINAL/Imagenes/OIM.png",
"/GEMA-ORIGINAL/Imagenes/PASO FRIME.png",
"/GEMA-ORIGINAL/Imagenes/Primer imagen png.png",
"/GEMA-ORIGINAL/Imagenes/Rompecabezas.png",
"/GEMA-ORIGINAL/Imagenes/SINAPROC.png",
"/GEMA-ORIGINAL/Imagenes/UNICEF.png",

"/GEMA-ORIGINAL/Imagenes/auxilios.jpg",
"/GEMA-ORIGINAL/Imagenes/botiquin.jfif",
"/GEMA-ORIGINAL/Imagenes/brigadas.jfif",
"/GEMA-ORIGINAL/Imagenes/capacita.jpg",
"/GEMA-ORIGINAL/Imagenes/corazon.jfif",
"/GEMA-ORIGINAL/Imagenes/educa.jpg",
"/GEMA-ORIGINAL/Imagenes/evacua.jfif",
"/GEMA-ORIGINAL/Imagenes/firt.jpg",
"/GEMA-ORIGINAL/Imagenes/fuego.jfif",
"/GEMA-ORIGINAL/Imagenes/kit.jfif",
"/GEMA-ORIGINAL/Imagenes/led.jfif",
"/GEMA-ORIGINAL/Imagenes/natural.jpg",
"/GEMA-ORIGINAL/Imagenes/ninos.png",
"/GEMA-ORIGINAL/Imagenes/perro.png",
"/GEMA-ORIGINAL/Imagenes/perros.png",
"/GEMA-ORIGINAL/Imagenes/radio.jfif",
"/GEMA-ORIGINAL/Imagenes/salud.jpg",
"/GEMA-ORIGINAL/Imagenes/sangrado.png",
"/GEMA-ORIGINAL/Imagenes/sangre.jpg",
"/GEMA-ORIGINAL/Imagenes/urbana.jpg",
"/GEMA-ORIGINAL/Imagenes/vehiculos.jfif"

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
