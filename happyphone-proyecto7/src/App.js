// src/App.js
import React from 'react';
import './css/style.css';
import './css/cart.css';
import './css/main.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <div id="frameBuscar">
        <input type="text" minLength="3" maxLength="15" id="inpBusq" style={{ width: '150px' }} />
      </div>
      <div className="cart">
        <li>
          <a href="./html/carrito.html">
            <img className="logo-shoppingcart" src="./img/shoppingcart.png" alt="shoppingcart" />
            <div id="cart-amount" className="cart-amount">0</div>
          </a>
        </li>
      </div>
      <Header />
      <main className="main-offer" id="main-offer">
        <figure>
          <a href="./html/product.html">
            <img className="main-image" src="./img/happyinicio.svg" alt="Foto con oferta de movil de lanzamiento" />
          </a>
        </figure>
        <article className="main-text">
          <h1>Consigue tu HappyZ Flip con HappyPhone</h1>
          <h4>Aprovecha nuestra oferta de lanzamiento</h4>
          <a href="./html/product.html"><button className="main-button">¡Descúbrelo!</button></a>
        </article>
      </main>
      {/* ... (Resto de tu contenido) */}
      <Footer />
    </div>
  );
}

export default App;
