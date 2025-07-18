// src/components/AboutMe.js
import React from 'react';
import './AboutMe.css'; // Crea este archivo CSS para los estilos

const miFoto = "/fotocv.jpg"; // O .png, .jpeg, etc.


const cvEspanol = '/CVespanol.pdf'; // Ejemplo si está en assets
const  cvIngles = '/CVingles.pdf';   // Ejemplo si está en assets


function AboutMe() {
    return (
        <section className="about-me-section">
            <div className="about-me-content">
                <img src={miFoto} alt="Tu Foto de Perfil" className="profile-photo" />
                <div className="text-content">
                    <h2>Sobre Mí</h2>
                    <p>
                        ¡Hola! Soy Juan Pablo Luengo, un estudiante de ingenieria de sistemas en la UTN (Universidad Tecnologica Nacional) actualmente me encuentro en la mitad de la carrera
                    </p>
                    <p>
                       Soy muy determinado, apasionado, compañero, me gusta trabajar en equipo. Me considero una persona que resuelve y pone todo su ingenio para llevarlo a cabo
                    </p>

                    <p>
                        Fuera del mundo del código y los estudios, encuentro equilibrio y energía en mis hobbies. Soy un apasionado del **ejercicio físico**, que me ayuda a mantener la mente clara y el cuerpo activo. Además, disfruto mucho **jugando en la computadora**.
                    </p>
                </div>
            </div>

            <div className="cv-download-links">
                <h3>Descarga mi Currículum</h3>
                <a
                    href={cvEspanol}
                    download="Curriculum_Tu_Nombre_ES.pdf"
                    className="download-button"
                >
                    <i className="fas fa-file-pdf"></i> Descargar CV (Español)
                </a>
                <a
                    href={cvIngles}
                    download="Resume_Your_Name_EN.pdf"
                    className="download-button"
                >
                    <i className="fas fa-file-pdf"></i> Download CV (English)
                </a>
            </div>
        </section>
    );
}

export default AboutMe;