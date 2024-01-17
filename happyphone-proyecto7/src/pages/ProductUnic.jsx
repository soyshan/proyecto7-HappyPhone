import React, { useState, useEffect } from 'react';

const Product = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('../json/catalogo.json')
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <main className="product">
      <figure className="figure1">
        <img className="product-image" src={product.ruta_imagen} alt={product.nombre} />
      </figure>
      <article className="main-product">
        <div className="description">
          <h2>{product.nombre}</h2>
          <ul className="text-description">
            <li>{product.descripcion}</li>
            <li>{product.color}</li>
          </ul>
          <h3>{product.precio}€</h3>
        </div>
        {/* Resto del contenido */}
      </article>
    </main>
  );
};

export default Product;