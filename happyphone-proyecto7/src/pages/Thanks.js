import React from 'react';
import '../components/Thanks contact/thanks.css'
import { Link } from 'react-router-dom';

export const Thanks = () => {
  return (
    <main className="thanks">
      <figure>
        <img className="check" src="../img/check.png" alt="Imagen con icono check" />
      </figure>

      <article className="thanks-text">
        <h2>¡GRACIAS POR TU SOLICITUD!</h2>
        <h3>Tu solicitud ha sido recibida.</h3>
         <Link to="/ContactForm" target="_self">Contáctanos </Link>
      </article>
    </main>
  );
};



