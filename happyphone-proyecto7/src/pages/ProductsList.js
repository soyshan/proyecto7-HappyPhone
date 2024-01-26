import React, { useEffect, useState } from 'react';
import '../css/productspage.css'
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';

export const ProductsList = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [orden, setOrden] = useState('asc'); // Estado para el orden de los productos

  useEffect(() => {
    // Llamar al JSON de productos
    fetch('http://localhost:5500/catalogo')
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setProductosFiltrados(data); // Inicializa productosFiltrados con todos los productos
      })
      .catch(error => console.error('Error al cargar productos', error));
  }, []);

  const ordenarProductos = (tipoOrden) => {
    const productosOrdenados = [...productosFiltrados];

    productosOrdenados.sort((a, b) => {
      if (tipoOrden === 'asc') {
        return a.precio - b.precio;
      } else {
        return b.precio - a.precio;
      }
    });

    setOrden(tipoOrden);
    setProductosFiltrados(productosOrdenados);
  };

  // Función de búsqueda que filtrará los productos según el término de búsqueda
  const handleSearch = (searchTerm) => {
    // Realizar la lógica de búsqueda aquí
    // Filtrar los productos según el término de búsqueda y actualizar el estado de productosFiltrados
    const productosFiltrados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductosFiltrados(productosFiltrados);
  };

  return (
    <div className="productos-lista">
      <h1>Nuestros productos </h1>
      <div className="search-and-filter">
      <SearchBar onSearch={handleSearch} />
      <p className="filter-text">Ordenar por precio:</p>
      <div className="filter-button">
        <select value={orden} onChange={(e) => ordenarProductos(e.target.value)}>
          <option value="asc">Menor a Mayor</option>
          <option value="desc">Mayor a Menor</option>
        </select>
      </div>
      </div>

      <div className="tarjetas-producto">
        {productosFiltrados.map(producto => (
          <Link key={producto.id} to={`/movil/${producto.id}`} className="linkToProduct">
            <div key={producto.id} className="tarjeta-producto">
              <img
                src={`${process.env.PUBLIC_URL}/imgJson/${producto.ruta_imagen}`}
                alt={producto.nombre}
                className="imagen-producto"
              />
              <h3>{producto.nombre}</h3>
            
              <p className="precio">Precio: ${producto.precio}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
