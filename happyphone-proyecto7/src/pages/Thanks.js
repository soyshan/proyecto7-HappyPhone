import React from 'react';
import './thanks.css'

export const Thanks = () => {
  return (
    <main className="thanks">
      <figure>
        <img className="check" src="../img/check.png" alt="Imagen con icono check" />
      </figure>

      <article className="thanks-text">
        <h2>¡GRACIAS POR TU SOLICITUD!</h2>
        <h3>Tu solicitud ha sido recibida.</h3>
        <p>Para más información sobre su pedido <a href="contact.html" target="_self">Contáctanos</a></p>
      </article>
    </main>
  );
};



