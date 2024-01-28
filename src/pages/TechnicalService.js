import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/contact.css';
import userLogo from '../assets/user.png';
import emailIcon from '../assets/envelope.png';
import { Link } from 'react-router-dom';
import { Thanks } from './Thanks';

export function TechnicalService() {
  const [formData, setFormData] = useState({
    Nombres: '',
    correo: '',
    mensaje: '',
    terminos: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setFormSubmitted] = useState(false);;
  const navigate = useNavigate();  


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
      
      setFormSubmitted(true);
    }
  };

  useEffect(() => {
    if (isFormSubmitted) {
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
        <h4>SERVICIO TECNICO<br />Incidencias</h4>
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
       
       
      
        </>
        )}
      </section>

    

    </main>
  );
}
