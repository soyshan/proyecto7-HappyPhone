import React from 'react';
import HappyInicio from '../assets/happyinicio.svg';
import Moviles from '../components/Moviles.js';
import { Link } from 'react-router-dom';


export const Home = () => {

  return (
    <>
      {/* OFERTA PRINCIPAL */}
      <main className="main-offer-index" id="main-offer">
        <figure>
          <Link to="/products-list"><img src={HappyInicio} className="main-image" alt="Foto con oferta de móvil de lanzamiento" /></Link>
        </figure>
        <article className="main-home">
          <h1 className='h1-home'>Consigue tu HappyZ Flip con HappyPhone</h1>
          <h4>Aprovecha nuestra oferta de lanzamiento</h4>
          <Link to={`/movil/1`}><button className="main-button-home">¡Descúbrelo!</button></Link>
        </article>
      </main>

      <Moviles />

    </>
  );
};