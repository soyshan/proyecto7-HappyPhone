import React from 'react';
import '../components/contact.css'
import userLogo from '../assets/user.png';
import logowhatsapp from '../assets/whatsapp.png';

export function ContactForm() {
  return (
    <main className="contacto">
      <section className="formulario">
        <h4>NUESTRO EQUIPO SE PONDRÁ EN CONTACTO CONTIGO</h4>
        <form id="contactForm" action="../index.html" method="post">
          <div className="form-group">
            <label htmlFor="Nombres">
              <div className="input-container">
                <img className="logos-peques" src={userLogo} alt="logo personita en verde" />
                <input className="control" type="text" name="Nombres" id="Nombres" placeholder="Nombre completo" minLength="8" maxLength="20" required />
              </div>
            </label>
          </div>
          {/* ... Resto del formulario ... */}
          <div className="form-group">
            <button className="botons" type="submit">Enviar</button>
          </div>
        </form>
        <div className="form-group">
          <p>o <a href="https://web.whatsapp.com/" target="_blank" rel='noreferrer' >Conéctate por WhatsApp </a></p>
        </div>
        <div className="form-group">
          <a href="https://web.whatsapp.com/"><img className="logo-whatsapp" src={logowhatsapp} alt="logo de WhatsApp" /></a>
        </div>
      </section>
      <figure className="mapa">
      
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5506301469377!2d-3.7021057241135527!3d40.39665107144289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4226346cdb5ebb%3A0x73a304caeab8973a!2sC.%20Fernando%20Poo%2C%2025%2C%2028045%20Madrid!5e0!3m2!1ses!2ses!4v1699288986331!5m2!1ses!2ses" 
        width="400" height="300" style={{ border: 0 }} 
        allowFullScreen="" loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" 
        alt="mapa de google map señalando la ubicación" title="googlemap"></iframe>
      </figure>

    </main>


  );
}


