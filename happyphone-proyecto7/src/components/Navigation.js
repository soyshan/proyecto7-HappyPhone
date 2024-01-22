import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Importa la imagen del logo
import busqueda from '../assets/busqueda.svg'; // Importa la imagen de la lupa
import shoppingcart from '../assets/shoppingcart.png';

export const Navigation = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  
  const onSearchSubmit = e => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });
    setValueSearch(''); // Limpiar el campo de búsqueda
  };

  const toggleSearchInput = () => {
    setShowSearch(!showSearch);
  };

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

        <nav className='nav-space'>
          <Link to='./Login' className='a-nav'>Inicia sesión</Link>
          <Link to='./ContactForm' className='a-nav'>Contacto</Link>
        

        <Link id="toggleSearchButton" onClick={toggleSearchInput} ><img className='lupa'
            src={busqueda}
            alt='Lupa de busqueda'
          /></Link>
        {showSearch && (
          <form onSubmit={onSearchSubmit}>
            <input type='search' name='valueSearch' value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} placeholder='Buscar nombre de Product' />
            <button type="submit" className='btn-search'>Buscar</button>
          </form>
        )}

        <Link to='carrito' onClick={redirectToOtraPagina} >
          <img className='logo-shoppingcart' src={shoppingcart}  alt="Carro" />
        </Link>
	  	</nav>
      </header>

      <Outlet />
    </>
  );
};