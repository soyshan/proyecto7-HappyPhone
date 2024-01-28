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
    
      return expirationDate > currentDate && /^\d{2}\/\d{2}$/.test(expiryDate); 
    }


    const handleSubmit = (e) => {

      e.preventDefault();
     if (!/^[A-Z][a-z]+\s[A-Z][a-z]+$/.test(formData.name)) {
       alert('El nombre debe comenzar con mayúscula y añadir el apellido');
       return;
     }
     if (!/[0-9]{13}/.test(formData.cardNumber)) {
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
      <section class="section-send">
                  <h4> Formas de entrega</h4>
                  <p class="section-send-sub-tittle"> Seleccione una opción de envío</p>
                  <table class="table-bordered">
                    <tbody>
                      <tr>
                        <td class="delivery_option_radio">
                          <input class="delivery_option_radio" name="send" type="radio"/>
                        </td>

                        <td>
                          <strong>Correos Express</strong> Entrega a domicilio en 24/48 horas. Navidades 72 horas. El mas rápido
                        </td>
                        <td class="delivery_option_price">
                          3,90 € (IVA incluído)
                        </td>
                      </tr>
                      <tr>
                        <td class="delivery_option_radio">
                          <input class="delivery_option_radio" name="send" type="radio"/>
                        </td>
                        <td>
                          <strong>Correos Entrega en Oficina</strong> Recogida en su oficina de Correos en 24h/72h
                        </td>
                        <td class="delivery_option_price">
                          3,90 € (IVA incluído)
                        </td>
                      </tr>

                    </tbody>
                  </table>

                  <p class="section-send-sub-tittle">Dejar un mensaje</p>
                  <p>Si desea añadir un mensaje sobre su pedido, por favor escribalo en el campo de abajo.</p>
                  <textarea cols="120" rows="2" class="text-area-package"></textarea>

                  <p class="section-send-sub-tittle">Condiciones generales de venta</p>

                  <p class="checkbox">
                    <input type="checkbox" required />
                    <label>He leído y acepto las condiciones generales de venta.*</label>
                  </p>

             </section>
     <div className='divPasarelaPago'>
      <div className="payment-container">
        {isSubmitted ? (
          <div>
            <h2>¡Pago realizado!</h2>
            <p>Gracias por su compra.</p>

          </div>
        ) : (
          
          <form onSubmit={handleSubmit}>
                    
            <h2>Detalle de Pago</h2>
            <label htmlFor="card-number">Número de Tarjeta:</label>
            <input type="number" id="card-number" name="cardNumber" placeholder="****************"  required />

            <label htmlFor="expiry-date">Fecha de Vencimiento:</label>
            <input type="text" id="expiry-date" name="date" placeholder="MM/YY" maxlength="5" required /> 

            <label htmlFor="cvv">CVV:</label>
            <input type="number" id="cvv" name="cvv" placeholder="***" maxlength="3" required />

            <label htmlFor="name">Titular de la Tarjeta:</label>
            <input type="text" id="name" name="name" placeholder="Nombre y primer Apellido" value={formData.name}  onChange={handleChange}  required />
            
            <button type="submit" >Pagar</button>
        </form>

        )}
      </div>
      </div>
      </div>
  
  );
};