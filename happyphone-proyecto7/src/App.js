import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactForm } from './pages/ContactForm';
import { SobreNosotros } from './pages/SobreNosotros';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation'
import { AboutHappyPhone } from './pages/AboutHappyPhone'
import { WorkWithUs } from './pages/WorkWithUs';
import { PasarelaPago } from './pages/PasarelaPago';
import { Terms } from './pages/Terms'
import { Footer }from './components/Footer/FooterComponent';
import MovilUnico from './components/MovilUnico';
import { Thanks } from './pages/Thanks';
import { MoreInformationPage } from './pages/MoreInformationPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movil/:id" element={<MovilUnico />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
          <Route path="contactform" element={<ContactForm />} />
          <Route path='abouthappyphone' element={<AboutHappyPhone />} />
          <Route path='workwithus' element={<WorkWithUs />} />
          <Route path='pasarelapago' element={<PasarelaPago />} />
          <Route path='terms' element={<Terms/>} />
          <Route path='Thanks' element={<Thanks/>} />
          <Route path='more-information' element={<MoreInformationPage/>} />
          
         


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

