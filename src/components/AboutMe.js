
import React from 'react';
import './AboutMe.css';
import miFoto from "../assets/images/fotocv.jpg";
const cvIngles = `${process.env.PUBLIC_URL}/CVingles.pdf`;
const cvEspanol = `${process.env.PUBLIC_URL}/CVespanol.pdf`;

function AboutMe() {
    return (
        <section className="about-me-section">
            <div className="about-me-content">
                <img src={miFoto} alt="Tu Foto de Perfil" className="profile-photo" />
                <div className="text-content">
                    <h2>Sobre Mí</h2>
                    <p>
                        ¡Hola! Soy Juan Pablo Luengo, un estudiante de ingenieria de sistemas en la UTN (Universidad Tecnologica Nacional) actualmente me encuentro en la mitad de la carrera.
                    </p>
                    <p>
                       Soy muy determinado, apasionado, compañero, me gusta trabajar en equipo. Me considero una persona que resuelve y pone todo su ingenio para llevarlo a cabo.
                    </p>

                    <p>
                        Fuera del mundo del código y los estudios, encuentro equilibrio y recarga en mis hobbies.
                    </p>
                </div>
            </div>

            <div className="cv-download-links">
                <h3>Descarga mi Currículum</h3>
                <a
                    href={cvEspanol}
                    download="JuanPabloLuengo_CVes.pdf"
                    className="download-button"
                >
                    <i className="fas fa-file-pdf"></i> Descargar CV (Español)
                </a>
                <a
                    href={cvIngles}
                    download="JuanPabloLuengo_ResumeEN.pdf"
                    className="download-button"
                >
                    <i className="fas fa-file-pdf"></i> Download CV (English)
                </a>
            </div>
        </section>
    );
}

export default AboutMe;