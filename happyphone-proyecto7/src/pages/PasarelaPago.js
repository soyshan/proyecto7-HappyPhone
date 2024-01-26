import React, { useState } from 'react';
import '../css/pasarelapago.css';


export function PasarelaPago() {
  const [formData, setFormData] = useState({
    name: '',
    cvv: '',
    cardNumber: '',
    date: '',

  });


  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleChange = (e) => {

      
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    };


    function isValidExpiryDate(expiryDate) {
      const [month, year] = expiryDate.split("/");
      const expirationYear = 2000 + parseInt(year);
      const expirationMonth = parseInt(month);
      const currentDate = new Date();
      const expirationDate = new Date(expirationYear, expirationMonth, 0); 
    
      return expirationDate > currentDate && /^\d{2}\/\d{2}$/.test(expiryDate); // Para saber si han metido la fecha así MM/YY
    }


    const handleSubmit = (e) => {

      e.preventDefault();
     if (!/^[A-Z][a-z]+\s[A-Z][a-z]+$/.test(formData.name)) {
       alert('El nombre debe comenzar con mayúscula y añadir el apellido');
       return;
     }
     if (!/[0-9]{13}$/.test(formData.cardNumber)) {
      alert("Por favor, ingrese un número de tarjeta válido.");
      return;
    }
  
    if (!isValidExpiryDate(formData.date)) {
      alert("Por favor, ingrese una fecha de vencimiento válida (MM/YY).");
      return;
    }
  
    if (!/[0-9]{3}/(formData.cvv)) {
      alert("Por favor, ingrese un código CVV válido.");
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
            <label htmlFor="card-number">Número de Tarjeta:</label>
            <input type="number" id="card-number" name="cardNumber" placeholder="****************"  required />

            <label htmlFor="expiry-date">Fecha de Vencimiento:</label>
            <input type="text" id="expiry-date" name="date" placeholder="MM/YY" maxlength="5" required /> 

            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" placeholder="***" maxlength="3" pattern="[0-9]{3}" required />

            <label htmlFor="name">Titular de la Tarjeta:</label>
            <input type="text" id="name" name="name" placeholder="Nombre y primer Apellido" value={formData.name}  onChange={handleChange}  required />
            
            <div className="card-icons">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-stripe"></i>
                <i className="fab fa-cc-paypal"></i>
            </div>

            <button type="submit" >Pagar</button>
        </form>

        )}
      </div>
      </div>
      </div>
  
  );
};