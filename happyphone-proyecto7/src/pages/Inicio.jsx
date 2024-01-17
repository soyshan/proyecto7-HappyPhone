
import React from 'react'

import { Link } from "react-router-dom";

export function Inicio() {
    return (
      <div>
        <h1>Esta es la página de inicio</h1>
        <Link to="./ContactForm">Haz clic para ver la página de contacto</Link>
      </div>
    );
  }
  
