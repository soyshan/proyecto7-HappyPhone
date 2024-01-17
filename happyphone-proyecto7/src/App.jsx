// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ContactForm } from './pages/ContactForm';
import { SobreNosotros } from './pages/SobreNosotros';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation'
import { AboutHappyPhone } from './pages/AboutHappyPhone'
import { WorkWithUs } from './pages/WorkWithUs'


function App() {
  return (
    <div className="App">
      <Routes to='./' element= {<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sobre-nosotros" element={<SobreNosotros />} />
        <Route path="contactform" element={<ContactForm />} />
        <Route path='abouthappyphone' element={<AboutHappyPhone />} />
        <Route path='workwithus' element={<WorkWithUs />} />
      </Routes>
    </div>
  );
}

export default App;

