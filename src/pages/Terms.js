// Terms.js
import React from 'react';
import '../css/terms.css'


export const Terms = () => {
  return (
  

    <div className="terms">
        <article className="terms-text">
          <h2 className="h2-terms" >Términos y Condiciones 2024</h2>
          <div className="container_terms">
            <div className="column">
              <h4>1. Introducción</h4>
              <p className='pTerms'>
                Bienvenido a HappyPhone, un eCommerce de venta de teléfonos móviles y accesorios. Al realizar una compra en nuestro sitio web, aceptas los siguientes términos y condiciones. Por favor, léelos detenidamente antes de efectuar tu compra.
              </p>
              <h4>2. Información de Contacto</h4>
                    <p>HappyPhone S.L.
                        Dirección: Calle Fernando Poo 25, 28045, Madrid.
                        Correo: contacto@happyphone.es
                        Teléfono: 918 000 123</p>
                    <h4>3. Precios y pagos</h4>
                    <p className='pTerms'>Los precios de nuestros productos están en Euros (€) e incluyen todos los impuestos
                        aplicables.
                        Aceptamos pagos a través de PayPal, y Tarjeta de Crédito .
                        Tu pago se procesará de manera segura a través de nuestra pasarela de pagos.</p>
            </div>

            <div className="column">
            <h4>4. Envíos</h4>
                    <p className='pTerms'>Realizamos envíos a toda la UE utilizando servicios de mensajería confiables.
                        Los plazos de entrega varían según la ubicación y la disponibilidad del producto.
                        Los costos de envío se detallan durante el proceso de compra.
                        No somos responsables de retrasos causados por terceros.</p>
                    <h4>5. Devoluciones y garantías</h4>
                    <p className='pTerms'>Aceptamos devoluciones dentro de los 10 días posteriores a la recepción del producto, siempre
                        y cuando esté en su estado original.
                        Los productos defectuosos se rigen por nuestra política de garantía. Contáctanos para
                        obtener más detalles.</p>
                    <h4>6. Privacidad</h4>
                    <p className='pTerms'>Respetamos tu privacidad. Consulta nuestra Política de Privacidad para obtener más
                        información sobre cómo manejamos tus datos.</p>
            </div>

            <div className="column">
            <h4>7. Propiedad Intelectual</h4>
                    <p className='pTerms'>Todos los derechos de propiedad intelectual relacionados con los productos y el sitio web son
                        propiedad de HappyPhone.</p>
                    <h4>8. Ley aplicable</h4>
                    <p className='pTerms'>Estos términos y condiciones se rigen por las leyes de Madrid, España. Cualquier disputa se
                        resolverá en el tribunal competente.</p>
                    <h4>9. Cambios en los términos y condiciones </h4>
                    <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento.
                        Los cambios entrarán en vigencia a partir de su publicación en el sitio web.</p>
                    <h4>10. Contacto</h4>
                    <p className='pTerms'>Si tienes alguna pregunta o inquietud con respecto a nuestros términos y condiciones, no
                        dudes en contactarnos a través de los datos de contacto proporcionados anteriormente.</p>
            </div>

          </div>
        </article>
    
    </div>
    
  );
};


