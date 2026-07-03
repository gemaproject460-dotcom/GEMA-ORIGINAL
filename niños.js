const translations = {
    es: {

        // NAVBAR
        inicio: "Inicio",
        gemas: "Gemas",
        informacion: "Información",
        ninos: "Niños",
        capacitaciones: "Capacitaciones",
        productos: "Productos",
        pais: "Donaciones",

        // HERO
        kidsBadge: "GEMA KIDS",
        kidsTitulo: "Aprende a protegerte jugando",
        kidsDescripcion: "Descubre qué hacer durante terremotos, inundaciones y otras emergencias mediante juegos y actividades divertidas.",
        comenzar: "Comenzar",

        // JUEGOS
        aprendeJugando: "Aprende Jugando",

        trivia: "Trivia",
        triviaTexto: "Responde preguntas y demuestra cuánto sabes.",

        pareo: "Pareo",
        pareoTexto: "Relaciona conceptos y encuentra las parejas correctas.",

        rompecabezas: "Rompecabezas",
        rompecabezasTexto: "Arma la imagen correcta paso a paso.",

        memoria: "Memoria",
        memoriaTexto: "Encuentra las parejas iguales y mejora tu concentración.",

        // FENÓMENOS
        exploraFenomenos: "Explora los Fenómenos",

        terremotos: "Terremotos",
        terremotosTexto: "Aprende cómo actuar antes, durante y después.",

        nina: "El Fenómeno de La Niña",
        ninaTexto: "Mantente seguro.",

        nino: "El Fenómeno del Niño",
        ninoTexto: "Qué es el fenómeno del Niño y cómo afecta el clima.",

        volcanes: "Volcanes",
        volcanesTexto: "Conoce las medidas de protección.",

        // CONSEJOS
        consejos: "Consejos de Seguridad",

        mochila: "Mochila de emergencia",
        calma: "Mantén la calma",
        adultos: "Escucha a los adultos",
        evacuacion: "Conoce las rutas de evacuación",

        // FOOTER
        gemaTitulo: "GEMA",
        gemaDescripcion: "Global Emergency Management Access. Promoviendo la preparación, prevención y respuesta ante emergencias para toda la comunidad.",
        footerEnlaces: "Enlaces",
        mapaInteractivo: "Mapa Interactivo",
        footerContacto: "Contacto",
        telefono: "Teléfono: +507 6000-0000",
        panama: "Panamá",
        footerSiguenos: "Síguenos",
        footerDerechos: "© 2026 GEMA | Global Emergency Management Access. Todos los derechos reservados."
    },

    en: {

        // NAVBAR
        inicio: "Home",
        gemas: "Gemas",
        informacion: "Information",
        ninos: "Kids",
        capacitaciones: "Training",
        productos: "Products",
        pais: "Donations",

        // HERO
        kidsBadge: "GEMA KIDS",
        kidsTitulo: "Learn to protect yourself through play",
        kidsDescripcion: "Discover what to do during earthquakes, floods, and other emergencies through fun games and activities.",
        comenzar: "Start",

        // GAMES
        aprendeJugando: "Learn While Playing",

        trivia: "Trivia",
        triviaTexto: "Answer questions and show how much you know.",

        pareo: "Matching",
        pareoTexto: "Match concepts and find the correct pairs.",

        rompecabezas: "Puzzle",
        rompecabezasTexto: "Build the correct picture step by step.",

        memoria: "Memory",
        memoriaTexto: "Find matching pairs and improve your concentration.",

        // PHENOMENA
        exploraFenomenos: "Explore Natural Phenomena",

        terremotos: "Earthquakes",
        terremotosTexto: "Learn what to do before, during, and after.",

        nina: "La Niña Phenomenon",
        ninaTexto: "Stay safe.",

        nino: "El Niño Phenomenon",
        ninoTexto: "Learn what El Niño is and how it affects the climate.",

        volcanes: "Volcanoes",
        volcanesTexto: "Learn about safety measures.",

        // SAFETY TIPS
        consejos: "Safety Tips",

        mochila: "Emergency Backpack",
        calma: "Stay Calm",
        adultos: "Listen to Adults",
        evacuacion: "Know the Evacuation Routes",

        // FOOTER
        gemaTitulo: "GEMA",
        gemaDescripcion: "Global Emergency Management Access. Promoting preparedness, prevention, and emergency response for the entire community.",
        footerEnlaces: "Links",
        mapaInteractivo: "Interactive Map",
        footerContacto: "Contact",
        telefono: "Phone: +507 6000-0000",
        panama: "Panama",
        footerSiguenos: "Follow Us",
        footerDerechos: "© 2026 GEMA | Global Emergency Management Access. All rights reserved."
    }
};


function cambiarIdioma(idioma) {
    localStorage.setItem("idioma", idioma);

    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        const key = elemento.getAttribute("data-i18n");
        if (translations[idioma][key]) {
            elemento.innerHTML = translations[idioma][key];
        }
    });
}

const idiomaGuardado = localStorage.getItem("idioma") || "es";
cambiarIdioma(idiomaGuardado);