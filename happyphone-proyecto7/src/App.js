import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactForm } from './pages/ContactForm';
import { SobreNosotros } from './pages/SobreNosotros';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation'
import { AboutHappyPhone } from './pages/AboutHappyPhone'
import { WorkWithUs } from './pages/WorkWithUs'
import { Terms } from './pages/Terms'
import { MoreInformationPage } from './pages/MoreInformationPage'
import { Footer }from './components/Footer/FooterComponent';
import MovilUnico from './components/MovilUnico';
import { Thanks } from './pages/Thanks';

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
          <Route path='terms' element={<Terms/>} />
          <Route path='more-information' element={<MoreInformationPage/>} />
          <Route path='thanks' element={<Thanks/>} />
         


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

