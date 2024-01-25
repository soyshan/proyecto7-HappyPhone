
//import React from "react";
//import { Product } from "./Product";
//import Product from './ruta/a/Product';
import { Link } from 'react-router-dom';
import React, { useState } from "react";

export function CarritoList() {

      const [favorites, setFavorites] = useState([]);
    
      const handleAddToFavorites = (product) => {
        setFavorites((prevFavorites) => [...prevFavorites, product]);
      };
    
      return (
        <div>
<div className="container-movil-product">
       
          <h2>Productos favoritos</h2>
          <div className="description">
          {favorites.map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
              <img src={product.ruta_imagen} alt={product.nombre} />
                <h2 className="h2ContainerMovilUnico">{product.nombre}</h2>
                <p>{product.descripcion}</p>
                <p>{product.color}</p>
                <p>{product.precio}€</p>
            </div>
          ))}
          <Product id={1} name="Producto 1" onAddToFavorites={handleAddToFavorites} />
          <Product id={2} name="Producto 2" onAddToFavorites={handleAddToFavorites} />
       </div>
       </div>
                    
            <div className="btn-position">
                <button className="add-to-cart" data-product-name="HappyZ Flip">Comprar ya</button>
                <button className="add-to-cart" data-product-name="HappyZ Flip">Quitar de favoritos</button>
                <Link to="/" className="back-to-catalog">Volver al catálogo</Link>
            </div>
            </div>
);

}