import React, { useState, useEffect } from 'react';
import '../css/cart.css';

export function WishListC() {
    const [favorito, setFavorito] = useState([]);
  
    useEffect(() => {
      // Cargar la lista de deseos desde localStorage al montar el componente
      const favoritoGuardado = JSON.parse(localStorage.getItem('favorito')) || [];
      setFavorito(favoritoGuardado);
    }, []);
  
    const limpiarFavoritos = () => {
      // Limpiar la lista de deseos
      localStorage.removeItem('favorito');
      setFavorito([]);
      alert('Favoritos vaciados.');
    };
  
    return (
        <main>
        <aside className="cart">
          <h2>Tus favoritos</h2>
          <ul className="cart-items">
            {favorito.map((item, index) => (
              <li key={index}>
                <img
                  src={`${process.env.PUBLIC_URL}/imgJson/${item.ruta_imagen}`}
                  alt={`${item.nombre} image`}
                  className="product-image"
                />
                <div className="description">
                  <h2>{item.nombre}</h2>
                  <p>{item.color}</p>
                  <p>{item.precio}€</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="total">
            <button className="clear-cart" onClick={limpiarFavoritos}>Limpiar favoritos</button>
            <button className="continue-shopping">Volver a Inicio</button>
          </div>
        </aside>
      </main>
    );
}