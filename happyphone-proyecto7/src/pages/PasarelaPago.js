import React, { useState } from 'react';
import '../css/pasarelapago.css';


export function PasarelaPago() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',

  });


  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleChange = (e) => {

      
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {

      e.preventDefault();
     if (!/^[A-Z][a-z]+\s[A-Z][a-z]+$/.test(formData.name)) {
       alert('El nombre debe comenzar con mayúscula y añadir el apellido');
       return;
     }
     setIsSubmitted(true);
   };

  return (

  
    <div className="containerPasarelaPago">
   <div className='divPasarelaPago'>
      <div className="payment-container">
        {isSubmitted ? (
          <div>
            <h2>¡Pago realizado!</h2>
            <p>Gracias por su compra.</p>
            {/* <Link to="#" className="back-to-catalog">Volver al catálogo</Link> */}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
                    
            <h2>Detalle de Pago</h2>
            <label for="card-number">Número de Tarjeta:</label>
            <input type="text" id="card-number" placeholder="****************" maxlength="16" pattern="[0-9]{16}" required />

            <label for="expiry-date">Fecha de Vencimiento:</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" maxlength="5" required /> 

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" placeholder="***" maxlength="3" pattern="[0-9]{3}" required />

            <label for="name">Titular de la Tarjeta:</label>
            <input type="text" id="name" name="name" placeholder="Nombre y primer Apellido" value={formData.name}  onChange={handleChange}  required />
            
            <div class="card-icons">
                <i class="fab fa-cc-visa"></i>
                <i class="fab fa-cc-mastercard"></i>
                <i class="fab fa-cc-stripe"></i>
                <i class="fab fa-cc-paypal"></i>
            </div>

            <button type="submit" onclick="processPayment()">Pagar</button>
        </form>

        )}
      </div>
      </div>
      </div>
  
  );
};