import React, { useState, useEffect } from 'react';
import HappyInicio from '../assets/happyinicio.svg';
import Moviles from '../components/Moviles.js';
import { Link } from 'react-router-dom';


export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./json/catalogo.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data.moviles);
              });    
    
  }, []);

  return (
    <>
      {/* OFERTA PRINCIPAL */}
      <main className="main-offer-index" id="main-offer">
        <figure>
          <Link to="./Home"><img src={HappyInicio} className="main-image" alt="Foto con oferta de móvil de lanzamiento" /></Link>
        </figure>
        <article className="main-home">
          <h1 className='h1-home'>Consigue tu HappyZ Flip con HappyPhone</h1>
          <h4>Aprovecha nuestra oferta de lanzamiento</h4>
          <Link to ="./Home"><button className="main-button">¡Descúbrelo!</button></Link>
        </article>
      </main>

      <Moviles />

    </>
  );
};