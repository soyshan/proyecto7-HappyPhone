import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const ReCaptcha = ({ siteKey, callback }) => {
  const recaptchaRef = useRef(null);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

  // Define the component function to be called when reCAPTCHA loads
  const onRecaptchaLoad = () => {
    setIsRecaptchaLoaded(true);
  };

  useEffect(() => {
    // Assign the component function to the window callback
    window.onRecaptchaLoad = onRecaptchaLoad;

    // Load the reCAPTCHA script if not already available
    if (!window.grecaptcha) {
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      // If reCAPTCHA is already loaded, call the function directly
      onRecaptchaLoad();
    }

    // Clean up the global callback on component unmount
    return () => {
      window.onRecaptchaLoad = null;
    };
  }, []);

  useEffect(() => {
    if (isRecaptchaLoaded) {
      // Render reCAPTCHA when it's loaded
      window.grecaptcha.render(recaptchaRef.current, {
        sitekey: siteKey,
        callback: callback, // Callback function to handle the token
      });
    }
  }, [isRecaptchaLoaded]);

  return (
    <div>
      {isRecaptchaLoaded ? (
        <div ref={recaptchaRef}></div>
      ) : (
        <p>Loading reCAPTCHA...</p>
      )}
    </div>
  );
};

ReCaptcha.propTypes = {
  siteKey: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ReCaptcha;
