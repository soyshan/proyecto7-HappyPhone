import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../css/product.css'


export default function MovilUnico() {
  const [movil, setMovil] = useState([]);
  const [cantidad, setCantidad] = useState(1); // Agregamos el estado para la cantidad

  const { id } = useParams();
  const navigate = useNavigate();

  const handleInputChange = (value) => {
    setCantidad(value);
  };

  const añadirAlCarrito = () => {
    const productoParaAñadir = { ...movil, cantidad };
    let carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoActual.push(productoParaAñadir);
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    // Aquí puedes añadir alguna notificación o redirección si lo deseas
  };
  
  const añadirAFavoritos = () => {
    // Lógica para añadir a la lista de deseos
    const newFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    newFavorites.push(movil);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    
    // Redirige al usuario a la página de lista de deseos
     navigate("/wishlist");
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

 
 


  return (
    <div className="container-movil-product">
    <div className="img-product-detail">
        <img src={`${process.env.PUBLIC_URL}/imgJson/${movil.ruta_imagen}`} alt={movil.nombre} className="product-image-detail" />
      </div>
      <div className="details-container">
      <div className="description">
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
        <button className="add-to-cart" data-product-name="HappyZ Flip" onClick={añadirAlCarrito}>Comprar</button>
        <br />
        <button className="add-to-cart" data-product-name="HappyZ Flip" onClick={añadirAFavoritos}>Me gusta</button> 
        <br/>
        <Link to="/" className="back-to-catalog">Volver al catálogo</Link>
      </div>
    
    </div>
    </div>
  );
}