import React, { useState, useEffect } from "react";
import "./moreinformation.css";

const MoreInformation = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
  const OurTeam = async () => {
    try {
    const response = await import('./teamMember.json')
    const filteredItems = response.default.teamMembers || [];
    setTeamMembers(filteredItems.map(member => ({ ...member, isHovered: false })));
    console.log("teamMembers loaded:", teamMembers);
 } catch (error) {
  console.error("Error al cargar teamMember.json", error);
 }
}
console.log("OurTeam function called");
 OurTeam()
 // eslint-disable-next-line
 }, []);

 const handleMouseEnter = (id) => {
  const updatedTeamMembers = teamMembers.map((member) =>
    member.id === id ? { ...member, isHovered: true } : member
  );
  setTeamMembers(updatedTeamMembers);
};

const handleMouseLeave = (id) => {
  const updatedTeamMembers = teamMembers.map((member) =>
    member.id === id ? { ...member, isHovered: false } : member
  );
  setTeamMembers(updatedTeamMembers);
};

 return (
  <div className="equipo-img-container">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className={`equipo-img-item ${member.isHovered ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(member.id)}
          onMouseLeave={() => handleMouseLeave(member.id)}
          
        >
        <img src={`/imgJson/${member.imgSrc}`} alt={`Team Member ${member.id}`} className="equipo-img" style={{ width: "200px", height: "auto" }} />

        <div className="descripcion-overlay">
            <p className="descripcion">{member.description}</p>
          </div>
      </div>
    ))}
  </div>
);
};


export default MoreInformation