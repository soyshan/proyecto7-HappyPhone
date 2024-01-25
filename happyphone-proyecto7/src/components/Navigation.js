import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import hamburguer from '../assets/hamburguer.png';
import shoppingcart from '../assets/shoppingcart.png';

export const Navigation = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const redirectToOtraPagina = () => {
    // Lógica para redirigir a otra página al hacer clic en el botón con la imagen del carro
  };

  return (
    <header className='container-nav'>
      <Link to='/' className='logo'>
        <img
          src={logo}
          alt='Logo Happy Phone'
        />
      </Link>

      <div className='menu-toggle' onClick={toggleNav}>
        <div className='hamburger'><img src={hamburguer} alt="menu hamburguesa"></img></div>
      </div>
      
      <nav className={`nav-space ${isNavOpen ? 'open' : ''}`}>
       <ul>
        <li>
          <Link to='./Login' className='a-nav'>
          Inicia sesión
        </Link>
        </li>
        <li>
            <Link to='./ContactForm' className='a-nav'>
          Contacto
        </Link>
        </li>
        <li>
        <Link to='products-list' className='a-nav'>
          Productos
        </Link>
        </li>
        <li>
          <Link to='carrito' onClick={redirectToOtraPagina}>
          <img className='logo-shoppingcart' src={shoppingcart} alt="Carro" />
        </Link>
        </li>
        
       
        
        
        </ul>
      </nav>
    </header>
  );
}