import React from "react";
//import { useNavigate } from "react-router-dom";
//import ReCaptcha from "./Recaptcha"; // Import the ReCaptcha component

export function Register () {
 // const navigate = useNavigate();

  // Define the callback function for ReCaptcha
 // const handleRecaptchaToken = (token) => {
    // Handle the token here
  //   console.log("ReCaptcha token:", token);
  // };

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your registration logic goes here

    // Simulating a successful registration
    const registrationSuccessful = true;

    if (registrationSuccessful) {
      // Display an alert when registration is successful
      alert("You have successfully registered!");
    }
  };

  //const handleSignInClick = () => {
    // Redirect to the CLogin component when "Iniciar Sesión" is clicked
   // navigate("./clogin");


  return (
    <div className="container-form register">
      <div className="information">
        <div className="info-childs">
          <h2>Bienvenido</h2>
          <p>
            Para unirte a nuestros servicios por favor
            <strong>Inicia Sesión </strong> con tus datos
          </p>
          <input
            type="button"
            value="Iniciar Sesión"
            id="Sign-IN"
       //     onClick={handleSignInClick}
          />
        </div>
      </div>
      <div className="form-information">
        <div className="form-information-childs">
          <h2>Crear una Cuenta</h2>
          <div className="icons">
            <img src="../img/google.svg" alt="Google" className="btnLogin" />
            <img
              src="../img/linkedin.svg"
              alt="Linkedin"
              className="btnLogin"
            />
            <img src="../img/github.svg" alt="Github" className="btnLogin" />
          </div>
          <p>o usa tu mail para registrarte</p>
          <form onSubmit={handleSubmit} className="form">
            <label>
              <i className="bx bx-user"></i>
              <input
                type="text"
                placeholder="Nombre Completo"
                minLength="8"
                maxLength="20"
                required
              />
            </label>
            <label>
              <i className="bx bx-envelope"></i>
              <input
                type="email"
                id="email"
                placeholder="Correo Electronico"
                required
              />
            </label>
            <label>
              <i className="bx bx-lock-alt"></i>
              <input
                type="password"
                id="password"
                placeholder="Password"
                minLength="8"
                required
              />
            </label>
            {/* <div className="bx bx">
              {/* ReCaptcha component 
              <ReCaptcha
                siteKey="6Lc-UlQpAAAAAP4ARjFNQIWVOitb_1rDnTBUsbbG"
                callback={handleRecaptchaToken}
              />
            </div> */}
            <input type="submit" value="Registrarse" />
          </form>
        </div>
      </div>
    </div>
  );
};


