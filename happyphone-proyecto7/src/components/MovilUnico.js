import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovilUnico() {
  const [movil, setMovil] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5500/catalogo/${id}`)
    // Reemplaza la URL con la lógica para obtener el producto por su ID
      .then(response => response.json())
      .then(data => setMovil(data))
        // const productoEncontrado = data.find(item => item.id === id);
        // setMovil(productoEncontrado);
      // });
  }, [id]);

  console.log(movil)
  console.log(id)

  return (
    <div className="container-movil-product">
      <h1>{movil.nombre}</h1>
      <img src={movil.ruta_imagen} alt={movil.nombre} />
      <p>{movil.descripcion}</p>
      <p>{movil.color}</p>
      <p>{movil.precio}€</p>
      <p>{movil.capacidad}</p>
      <p>{movil.mpCamara}</p>
      <p>{movil.camara}</p>
      <p>{movil.resolucion}</p>
      <p>{movil.firstCamera}</p>
      {/* Agrega los botones y la lógica necesaria */}
    </div>
  );
}