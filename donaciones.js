const textos = {

es:{


inicio: "Inicio",

gemas: "Gemas",

informacion: "Información",

ninos: "Niños",

capacitaciones: "Capacitaciones",

productos: "Productos",



pais: "Donaciones",

// DONACIONES
        donacionesTitulo: "Organizaciones que brindan ayuda y aceptan donaciones",

        donacionesDescripcion1:
            "Estas organizaciones trabajan a nivel nacional e internacional para brindar ayuda humanitaria en situaciones de emergencia.",

        donacionesDescripcion2:
            "Puedes acceder a su sitio web oficial haciendo clic en el botón de cada organización.",

        cruzRojaTitulo: "Cruz Roja",
        cruzRojaDescripcion:
            "Brinda asistencia humanitaria en emergencias y desastres. Ofrece apoyo en salud, refugio, alimentos y reunificación familiar.",

        msfTitulo: "Médicos Sin Fronteras",
        msfDescripcion:
            "Proporciona atención médica de emergencia en zonas de conflicto, desastres naturales y crisis humanitarias.",

        unicefTitulo: "UNICEF",
        unicefDescripcion:
            "Trabaja para proteger los derechos de los niños, proporcionando agua potable, educación, salud y protección infantil.",

        unhcrTitulo: "UNHCR",
        unhcrDescripcion:
            "Protege y asiste a personas refugiadas y desplazadas. Brinda albergue, ayuda básica y apoyo para reconstruir sus vidas.",

        saveTitulo: "Save the Children",
        saveDescripcion:
            "Mejora la vida de los niños en emergencias, asegurando su supervivencia, educación y protección.",

        oimTitulo: "Organización Internacional para las Migraciones (OIM)",
        oimDescripcion:
            "Organización internacional dedicada a promover una migración segura, ordenada y digna, así como a proteger los derechos de las personas migrantes y desplazadas. Trabaja junto con gobiernos y organizaciones humanitarias en más de 170 países, brindando asistencia durante emergencias, conflictos y desastres. Además de proporcionar apoyo humanitario, refugio y protección, desarrolla programas para prevenir la violencia, fortalecer la recuperación de las comunidades y garantizar que las personas más vulnerables reciban atención y acceso a sus derechos fundamentales.",

        visitarSitio: "Visitar sitio web",

// ...las demás traducciones

   gemaTitulo: "GEMA",

gemaDescripcion: "Global Emergency Management Access. Promoviendo la preparación, prevención y respuesta ante emergencias para toda la comunidad.",

footerEnlaces: "Enlaces",

footerContacto: "Contacto",

footerSiguenos: "Síguenos",

telefono: "Teléfono: +507 6000-0000",

panama: "Panamá",

footerDerechos: "© 2026 GEMA | Global Emergency Management Access. Todos los derechos reservados.",

mapaInteractivo: "Mapa Interactivo",
},

en:{

    inicio: "Home",

gemas: "Gems",

informacion: "Information",

ninos: "Children",

capacitaciones: "Training",

productos: "Products",



pais: "Donations",

// DONATIONS
        donacionesTitulo: "Organizations Providing Aid and Accepting Donations",

        donacionesDescripcion1:
            "These organizations work nationally and internationally to provide humanitarian assistance during emergencies.",

        donacionesDescripcion2:
            "You can visit their official website by clicking the button for each organization.",

        cruzRojaTitulo: "Red Cross",
        cruzRojaDescripcion:
            "Provides humanitarian assistance during emergencies and disasters, including healthcare, shelter, food, and family reunification.",

        msfTitulo: "Doctors Without Borders",
        msfDescripcion:
            "Provides emergency medical care in conflict zones, natural disasters, and humanitarian crises.",

        unicefTitulo: "UNICEF",
        unicefDescripcion:
            "Works to protect children's rights by providing clean water, education, healthcare, and child protection.",

        unhcrTitulo: "UNHCR",
        unhcrDescripcion:
            "Protects and assists refugees and displaced people by providing shelter, essential aid, and support to rebuild their lives.",

        saveTitulo: "Save the Children",
        saveDescripcion:
            "Improves children's lives during emergencies by ensuring their survival, education, and protection.",

        oimTitulo: "International Organization for Migration (IOM)",
        oimDescripcion:
            "An international organization dedicated to promoting safe, orderly, and dignified migration while protecting the rights of migrants and displaced people. It works with governments and humanitarian organizations in more than 170 countries, providing assistance during emergencies, conflicts, and disasters. In addition to humanitarian aid, shelter, and protection, it develops programs to prevent violence, strengthen community recovery, and ensure that the most vulnerable people receive assistance and access to their fundamental rights.",

        visitarSitio: "Visit Website",




// ...las demás traducciones

   gemaTitulo: "GEMA",

gemaDescripcion: "Global Emergency Management Access. Promoting preparedness, prevention and emergency response for the entire community.",

footerEnlaces: "Links",

footerContacto: "Contact",

footerSiguenos: "Follow Us",

telefono: "Phone: +507 6000-0000",

panama: "Panama",

footerDerechos: "© 2026 GEMA | Global Emergency Management Access. All rights reserved.",

mapaInteractivo: "Interactive Map",

}};


function cambiarIdioma(idioma){

    document.querySelectorAll("[data-i18n]").forEach(el=>{

        const clave = el.getAttribute("data-i18n");

        if(textos[idioma] && textos[idioma][clave]){
            el.textContent = textos[idioma][clave];
        }

    });

    localStorage.setItem("idioma", idioma);

}

window.addEventListener("load",()=>{

    const idioma = localStorage.getItem("idioma") || "es";

    cambiarIdioma(idioma);

});