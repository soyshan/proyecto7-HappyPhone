import React, { useState } from 'react';
import '../css/workwithus.css';

export const WorkWithUs = () => {

    const [formData, setFormData] = useState({
      name: '',
      email: '',

    });

    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {

      
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    };


  //para decir solo que se ha enviado
    const handleSubmit = (e) => {

       e.preventDefault();
      if (!/^[A-Z].*/.test(formData.name)) {
        alert('El nombre debe comenzar con mayúscula');
        return;
      }
      setIsSubmitted(true);
    };



  return (
    
    <main className="main-work-with-us">
      <h2 className='h2-work-with-us'>Trabaja con Nosotros</h2>
      <p className='p-work-with-us'>Únete a nuestro equipo y sé parte de HappyPhone.</p>
      <section className='section-work-with-us'>
        <div className='container-work-with-us'>
          
        <div>
              {isSubmitted ? (
                <div>
                  <h2>¡Formulario enviado!</h2>
                  <p>Gracias por contactarnos.</p>
                </div>
              ) : (
                  
                  <form className="form-work-with-us" onSubmit={handleSubmit} id="jobApplicationForm" encType="multipart/form-data">
                      <h3 className="title-work-with-us">Ingresa tus datos</h3>
                      <label htmlFor="name">Nombre:</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>

                          <label  htmlFor="email">Correo electrónico:</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                          <label htmlFor="resume">Adjuntar CV (PDF):</label>

                          <div className="file-input-container">
                            <label htmlFor="resume" className="file-label">Seleccionar archivo</label>
                            <br />
                            <input className="input-work-with-us" type="file" id="resume" name="resume" accept=".pdf" onChange={handleChange} required />
                          </div>

                      <button className='button-work-with-us' type="submit" >Enviar solicitud</button>
                  </form>
                )}
        </div>
        </div>
      </section>
    </main>
  );
};