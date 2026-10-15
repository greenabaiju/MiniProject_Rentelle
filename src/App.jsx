
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DressCollection from './pages/DressCollection';
import About from './pages/About';
import AddCustomer from './pages/AddCustomer';
import AddDress from './pages/AddDress';
import Contact from './pages/Contact';
import DressDetails from './pages/DressDetails';
import Customers from './pages/Customers';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dresses" element={<DressCollection />} />
        <Route path="/about" element={<About />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/adddress" element={<AddDress />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dressdetails/:id" element={<DressDetails />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
