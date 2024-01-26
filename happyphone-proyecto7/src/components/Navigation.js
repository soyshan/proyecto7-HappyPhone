import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import hamburguer from '../assets/hamburguer.png';
import shoppingcart from '../assets/shoppingcart.png';
// import SearchBar from './SearchBar';

export const Navigation = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const obtenerCantidadTotalDelCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  useEffect(() => {
    const actualizarCantidadCarrito = () => {
      const cantidad = obtenerCantidadTotalDelCarrito();
      setCantidadCarrito(cantidad);
    };

    actualizarCantidadCarrito();
    window.addEventListener('storage', actualizarCantidadCarrito);

    return () => {
      window.removeEventListener('storage', actualizarCantidadCarrito);
    };
  }, []);

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
        <Link to='wishlist' className='a-nav'>
          Favoritos
        </Link>
        </li>
        <li>
          <Link to='carrito'>
          <img className='logo-shoppingcart' src={shoppingcart} alt="Carro" />
          <div id="cartAmount" className="cartAmount">{cantidadCarrito}</div>
        </Link>
        </li>
        </ul>
      </nav>
    </header>
  );
}
