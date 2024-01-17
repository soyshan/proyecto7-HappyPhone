import React from 'react';
// import FooterComponent from './components/Footer';
import { ReactComponent as HappyInicio } from '../assets/happyinicio.svg';


export const Home = () => {
  return (
    <>
    
      {/* OFERTA PRINCIPAL */}
      <main className="main-offer" id="main-offer">
        <figure>
          <a href="./html/product.html"><HappyInicio className="main-image" alt="Foto con oferta de móvil de lanzamiento" /></a>
        </figure>
        <article className="main-text">
          <h1>Consigue tu HappyZ Flip con HappyPhone</h1>
          <h4>Aprovecha nuestra oferta de lanzamiento</h4>
          <a href="./html/product.html"><button className="main-button">¡Descúbrelo!</button></a>
        </article>
      </main>

      {/* CAROUSEL PRODUCTOS */}
      <section className="carousel-products" id="carousel-products">
        {/* Aquí deberías incluir tu lógica para mostrar productos en el carousel */}
      </section>
      <section className="productoBuscado" id="productoBuscado">
        {/* Aquí deberías incluir tu lógica para mostrar productos buscados */}
      </section>
      <br />

      {/* FOOTER */}
      {/* <FooterComponent /> */}
    </>
  );
};

