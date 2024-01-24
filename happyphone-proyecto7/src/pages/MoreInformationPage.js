// // pages/MoreInformationPage.js
// import React from "react";
// import MoreInformation from "../components/MoreInformation";
// import '../components/moreinformation.css'
// import andreImage from "../assets/equipo/andre.jpeg";


// export const MoreInformationPage = () => {
  
//   const teamMembers = [
//     {
//       id: 1,
//       imgSrc: andreImage,
//       description: "Andrea, una buscadora incansable..."
//     },



  // pages/MoreInformationPage.js

// import React, { useEffect } from "react";
// import MoreInformation from "../components/MoreInformation";
// // import "../css/moreinformation.css"; // Asegúrate de importar tu archivo CSS
// import andreImage from "../assets/equipo/andre.jpeg";

// const teamMembers = [
//   {
//     id: 1,
//     img: andreImage,
//     description:
//       "Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En su viaje de reinvención profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales, practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada momento con risas, descubrimientos y emociones genuinas.",
//   },

//   {
//     id: 1,
//     imgSrc: andreImage,
//     description:
//       "Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En su viaje de reinvención profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales, practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada momento con risas, descubrimientos y emociones genuinas.",
//   },

//   // Agrega otros miembros del equipo aquí
// ];

// export const MoreInformationPage = () => {
//   useEffect(() => {
//     const fotos = document.querySelectorAll(".foto");

//     fotos.forEach((foto, index) => {
//       foto.addEventListener("click", () => mostrarDescripcion(index + 1));
//     });

//     return () => {
//       // Limpiar event listeners cuando el componente se desmonta
//       fotos.forEach((foto, index) => {
//         foto.removeEventListener("click", () => mostrarDescripcion(index + 1));
//       });
//     };
//   }, []); // El segundo parámetro del useEffect es un array vacío, lo que significa que se ejecutará solo una vez al montar el componente

//   const mostrarDescripcion = (id) => {
//     const descripcion = document.querySelector(`.foto:nth-child(${id}) .descripcion`);
//     const imagen = document.querySelector(`.foto:nth-child(${id}) img`);

//     if (descripcion.style.transform === "rotateY(90deg)") {
//       descripcion.style.transform = "rotateY(0deg)";
//       imagen.style.transform = "rotateY(90deg)";
//     } else {
//       descripcion.style.transform = "rotateY(90deg)";
//       imagen.style.transform = "rotateY(0deg)";
//     }
//   };

//   return (
//     <div>
//       <MoreInformation teamMembers={teamMembers} />
//     </div>
//   );
// };



import React from "react";
import MoreInformation from "../components/OurTeam/MoreInformation";
import "../components/OurTeam/moreinformation.css";  // Importa el archivo CSS
import andreImage from "../assets/equipo/andre.jpeg";
import daniImage from "../assets/equipo/dani.jpeg";
import luisImage from "../assets/equipo/luis.jpeg";

export const MoreInformationPage = () => {
  const teamMembers = [
    {
      id: 1,
      imgSrc: andreImage,
      description:`Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En suviaje de reinvención
      profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una
      pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales,
      practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su
      sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que
      expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada
      momento con risas, descubrimientos y emociones genuinas.`
    },
    {
      id: 2,
      imgSrc: daniImage,
      description:`Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En suviaje de reinvención
      profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una
      pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales,
      practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su
      sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que
      expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada
      momento con risas, descubrimientos y emociones genuinas.`
    },
    {
      id: 3,
      imgSrc: luisImage,
      description:`Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En suviaje de reinvención
      profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una
      pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales,
      practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su
      sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que
      expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada
      momento con risas, descubrimientos y emociones genuinas.`
    },

    {
      id: 4,
      imgSrc: andreImage,
      description:`Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En suviaje de reinvención
      profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una
      pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales,
      practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su
      sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que
      expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada
      momento con risas, descubrimientos y emociones genuinas.`
    },

    {
      id: 5,
      imgSrc: luisImage,
      description:`Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En suviaje de reinvención
      profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una
      pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales,
      practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su
      sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que
      expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada
      momento con risas, descubrimientos y emociones genuinas.`
    },
    // Agrega otros miembros del equipo aquí
  ];

  // Define la función mostrarDescripcion aquí
  const mostrarDescripcion = (id) => {
    // Lógica para mostrar la descripción
    console.log(`Mostrar descripción para el miembro con ID: ${id}`);
  };

  return (
    <div className="galeria">
      <h1>Nuestro equipo</h1>
      <MoreInformation teamMembers={teamMembers} mostrarDescripcion={mostrarDescripcion} />
    </div>
  );
};



