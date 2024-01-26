import React, { useState, useEffect } from 'react';
import '../css/cart.css';
//import { Link } from "react-router-dom";

export function WishList() {
    const [favorito, setFavorito] = useState([]);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      // Cargar el carrito desde localStorage al montar el componente
      const favoritoGuardado = JSON.parse(localStorage.getItem('favorito')) || [];
      setFavorito(favoritoGuardado);
      
    }, []);
  

  
    const limpiarCarrito = () => {
      // Limpiar el carrito
      localStorage.removeItem('carrito');
      setFavorito([]);
      setTotal(0);
      alert('Favoritos vaciado.');
    };

  
    const renderizarFavorito = () => {
      // Renderizar los elementos del carrito
      return favorito.map((item, index) => (
        <li key={index}>
          <img
            src={`/imgJson/happy${item.nombre.split(' ')[1]}.svg`} // Asegúrate de que las rutas a las imágenes sean correctas
            alt={`${item.nombre} image`}
            className="product-image"
          />

        </li>
      ));
    };
  
    return (
        <main>
        <aside className="cart">
          <h2>Tus favoritos</h2>
          <ul className="cart-items">
            {renderizarFavorito()}
          </ul>
          <div className="total">
           
          <div className="description">
      <img src={`${process.env.PUBLIC_URL}/imgJson/${item.ruta_imagen}`}alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p>{item.color}</p>
        <p>{item.precio}€</p>
       
      </div>
            <br />
            <br />
          
            <button className="clear-cart" onClick={limpiarCarrito}>Limpiar favoritos</button>
            <button className="continue-shopping">Volver a Inicio</button>
          </div>
        </aside>
      </main>
);
};