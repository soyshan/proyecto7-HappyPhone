import React, { useState, useEffect } from 'react';
import HappyInicio from '../assets/happyinicio.svg';
import Moviles from '../components/Moviles.js';
import { Link, useNavigate } from 'react-router-dom';


export const Home = () => {
  const usenavigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./json/catalogo.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data.moviles);
              });    
    
  }, []);
  useEffect(() => {
    let username=sessionStorage.getItem('username')
    if(username===''|| username ===null){
        usenavigate('/login');
    }
  }, []);

  return (
    <>
      {/* OFERTA PRINCIPAL */}
      <main className="main-offer" id="main-offer">
        <figure>
          <Link to="./Home"><img src={HappyInicio} className="main-image" alt="Foto con oferta de móvil de lanzamiento" /></Link>
          <Link style={{float:"right"}} to="/login">Logout</Link>
        </figure>
        <article className="main-text">
          <h1>Consigue tu HappyZ Flip con HappyPhone</h1>
          <h4>Aprovecha nuestra oferta de lanzamiento</h4>
          <Link to={`/movil/1`}><button className="main-button">¡Descúbrelo!</button></Link>
        </article>
      </main>

      <Moviles />

    </>
  );
};