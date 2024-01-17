import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

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
            src='./assets/logo.png'
            alt='Logo Happy Phone'
          />
          
        </Link>

        <nav className='nav-space'>
          <Link to='./WorkWithUs' className='a-nav'>Inicia sesión</Link>
          <Link to='./AboutHappyPhone' className='a-nav'>Contacto</Link>
        

        <Link id="toggleSearchButton" onClick={toggleSearchInput} ><img className='lupa'
            src='./assets/busqueda.svg'
            alt='Lupa de busqueda'
          /></Link>
        {showSearch && (
          <form onSubmit={onSearchSubmit}>
            <input type='search' name='valueSearch' value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} placeholder='Buscar nombre de Product' />
            <button type="submit" className='btn-search'>Buscar</button>
          </form>
        )}

        <Link onClick={redirectToOtraPagina} >
          <img className='logo-shoppingcart'
		  src='./assets/shoppingcart.png' 
		  alt="Carro" />
        </Link>
	  	</nav>
      </header>

      <Outlet />
    </>
  );
};