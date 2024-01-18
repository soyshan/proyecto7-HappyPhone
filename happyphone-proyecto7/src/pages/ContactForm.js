import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/contact.css';
import userLogo from '../assets/user.png';
import logowhatsapp from '../assets/whatsapp.png';
import emailIcon from '../assets/envelope.png';
import phone from '../assets/phone.png';
import { Link } from 'react-router-dom';
import { Thanks } from './Thanks';

export function ContactForm() {
  const [formData, setFormData] = useState({
    Nombres: '',
    teléfono: '',
    correo: '',
    mensaje: '',
    terminos: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setFormSubmitted] = useState(false);;
  const navigate = useNavigate();  // Usa useNavigate en lugar de Navigate


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.Nombres.length < 8 || formData.Nombres.length > 20) {
      newErrors.Nombres = 'El nombre debe tener entre 8 y 20 caracteres';
    }

    if (!/^\d{9,12}$/.test(formData.teléfono)) {
      newErrors.teléfono = 'Ingresa un número de teléfono válido (entre 9 y 12 dígitos)';
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.correo)) {
      newErrors.correo = 'Ingresa un correo electrónico válido';
    }

    if (formData.mensaje.length === 0) {
      newErrors.mensaje = 'Deja un mensaje para poder contactarte';
    }

    if (!formData.terminos) {
      newErrors.terminos = 'Debes aceptar los Términos y Condiciones';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Datos del formulario:', formData);
      // Aquí puedes enviar los datos del formulario a tu servidor o hacer lo que necesites

      // Marca el formulario como enviado
      setFormSubmitted(true);
    }
  };

  useEffect(() => {
    if (isFormSubmitted) {
      // Realiza la redirección
      navigate('/Thanks');
    }
  }, [isFormSubmitted, navigate]);


  return (
    <main className="contacto">
      <section className="formulario">
      {isFormSubmitted ? (
          <Thanks />
        ) : (


        <>
        <h4>NUESTRO EQUIPO SE PONDRÁ EN CONTACTO CONTIGO</h4>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Nombres">
              <div className="input-container">
                <img className="logos-peques" src={userLogo} alt="logo personita en verde" />
                <input
                  className="control"
                  type="text"
                  name="Nombres"
                  id="Nombres"
                  placeholder="Nombre completo"
                  minLength="8"
                  maxLength="20"
                  value={formData.Nombres}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.Nombres && <p className="error-message">{errors.Nombres}</p>}
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="teléfono">
              <div className="input-container">
                <img className="logos-peques" src={phone} alt="logo teléfono en verde" />
                <input
                  className="control"
                  type="tel"
                  name="teléfono"
                  id="teléfono"
                  placeholder="Teléfono"
                  minLength="8"
                  maxLength="12"
                  pattern="[0-9]{9,}"
                  title="Ingresa solo números (mínimo 9 cifras)"
                  value={formData.teléfono}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.teléfono && <p className="error-message">{errors.teléfono}</p>}
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="correo">
              <div className="input-container">
                <img className="logos-peques" src={emailIcon} alt="logo sobre correo en verde" />
                <input
                  className="control"
                  type="email"
                  name="correo"
                  id="correo"
                  placeholder="E-mail"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.correo && <p className="error-message">{errors.correo}</p>}
            </label>
          </div>

          <div className="form-group">
            <input
              className="control1"
              type="text"
              name="mensaje"
              id="mensaje"
              placeholder="Deja tu mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
            {errors.mensaje && <p className="error-message">{errors.mensaje}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="terminos">
              <span>*</span>Acepto los <Link to="/Terms">Términos y Condiciones</Link>
            </label>
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={formData.terminos}
              onChange={handleChange}
              required
            />
            {errors.terminos && <p className="error-message">{errors.terminos}</p>}
          </div>

          <div className="form-group">
            <button className="botons" type="submit">
              Enviar
            </button>
          </div>
        </form>
        <div className="form-group">
          <p>
            o <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">Conéctate por WhatsApp </a>
          </p>
        </div>
        <div className="form-group">
          <a href="https://web.whatsapp.com/">
            <img className="logo-whatsapp" src={logowhatsapp} alt="logo de WhatsApp" />
          </a>
        </div>
      
        </>
        )}
      </section>

    
      <figure className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5506301469377!2d-3.7021057241135527!3d40.39665107144289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4226346cdb5ebb%3A0x73a304caeab8973a!2sC.%20Fernando%20Poo%2C%2025%2C%2028045%20Madrid!5e0!3m2!1ses!2ses!4v1699288986331!5m2!1ses!2ses"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          alt="mapa de google map señalando la ubicación"
          title="googlemap"
        ></iframe>
      </figure>
    </main>
  );
}
