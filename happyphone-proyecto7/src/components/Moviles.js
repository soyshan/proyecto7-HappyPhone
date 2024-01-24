 import React, {useEffect, useState } from "react";
 import { Link } from "react-router-dom";

//  function useMoviles(){

    //  const [moviles, setMoviles] = useState([])

    //  useEffect(() => {
    //      fetch("http://localhost:5500/catalogo")
    //      .then(response => response.json())
    //      .then (datos => {
    //          setMoviles(datos.catalogo)
    //      })
    //  }, [])
    //  return moviles
//  }

 export default function Moviles() {

  const [moviles, setMoviles] = useState([])

  useEffect(() => {
      fetch("http://localhost:5500/catalogo")
      .then(response => response.json())
      .then (datos => {
          setMoviles(datos)
      })
  }, [])

  console.log(moviles)

    //  const moviles = useMoviles()
     const [currentPage, setCurrentPage] = useState(0);
     const itemsPerPage = 3;

    const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1)
    }

    const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1)
     }

  // Cálculo de los elementos a mostrar en la página actual
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = moviles.slice(indexOfFirstItem, indexOfLastItem);

     return(
        
         <section className="sectionMovilProduct">

              <h1>Productos</h1>
                <div className="productMovil">
                {currentItems.map(item => (
                <div key={item.id} className="divProductJson">
                  <h2>{item.nombre}</h2>
                  
             {<img src={`${process.env.PUBLIC_URL}/imgJson/${item.ruta_imagen}`} alt="Descripción del SVG" />}



                  <Link to={`/movil/${item.id}`}>Ver más</Link>
                </div>
              ))}
                  </div>
              <br />
              <div>
              <button onClick={handlePrevPage} disabled={currentPage === 0}>Anterior</button>
              <button onClick={handleNextPage} disabled={(currentPage + 1) * itemsPerPage >= moviles.length}>Siguiente</button>
              </div>
       </section>
     );
    
 };


