// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import '../css/product.css'

// export default function MovilUnico() {
//   const [movil, setMovil] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:5500/catalogo/${id}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Error de red: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => setMovil(data))
//       .catch(error => {
//         console.error('Error al obtener detalles del producto:', error.message);
//         // Puedes manejar el error de otra manera si lo deseas
//       });
//   }, [id]);

//   return (
//     <div className="container-movil-product">
//       <div className="description">
//       <img src={movil.ruta_imagen} alt={movil.nombre} />
//       <h2>{movil.nombre}</h2>
//       <p>{movil.descripcion}</p>
//       <p>{movil.color}</p>
//       <p>{movil.precio}€</p>
//       <p>{movil.capacidad}</p>
//       <p>{movil.mpCamara}</p>
//       <p>{movil.camara}</p>
//       <p>{movil.resolucion}</p>
//       <p>{movil.firstCamera}</p>
//       </div>
//       <div className="cantidad">
//                     <button className="btn btn-decrementar">-</button>
                    
//                     <input
//                       type="number"
//                       className="cantidad-input"
//                       value={tuValor}
//                       onChange={(e) => handleInputChange(e.target.value)}
//                       min="1"
//                       />

//                     <button className="btn btn-incrementar">+</button>
//        </div>
//        <div className="btn-position">
//         <button className="add-to-cart" data-product-name="HappyZ Flip">Comprar ya</button>
                
//              <br />
//          <a href="../index.html" className="back-to-catalog">Volver al catálogo</a>
    
//        </div>
         
//     </div>

//   );
// }



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

  return (
    <div className="container-movil-product">
      <div className="description">
        <img src={movil.ruta_imagen} alt={movil.nombre} />
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
        <button className="btn btn-decrementar">-</button>
        <input
          type="number"
          className="cantidad-input"
          value={cantidad}
          onChange={(e) => handleInputChange(e.target.value)}
          min="1"
        />
        <button className="btn btn-incrementar">+</button>
      </div>
      <div className="btn-position">
        <button className="add-to-cart" data-product-name="HappyZ Flip">Comprar ya</button>
        <br />
        <Link to="/" className="back-to-catalog">Volver al catálogo</Link>
      </div>
    </div>
  );
}
