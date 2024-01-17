import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../css/abouthappyphone.css';

export const AboutHappyPhone = () => {

	const { globalProducts } = useContext(ProductContext);

	return (
		
		<main>
			<section className='bienvenido'>
				<h2>Bienvenido a Happy Phone</h2>
				<p>En Happy Phone, nuestra pasión es conectar a las personas con la tecnología. Desde nuestros inicios, nos hemos
				comprometido en ofrecer lo mejor en telefonía móvil, brindando a nuestros clientes acceso a dispositivos
				innovadores que mejoran sus vidas y les mantienen conectados con lo que más les importa.</p>
			</section><br/>
  
			<section className='historia'>
				<h2>Nuestra Historia</h2>
				<p>Happy Phone fundada a comienzos del 2023, tuvo unos orígenes humildes que fue creada por un grupo de
				entusiastas de la tecnología, que decidió abrir una tienda online de dispositivos móviles. Desde entonces,
				nuestra dedicación a proporcionar tecnología de vanguardia, ha sido la fuerza motriz detrás de nuestro
				crecimiento y éxito hasta convertirse en un referente en la industria de la telefonía. Nos enorgullecemos de
				haber construido relaciones sólidas con nuestros clientes, proporcionando productos de calidad y un servicio
				excepcional en cada paso del camino.</p>
			</section><br/>
  
			<section className='compromiso'>
				<h2>Nuestro Compromiso</h2>
				<p>En Happy Phone, la satisfacción del cliente es nuestra prioridad número uno, consideramos que la satisfacción
				del cliente es la base de nuestro éxito. Nos esforzamos por ofrecer una amplia gama de teléfonos móviles y
				servicios que se adaptan a las necesidades individuales de cada persona. Además, nuestro equipo está dedicado a
				ofrecer asesoramiento experto y soporte técnico para asegurarnos de que nuestros clientes obtengan la mejor
				experiencia posible y encuentren el dispositivo perfecto que se adapte a sus necesidades y a su estilo de vida.
				</p>
			</section><br/>
  
			<section className='vision'>
				<h2>Nuestra Visión</h2>
				<p>Buscamos ser líderes en innovación y excelencia en la industria de la telefonía móvil. Nos comprometemos a seguir evolucionando, explorando nuevas tecnologías y tendencias para proporcionar a nuestros clientes las últimas novedades y soluciones en comunicación móvil. Por ello, Nuestra visión se centra en crear experiencias excepcionales para cada cliente. Desde la selección cuidadosa de productos hasta la atención personalizada, nos esforzamos por convertir cada visita a Happy Phone en una experiencia gratificante y enriquecedor. <br/> En Happy Phone, estamos emocionados de ser parte de tu viaje tecnológico. <br/><br/><br/>
				<strong>¡Gracias por elegirnos como tu destino, para todo lo relacionado con teléfonos móviles!</strong></p>
			</section>
		</main>
  
    );
};
