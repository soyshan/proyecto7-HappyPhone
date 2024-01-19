import React from 'react';
import './footerComponent.css';
import { Link } from 'react-router-dom';
import Instagram from '../../assets/instagram.svg';
import TikTok from '../../assets/tiktok.svg';
import Youtube from '../../assets/youtube.svg';

export const Footer = () => {
  return (
    <footer>
      <section className="about-footer">
        <ul>
          <p><strong><Link to="/AboutHappyPhone">About HappyPhone</Link></strong></p>
          <li><Link to="/PasarelaPago">Servicio Técnico</Link></li>
          <li>&copy; 2023 HappyPhone. Todos los derechos reservados.</li>
        </ul>
      </section>

      <figure className="rrss-footer">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img className="logo-rrss" src={Instagram} alt="logo_instagram" /></a>
        <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des" target="_blank" rel="noopener noreferrer"><img className="logo-rrss" src={TikTok} alt="logo_tiktok" /></a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className="logo-rrss" src={Youtube} alt="logo_youtube" /></a>
      </figure>

      <section className="info-footer">
        <ul>
          <p><strong><Link to="#">Nuestro Equipo</Link></strong></p>
          <li><Link to="./terms">Términos y condiciones</Link></li>
          <li><Link to="./WorkWithUs">Trabaja con nosotros</Link></li>
        </ul>
      </section>
    </footer>
  );
};


