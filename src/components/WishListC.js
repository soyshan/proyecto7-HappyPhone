import React, { useState, useEffect } from 'react';
import '../css/cart.css';
import { Link } from 'react-router-dom';

export function WishListC() {
  const [favorito, setFavorito] = useState([]);

  useEffect(() => {
    // Cargar la lista de deseos desde localStorage al montar el componente
    const favoritoGuardado = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorito(favoritoGuardado);
  }, []);

  console.log('Estado de favorito:', favorito);

  const limpiarFavoritos = () => {
    // Limpiar la lista de deseos en localStorage y en el estado local
    localStorage.removeItem('favorites'); // Utilizar la clave correcta
    setFavorito([]);
    alert('Favoritos vaciados.');
  };
  
  const eliminarFavorito = (index) => {
    // Eliminar un producto de la lista de deseos
    const nuevaLista = [...favorito];
    nuevaLista.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(nuevaLista));
    setFavorito(nuevaLista);
  };

  return (
    <main>
      <aside className="cart">
        <h2>Tus móviles favoritos</h2>
        <ul className="cart-items">
          {favorito.map((item, index) => (
            <li key={index}>
              {item && item.ruta_imagen && (
                <img
                  src={`${process.env.PUBLIC_URL}/imgJson/${item.ruta_imagen}`}
                  alt={`${item.nombre} photo`}
                  className="product-image"
                />
              )}
              {item && (
                <div className="description">
                  <h2>{item.nombre}</h2>
                  <p>{item.precio}€</p>
                  <button onClick={() => eliminarFavorito(index)}>Eliminar</button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="total">
          <button className="clear-cart" onClick={limpiarFavoritos}>
            Limpiar favoritos
          </button>
          <Link to="/" className="continue-shopping">Volver a Inicio</Link>
        </div>
      </aside>
    </main>
)};