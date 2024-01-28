import React from 'react';
import '../css/thanks.css'
import { Link } from 'react-router-dom';
import checkImage from '../assets/check.png';

export const Thanks = () => {
  return (
    <main className="thanks">
      <figure>
        <img className="check" src={checkImage} alt="Imagen con icono check" />
      </figure>

      <article className="thanks-text">
        <h2>¡GRACIAS POR TU SOLICITUD!</h2>
        <h3>Tu solicitud ha sido recibida.</h3>
         <Link to="/ContactForm" className="contact-link" target="_self">Contáctanos </Link>
      
      </article>
    </main>
  );
};







