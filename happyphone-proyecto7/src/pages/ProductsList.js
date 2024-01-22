// ProductosList.js

import React, { useEffect, useState } from 'react';
import '../components/productspage.css'
import { Link } from 'react-router-dom';

export const ProductsList = () => {
  const [productos, setProductos] = useState([]);
  const [orden, setOrden] = useState('asc'); // Estado para el orden de los productos



  useEffect(() => {
    // Llamar al JSON de productos
    fetch('http://localhost:5500/catalogo')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al cargar productos', error));
  }, []);

  const ordenarProductos = (tipoOrden) => {
    const productosOrdenados = [...productos];

    productosOrdenados.sort((a, b) => {
      if (tipoOrden === 'asc') {
        return a.precio - b.precio;
      } else {
        return b.precio - a.precio;
      }
    });

    setOrden(tipoOrden);
    setProductos(productosOrdenados);
  };


  

  return (
    <div className="productos-lista">
      <h1>Nuestros productos </h1>
      <p className="filter-text">Ordenar por precio:</p>
      <div className="filter-button">
        <select value={orden} onChange={(e) => ordenarProductos(e.target.value)}>
          <option value="asc">Menor a Mayor</option>
          <option value="desc">Mayor a Menor</option>
        </select>
      </div>


      <div className="tarjetas-producto">
        {productos.map(producto => (
            <Link key={producto.id} to={`/movil/${producto.id}`} className="linkToProduct">
            <div key={producto.id} className="tarjeta-producto">
            <img
              src={`${process.env.PUBLIC_URL}/imgJson/${producto.ruta_imagen}`}
              alt={producto.nombre}
              className="imagen-producto"
            />
            <h3>{producto.nombre}</h3>
            <p className="descripcion">{producto.descripcion}</p>
            <p className="precio">Precio: ${producto.precio}</p>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

