import React, { useState, useEffect } from 'react';
import MovilUnico from '../components/MovilUnico.js';

export const ProductUnic = () => {
  const [product, setProduct] = useState([]);
console.log(product)
  useEffect(() => {
    fetch('../json/catalogo.json')
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <main className="product">
      <MovilUnico product={product} /> {/* Pasa el producto a MovilUnico */}
    </main>
  );
  
};

