import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactForm } from './pages/ContactForm';
import { SobreNosotros } from './pages/SobreNosotros';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation';
import { AboutHappyPhone } from './pages/AboutHappyPhone';
import { WorkWithUs } from './pages/WorkWithUs';
import ReCaptcha from './components/Recaptcha';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
          <Route path="contactform" element={<ContactForm />} />
          <Route path='abouthappyphone' element={<AboutHappyPhone />} />
          <Route path='workwithus' element={<WorkWithUs />} />
          </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
