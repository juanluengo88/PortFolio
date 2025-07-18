const So = "/SO.jpeg"
const Compilador = "/2016-03-30-compiladores-interpretes-img1.jpg"
const Birbnb = "/Birbnb.png"
const Notas = "/notas.png"
const proyectos = [
    {
        id: 1,
        titulo: "Sistema Operativo",
        imagen: So,
        descripcion: "Diseño y Desarrollo de un sistema operativo elemental con sus distintos modulos",
        detalles: [
            "Tecnologías: C, GOLANG, MAKEFILE, DOCKER",
            "Funcionalidades: simular todos los elementos que componen un sistema operativo",
        ],
        linkRepositorio: "https://github.com/juanluengo88/tp-operativoss"
    },
    {
        id: 2,
        titulo: "Compilador de C",
        imagen: Compilador, // Usa la imagen que subiste
        descripcion: "Proyecto de la facultad de la materia de sintaxis y semantica de los lenguajes",
        detalles: [
            "Tecnologías: C, MAKEFILE, BISON, FLEX",
            "Funcionalidades: imitar el compilador de C a bajo nivel",

        ],
        linkRepositorio: "https://github.com/juanluengo88/Tp-Sintaxis/tree/main"
    },
    {
        id: 3,
        titulo: "Aplicacion para gestion de alojamientos",
        imagen: Birbnb, // Usa la imagen que subiste
        descripcion: "Una aplicación web para alquilar y gestionar alojamientos .",
        detalles: [
            "Tecnologías: React, JS, MongoDB, AWS, Cypress",
            "Funcionalidades: Creacion y gestion de usuarios, creacion y gestion de alojamiento, manejo de notificaciones",

        ],
        linkRepositorio: "https://github.com/tobimartinn/2025-1c-tp-booking-com"
    },
    {
        id: 4,
        titulo: "Pagina web de gestion de notas",
        imagen: Notas,
        descripcion: "Una pagina sencilla que se desarrollo en poco tiempo",
        detalles: [
            "Tecnologías:JS, SQL, React",
            "Funcionalidades: Crear, eliminar, archivar, desarchivar, editar y filtrar notas ",
        ],
        linkRepositorio: "https://github.com/juanluengo88/App-notas"
    }
];
export default proyectos;