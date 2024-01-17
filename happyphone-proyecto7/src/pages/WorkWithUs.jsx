import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import '../css/workwithus.css';

export const WorkWithUs = () => {

	const { globalProducts } = useContext(ProductContext);
	const navigate = useNavigate();
	const redirectToOtraPagina = (e) => {
		e.preventDefault();
		navigate('./HomePage', {});
	  };

	return (
		
		<main>
			<h2>Trabaja con Nosotros</h2>
			<p>Únete a nuestro equipo y sé parte de HappyPhone.</p>
			<section>
				<div className='container'>
					<h3 className="title">Ingresa tus datos</h3>
					<form id="jobApplicationForm" enctype="multipart/form-data">
						<label for="name">Nombre:</label>
						<input type="text" id="name" name="name" required/>

						<label for="email">Correo electrónico:</label>
						<input type="email" id="email" name="email" required/>

						<label for="resume">Adjuntar CV (PDF):</label>
						<div class="file-input-container">
							<label for="resume" class="file-label">Seleccionar archivo</label>
							<input type="file" id="resume" name="resume" accept=".pdf" required />
						</div>

						<button type="button" onClick={redirectToOtraPagina}>Enviar solicitud</button>
					</form>
				</div>

			</section>

    </main>
  
    );
};
