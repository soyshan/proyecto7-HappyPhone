// import React from 'react';
// import '../components/moreInformation.css';

// export class Equipo extends React.Component {
//   state = {
//     selectedMember: null,
//     miembros: [
//       {
//         id: 1,
//         img: 'assets/equipo/andre.jpeg',
//         nombre: 'Andre',
//         descripcion: "Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En su viaje de reinvención profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales, practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada momento con risas, descubrimientos y emociones genuinas.",
//       },
//       {
//         id: 2,
//         img: 'assets/equipo/mar.jpeg',
//         nombre: 'Mar',
//         descripcion: "Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En su viaje de reinvención profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales, practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada momento con risas, descubrimientos y emociones genuinas.",
//       },
//       {
//         id: 3,
//         img: 'assets/equipo/andre.jpeg',
//         nombre: 'Dani',
//         descripcion: "Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En su viaje de reinvención profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales, practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada momento con risas, descubrimientos y emociones genuinas.",
//       },
//       {
//         id: 4,
//         img: 'assets/equipo/andre.jpeg',
//         nombre: 'Andre',
//         descripcion: "Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En su viaje de reinvención profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales, practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada momento con risas, descubrimientos y emociones genuinas.",
//       },
//       {
//         id: 5,
//         img: 'assets/equipo/mar.jpeg',
//         nombre: 'Andre',
//         descripcion: "Andrea, una buscadora incansable de aventuras en la vida y en el mundo digital. En su viaje de reinvención profesional hacia el mundo de la tecnología, se sumerge en el desarrollo web y la ciberseguridad con una pasión contagiosa. Cuando no está inmersa en líneas de código, la encontrarás explorando senderos naturales, practicando yoga para mantener equilibrio y descubriendo tesoros escondidos en nuevos lugares. Su risa es su sello distintivo, capaz de iluminar cualquier espacio, pero también lleva consigo la nobleza de lágrimas que expresan tanto alegría desbordante como profundidad emocional. Para ella, la vida se trata de llenar cada momento con risas, descubrimientos y emociones genuinas.",
//       },
//     ],
//   };

//   mostrarDescripcion = (id) => {
//     this.setState((prevState) => ({
//       selectedMember: prevState.selectedMember === id ? null : id,
//     }));
//   };

//   render() {
//     return (
//       <main>
//         <div className="galeria">
//           {this.state.miembros.map((miembro) => (
//             <div key={miembro.id} className={`foto ${this.state.selectedMember === miembro.id ? 'seleccionado' : ''}`} onClick={() => this.mostrarDescripcion(miembro.id)}>
//             <img className="equipo-img" src={require(`../${miembro.img}`).default} alt={miembro.nombre} />
//               <div className="descripcion">{miembro.descripcion}</div>
//             </div>
//           ))}
//         </div>

        
//       </main>
//     );
//   }
// }


