const textos = {

es:{


inicio: "Inicio",

gemas: "Gemas",

informacion: "Información",

ninos: "Niños",

capacitaciones: "Capacitaciones",

productos: "Productos",



pais: "Donaciones",

//================ HERO =================//

heroTitulo:"Capacitaciones GEMA",

heroTexto:"Cursos y talleres especializados para empresas, instituciones educativas y público en general. Aprende con instructores certificados y fortalece tus conocimientos en prevención y respuesta ante emergencias.",

//================ INTRODUCCIÓN =================//

cursosTitulo:"Cursos y Talleres Disponibles",

curso1:"En GEMA promovemos la preparación mediante capacitaciones dirigidas por profesionales con experiencia en atención de emergencias.",

curso2:"Nuestros cursos combinan teoría y práctica, permitiendo desarrollar habilidades para actuar correctamente ante diferentes situaciones.",

curso3:"Los talleres están enfocados en ejercicios prácticos y simulaciones reales para fortalecer la capacidad de respuesta.",

curso4:"Todos los programas incluyen certificado de participación según la modalidad del curso.",

//================ EMPRESAS =================//

empresasTitulo:"Capacitaciones para Empresas",

brigadasTitulo:"Formación de Brigadas de Emergencia",

brigadasTexto:"Capacitación para responder de forma organizada ante incendios, evacuaciones y otras emergencias.",

seguridadTitulo:"Charlas de Seguridad y Salud Laboral",

seguridadTexto:"Programas dirigidos a fortalecer la cultura de prevención dentro de la empresa.",

simulacrosTitulo:"Simulacros de Evacuación",

simulacrosTexto:"Ejercicios prácticos para fortalecer la respuesta del personal ante diferentes escenarios de emergencia.",

extintoresTitulo:"Manejo de Fuego y Extintores",

extintoresTexto:"Aprenda el uso correcto de extintores y las técnicas básicas para controlar incendios incipientes.",

masInformacion:"Más información",

//================ CAPACITACIONES AL PÚBLICO =================//

publicoTitulo:"Capacitaciones Abiertas al Público",

rcpTitulo:"Primeros Auxilios con RCP y DEA",

rcpTexto:"Aprende técnicas para actuar durante un paro cardiorrespiratorio utilizando RCP y desfibrilador.",

primeraRespuestaTitulo:"Primera Respuesta ante Emergencias",

primeraRespuestaTexto:"Capacitación para responder correctamente durante los primeros minutos de una emergencia.",

ninosTitulo:"Primeros Auxilios para Niños",

ninosTexto:"Atención inmediata ante accidentes y emergencias pediátricas.",

sangradoTitulo:"Control de Sangrados Masivos",

sangradoTexto:"Técnicas para controlar hemorragias graves mientras llega la ayuda médica.",

oveTitulo:"Operador de Vehículos de Emergencia (OVE)",

oveTexto:"Formación especializada para la conducción segura de vehículos de emergencia.",

inscribirme:"Inscribirme",

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

//================ HERO =================//

heroTitulo:"GEMA Training",

heroTexto:"Specialized courses and workshops for companies, educational institutions and the general public. Learn from certified instructors and strengthen your knowledge in emergency prevention and response.",

//================ INTRODUCCIÓN =================//

cursosTitulo:"Available Courses and Workshops",

curso1:"At GEMA we promote preparedness through training led by professionals experienced in emergency response.",

curso2:"Our courses combine theory and practice, allowing participants to develop the skills needed to respond correctly in different situations.",

curso3:"The workshops focus on practical exercises and realistic simulations to strengthen emergency response capabilities.",

curso4:"All programs include a certificate of participation according to the course modality.",

//================ EMPRESAS =================//

empresasTitulo:"Training for Companies",

brigadasTitulo:"Emergency Brigade Training",

brigadasTexto:"Training to respond in an organized manner to fires, evacuations and other emergencies.",

seguridadTitulo:"Occupational Safety and Health Talks",

seguridadTexto:"Programs designed to strengthen the culture of prevention within the workplace.",

simulacrosTitulo:"Evacuation Drills",

simulacrosTexto:"Practical exercises to improve staff response during emergency situations.",

extintoresTitulo:"Fire and Extinguisher Handling",

extintoresTexto:"Learn the proper use of fire extinguishers and basic techniques for controlling incipient fires.",

masInformacion:"More information",

//================ PUBLIC TRAINING =================//

publicoTitulo:"Training Open to the Public",

rcpTitulo:"First Aid with CPR & AED",

rcpTexto:"Learn techniques to respond to cardiac arrest using CPR and an Automated External Defibrillator (AED).",

primeraRespuestaTitulo:"First Emergency Response",

primeraRespuestaTexto:"Training to respond correctly during the first critical minutes of an emergency.",

ninosTitulo:"First Aid for Children",

ninosTexto:"Immediate care for childhood accidents and pediatric emergencies.",

sangradoTitulo:"Massive Bleeding Control",

sangradoTexto:"Learn techniques to control severe bleeding until medical help arrives.",

oveTitulo:"Emergency Vehicle Operator (EVO)",

oveTexto:"Specialized training for the safe operation of emergency vehicles.",

inscribirme:"Register",

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
