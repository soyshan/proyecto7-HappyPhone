import React, { useState, useEffect } from 'react';
import HappyInicio from '../assets/happyinicio.svg';
import Moviles from '../components/Moviles.js';

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./json/catalogo.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data.moviles);
              });    
    //  NO FUNCIONA LA LLAMADA AL JSON
  }, []);

  return (
    <>
      {/* OFERTA PRINCIPAL */}
      <main className="main-offer" id="main-offer">
        <figure>
          <a href="./html/product.html"><img src={HappyInicio} className="main-image" alt="Foto con oferta de móvil de lanzamiento" /></a>
        </figure>
        <article className="main-text">
          <h1>Consigue tu HappyZ Flip con HappyPhone</h1>
          <h4>Aprovecha nuestra oferta de lanzamiento</h4>
          <a href="./html/product.html"><button className="main-button">¡Descúbrelo!</button></a>
        </article>
      </main>

      <Moviles />

    </>
  );
};