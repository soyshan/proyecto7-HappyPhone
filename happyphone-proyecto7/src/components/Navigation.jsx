import React, { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } = useContext(ProductContext);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const onSearchSubmit = e => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });
    onResetForm();
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
            src='./src/assets/logo.png'
            alt='Logo Happy Phone'
          />
        </Link>

        <nav className='nav-space'>
          <Link to='./WorkWithUs' className='a-nav'>Inicia sesión</Link>
          <Link to='./AboutHappyPhone' className='a-nav'>Contacto</Link>
        

        <Link id="toggleSearchButton" onClick={toggleSearchInput} ><img className='lupa'
            src='./src/assets/busqueda.svg'
            alt='Lupa de busqueda'
          /></Link>
        {showSearch && (
          <form onSubmit={onSearchSubmit}>
            <input type='search' name='valueSearch' value={valueSearch} onChange={onInputChange} placeholder='Buscar nombre de Product' />
            <button type="submit" className='btn-search'>Buscar</button>
          </form>
        )}

        <Link onClick={redirectToOtraPagina} >
          <img className='logo-shoppingcart'
		  src='./src/assets/shoppingcart.png' 
		  alt="Carro" />
        </Link>
	  	</nav>
      </header>

      <Outlet />
    </>
  );
};