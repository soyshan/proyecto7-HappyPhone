import React, {useEffect, useState } from "react";
function useMoviles(){

    const [moviles, setMoviles] = useState([])

    useEffect(() => {
        fetch("json/catalogo.json")
        .then(response => response.json())
        .then (datos => {
            setMoviles(datos)
        })
    }, [])
    return moviles
}

export default function Moviles() {
    const moviles = useMoviles()
    return(
        
        <div className="container-movil-product">

        <h1>Productos</h1>

      {moviles.map(item => (
        <div key={item.id} className="divProductJson">
          <h2>{item.nombre}</h2>
          <img src={item.ruta_imagen} alt={item.nombre} />
          <p>{item.descripcion}</p>
          <p>{item.color}</p>
          <p>{item.precio}€</p>
        </div>

      ))}
      </div>
    );
};
