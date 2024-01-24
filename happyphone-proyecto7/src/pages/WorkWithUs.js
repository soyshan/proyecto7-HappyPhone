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
    
    <main>
      <h2 className='h2WorkWithUs'>Trabaja con Nosotros</h2>
      <p className='pWorkWithUs'>Únete a nuestro equipo y sé parte de HappyPhone.</p>
      <section className='sectionWorkWithUs'>
        <div className='container'>
          
        <div className="formSection">
              {isSubmitted ? (
                <div>
                  <h2>¡Formulario enviado!</h2>
                  <p>Gracias por contactarnos.</p>
                </div>
              ) : (
                  
                  <form onSubmit={handleSubmit} id="jobApplicationForm" encType="multipart/form-data">
                      <h3 className="title">Ingresa tus datos</h3>
                      <label htmlFor="name">Nombre:</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>

                          <label  htmlFor="email">Correo electrónico:</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                          <label htmlFor="resume">Adjuntar CV (PDF):</label>

                          <div className="file-input-container">
                            <label htmlFor="resume" className="file-label">Seleccionar archivo</label>
                            <input type="file" id="resume" name="resume" accept=".pdf" onChange={handleChange} required />
                          </div>

                      <button type="submit" >Enviar solicitud</button>
                  </form>
                )}
        </div>
        </div>
      </section>
    </main>
  );
};