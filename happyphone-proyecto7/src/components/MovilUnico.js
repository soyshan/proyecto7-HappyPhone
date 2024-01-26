import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../css/product.css'


export default function MovilUnico() {
  const [movil, setMovil] = useState([]);
  const [cantidad, setCantidad] = useState(1); // Agregamos el estado para la cantidad

  const { id } = useParams();

  const handleInputChange = (value) => {
    setCantidad(value);
  };

  useEffect(() => {
    fetch(`http://localhost:5500/catalogo/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMovil(data))
      .catch(error => {
        console.error('Error al obtener detalles del producto:', error.message);
        // Puedes manejar el error de otra manera si lo deseas
      });
  }, [id]);

  const añadirAlCarrito = () => {
    const productoParaAñadir = { ...movil, cantidad };
    let carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoActual.push(productoParaAñadir);
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    // Aquí puedes añadir alguna notificación o redirección si lo deseas
  };

  const añadirAFavoritos = () => {
    const productoParaFavoritos = { ...movil, cantidad };
    let favoritoActual = JSON.parse(localStorage.getItem('favorito')) || [];
    favoritoActual.push(productoParaFavoritos);
    localStorage.setItem('favorito', JSON.stringify(favoritoActual));
    // Aquí puedes añadir alguna notificación o redirección si lo deseas
  };
  

  return (
    <div className="container-movil-product">
      <div className="description">
      <img src={`${process.env.PUBLIC_URL}/imgJson/${movil.ruta_imagen}`}alt={movil.nombre} />
        <h2>{movil.nombre}</h2>
        <p>{movil.descripcion}</p>
        <p>{movil.color}</p>
        <p>{movil.precio}€</p>
        <p>{movil.capacidad}</p>
        <p>{movil.mpCamara}</p>
        <p>{movil.camara}</p>
        <p>{movil.resolucion}</p>
        <p>{movil.firstCamera}</p>
      </div>
      <div className="cantidad">
        <input
          type="number"
          className="cantidad-input"
          value={cantidad}
          onChange={(e) => handleInputChange(e.target.value)}
          min="1"
        />
      </div>
      <div className="btn-position">
        <button className="add-to-cart" data-product-name="HappyZ Flip" onClick={añadirAlCarrito}>Comprar ya</button>
        <br />
        <button className="add-to-cart" data-product-name="HappyZ Flip" onClick={añadirAFavoritos}>Me gusta</button>
        <Link to="/" className="back-to-catalog">Volver al catálogo</Link>
      </div>
    </div>
  );
}