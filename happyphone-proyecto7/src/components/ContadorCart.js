import React from "react";

export function ContadorCart() {
  // Obtener la cantidad de artículos del localStorage
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <p className="p-carrito">{cantidadTotal}</p>
  );
}