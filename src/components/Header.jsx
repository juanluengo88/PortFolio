import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">Juan Pablo Luengo</div>
                <div className="center-title">Portfolio</div>
                <nav className="nav">
                    <a href="#about">Sobre mí</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
