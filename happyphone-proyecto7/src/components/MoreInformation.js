// components/MoreInformation.js
import React from "react";
import "./moreinformation.css";


const MoreInformation = ({ teamMembers, mostrarDescripcion }) => {
  return (
    <div>
      <h1>Nuestro equipo</h1>
      <div>
        {teamMembers.map((member) => (
            <div key={member.id} className="foto equipo-img" onClick={() => mostrarDescripcion(member.id)}>
            <img src={member.imgSrc}  alt={`Team Member ${member.id}`}  style={{ width: "150px", height: "auto" }}/>
            <p className="descripcion">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreInformation;
