import React, { useState, useEffect } from 'react';
import '../css/cart.css';
import { Link } from "react-router-dom";

export const Carrito = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      // Cargar el carrito desde localStorage al montar el componente
      const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
      setCarrito(carritoGuardado);
      calcularTotal(carritoGuardado);
    }, []);
  
    const calcularTotal = (carrito) => {
      // Calcular el total del carrito
      const totalCalculado = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
      setTotal(totalCalculado);
    };
  
    const limpiarCarrito = () => {
      // Limpiar el carrito
      localStorage.removeItem('carrito');
      setCarrito([]);
      setTotal(0);
      alert('Carrito vaciado.');
    };
  
    const formatCurrency = (amount) => {
      // Formatear moneda
      return amount.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR',
      });
    };
  
    const renderizarCarrito = () => {
      // Renderizar los elementos del carrito
      return carrito.map((item, index) => (
        <li key={index}>
          <img
            src={`../img/happy${item.nombre.split(' ')[1]}.svg`} // Asegúrate de que las rutas a las imágenes sean correctas
            alt={`${item.nombre} image`}
            className="product-image"
          />
          <div>
            {`${item.nombre} x ${item.cantidad} - ${formatCurrency(item.precio * item.cantidad)}`}
          </div>
        </li>
      ));
    };
  
    return (
        <main>
        <aside className="cart">
          <h2>Carrito</h2>
          <ul className="cart-items">
            {renderizarCarrito()}
          </ul>
          <div className="total">
            <p>Total: <span className="total-amount">{formatCurrency(total)}</span></p>
            <br />
            <br />
            <button className="pay-now" onClick={() => window.open('../html/pasarelapago.html', '_self')}>Pagar ahora</button>
            <button className="clear-cart" onClick={limpiarCarrito}>Limpiar carrito</button>
            <button className="continue-shopping">Seguir comprando</button>
          </div>
        </aside>
      </main>
);
};