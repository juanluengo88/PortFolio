// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Crea este archivo CSS para los estilos

function Contact() {
    const phoneNumber = '+54 9 11 5570-9791'; // Reemplaza con tu número real (incluye código de país y de área si aplica)
    const email1 = 'luengojuan30@gmail.com'; // Reemplaza con tu primer email
    const email2 = 'jluengoo88@gmail.com'; // Reemplaza con tu segundo email
    const linkedinProfile = 'https://www.linkedin.com/in/juan-pablo-luengo-954360253/'; // Reemplaza con la URL de tu perfil de LinkedIn

    return (
        <section className="contact-section">
            <h2>Contáctame</h2>
            <p className="contact-intro">Estoy siempre abierto a nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!</p>

            <div className="contact-details">
                <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span className="contact-label">Teléfono:</span>
                    <a href={`tel:${phoneNumber.replace(/ /g, '')}`} className="contact-value">
                        {phoneNumber}
                    </a>
                </div>

                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span className="contact-label">Email Principal:</span>
                    <a href={`mailto:${email1}`} className="contact-value">
                        {email1}
                    </a>
                </div>

                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span className="contact-label">Email Secundario:</span>
                    <a href={`mailto:${email2}`} className="contact-value">
                        {email2}
                    </a>
                </div>

                <div className="contact-item">
                    <i className="fab fa-linkedin"></i>
                    <span className="contact-label">LinkedIn:</span>
                    <a
                        href={linkedinProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-value linkedin-link"
                    >
                        Mi Perfil de LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;