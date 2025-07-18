// src/components/ProyectoCard.js
import React from 'react';
import './ProyectoCard.css';

function ProyectoCard({ proyecto }) {
    return (
        <div className="proyecto-card">
            <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-imagen" />
            <div className="proyecto-contenido">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                <h4>Detalles:</h4>
                <ul>
                    {proyecto.detalles.map((detalle, index) => (
                        <li key={index}>{detalle}</li>
                    ))}
                </ul>
                <a
                    href={proyecto.linkRepositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boton-repositorio"
                >
                    Ver Repositorio
                </a>
            </div>
        </div>
    );
}

export default ProyectoCard;