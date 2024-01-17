import './App.css';
import './components/index.js';
import './js/constructor.js';
import'./js/product.js';

function App() {
  return (
    <div className="App">
      <div id="frameBuscar">
        <input type="text" minLength="3" maxLength="15" id="inpBusq" style={{width: "150px"}} />
      </div>
      <div className="cart">
        <a href="./html/carrito.html">
          <img className="logo-shoppingcart" src="./img/shoppingcart.png" alt="shoppingcart" />
          <div id="cart-amount" className="cart-amount">0</div>
        </a>
      </div>
      {/* <!--HEADER--> */}
      <header-component></header-component>
      {/* <!--OFERTA PRINCIPAL--> */}
      <main className="main-offer" id="main-offer">
        <figure>
          <a href="./html/product.html"><img className="main-image" src="./img/happyinicio.svg" alt="Foto con oferta de móvil de lanzamiento" /></a>
        </figure>
        <article className="main-text">
          <h1>Consigue tu HappyZ Flip con HappyPhone</h1>
          <h4>Aprovecha nuestra oferta de lanzamiento</h4>
          <a href="./html/product.html"><button className="main-button">¡Descúbrelo!</button></a>
        </article>
      </main>
      {/* <!--CAROUSEL PRODUCTOS--> */}
      <section className="carousel-products" id="carousel-products"></section>
      <section className="productoBuscado" id="productoBuscado"></section>
      <br />
      {/* <!--FOOTER--> */}
      <footer-component></footer-component>
    </div>
  );
}

export default App;