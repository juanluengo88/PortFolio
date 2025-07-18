// src/components/ProyectosCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProyectoCard from './ProyectoCard';
import './ProjectCarousel.css';
import proyectos from "../Projects";


function ProyectosCarousel() {
    // Ajusta el porcentaje para que se vean 3 tarjetas en pantallas grandes y 1 en móviles
    const centerSlidePercentage = window.innerWidth < 768 ? 100 : 33.33;

    return (
        <div className="carousel-container">
            <h2>Mis Proyectos Destacados 🚀</h2>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={centerSlidePercentage}
                emulateTouch={true}
                autoPlay={true}
                interval={5000}
                transitionTime={500}
                // Agrega un padding izquierdo y derecho a los slides para crear espacio entre las tarjetas
                // Esto es crucial para que `centerMode` y `centerSlidePercentage` funcionen bien
                className="carousel-with-padding"
            >
                {proyectos.map((proyecto) => (
                    <div key={proyecto.id} className="carousel-slide-item">
                        <ProyectoCard proyecto={proyecto} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ProyectosCarousel;