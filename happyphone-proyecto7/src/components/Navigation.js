import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Importa la imagen del logo
import shoppingcart from '../assets/shoppingcart.png';
import SearchBar from './SearchBar';

export const Navigation = () => {
  const navigate = useNavigate();

  const redirectToOtraPagina = () => {
    // Lógica para redirigir a otra página al hacer clic en el botón con la imagen del carro
  };

  return (
    <>
      <header className='container-nav'>
        <Link to='/' className='logo'>
          <img
            src={logo} // Utiliza la ruta importada para el logo
            alt='Logo Happy Phone'
          />
        </Link>

        <SearchBar />

        <nav className='nav-space'>
          <Link to='#' className='a-nav'>
            Inicia sesión
          </Link>
          <Link to='./ContactForm' className='a-nav'>
            Contacto
          </Link>
          <Link to='products-list' className='a-nav'>
            Productos
          </Link>

          <Link onClick={redirectToOtraPagina}>
            <img
              className='logo-shoppingcart'
              src={shoppingcart}
              alt='Carro'
            />
          </Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
};
