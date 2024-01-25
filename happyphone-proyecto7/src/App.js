import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactForm } from './pages/ContactForm';
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
import { ProductsList } from './pages/ProductsList';
import { Carrito } from './pages/Carrito';
import { TechnicalService } from './pages/TechnicalService';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movil/:id" element={<MovilUnico />} />
          <Route path="contactform" element={<ContactForm />} />
          <Route path='abouthappyphone' element={<AboutHappyPhone />} />
          <Route path='workwithus' element={<WorkWithUs />} />
          <Route path='pasarelapago' element={<PasarelaPago />} />
          <Route path='terms' element={<Terms/>} />
          <Route path='thanks' element={<Thanks/>} />
          <Route path='more-information' element={<MoreInformationPage/>} />
          <Route path='products-list' element={ <ProductsList/> } />
          <Route path='carrito' element={ <Carrito /> } />
          <Route path='technicalservice' element={ <TechnicalService /> } />
          <Route path='login' element={ <Login /> } />
          <Route path='register' element={ <Register /> } />
          
        </Routes>
        
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;