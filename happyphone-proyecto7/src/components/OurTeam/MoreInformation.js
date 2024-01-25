// components/MoreInformation.js
// import React from "react";
// import "./moreinformation.css";


// const MoreInformation = ({ member, mostrarDescripcion }) => {
//   return (
//     <>
      
//       <div className=" equipo-img" >
//         {teamMembers.map((member) => (
//             <div key={member.id} className="foto equipo-img" onClick={() => mostrarDescripcion(member.id)}>
//             <img src={member.imgSrc}  alt={`Team Member ${member.id}`}  style={{ width: "200px", height: "auto" }}/>
//             <p className="descripcion">{member.description}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default MoreInformation;


// components/MoreInformation.js

// components/OurTeam/MoreInformation.js

// import React, { useState, useEffect } from "react";
// import TeamMember from "./TeamMember"; // Asegúrate de tener el componente TeamMember en el mismo directorio

// const MoreInformation = () => {
//   const [teamMembers, setTeamMembers] = useState([]);

//   useEffect(() => {
//     const fetchTeamMembers = async () => {
//       try {
//         const response = await fetch(`${process.env.PUBLIC_URL}/json/teamMembers.json`);
//         if (!response.ok) {
//           throw new Error('Error al cargar el archivo JSON');
//         }
//         const data = await response.json();
//         setTeamMembers(data);
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//     };

//     fetchTeamMembers();
//   }, []);

//   return (
//     <section className="section-team-members">
//       <h1 className="h1-team-members">Equipo</h1>
//       <div className="div-team-members">
//         <div className="team-members">
//           {teamMembers.map(member => (
//             <TeamMember key={member.id} member={member} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MoreInformation;


// components/OurTeam/MoreInformation.js
import React, { useState, useEffect } from "react";

const MoreInformation = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('/json/teamMembers.json')  // La barra inicial indica la raíz del servidor
      .then(response => response.json())
      .then(datos => {
        setTeamMembers(datos);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []);



  return (
    <section className="section-team-members">
      <h1 className="h1-team-members">Equipo</h1>
      <div className="div-team-members">
        <div className="team-members">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img src={`${process.env.PUBLIC_URL}/imgJson/${member.imgSrc}`} alt={member.imgSrc} />
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreInformation;
