// components/MoreInformation.js
import React from "react";
import "./moreinformation.css";


const MoreInformation = ({ teamMembers, mostrarDescripcion }) => {
  return (
    <>
      
      <div className=" equipo-img" >
        {teamMembers.map((member) => (
            <div key={member.id} className="foto equipo-img" onClick={() => mostrarDescripcion(member.id)}>
            <img src={member.imgSrc}  alt={`Team Member ${member.id}`}  style={{ width: "200px", height: "auto" }}/>
            <p className="descripcion">{member.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreInformation;
