import React from 'react';
import '../css/workwithus.css';

export const WorkWithUs = () => {
  const redirectToOtraPagina = () => {
    // Lógica para redirigir a otra página al hacer clic en el botón
  };

  return (
    <main>
      <h2>Trabaja con Nosotros</h2>
      <p>Únete a nuestro equipo y sé parte de HappyPhone.</p>
      <section>
        <div className='container'>
          <h3 className="title">Ingresa tus datos</h3>
          <form id="jobApplicationForm" encType="multipart/form-data">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required/>

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required/>

            <label htmlFor="resume">Adjuntar CV (PDF):</label>
            <div className="file-input-container">
              <label htmlFor="resume" className="file-label">Seleccionar archivo</label>
              <input type="file" id="resume" name="resume" accept=".pdf" required />
            </div>

            <button type="button" onClick={redirectToOtraPagina}>Enviar solicitud</button>
          </form>
        </div>
      </section>
    </main>
  );
};