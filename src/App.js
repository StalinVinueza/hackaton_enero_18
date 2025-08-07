import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import Meals from './components/Meals';  
import Home from './components/Home';
import Navbar from './components/Navbar'; // Importa el componente Navbar
import Background from './components/Background';
import Footer from './components/Footer'; // Importa el componente Footer




function App() {
  return (
    <Router>
      {/* Barra de navegación */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Background><About /></Background>} />
        <Route path="/login" element={<Background><Login /></Background>} />
        <Route path="/meals" element={<Background><Meals /></Background>} />
      </Routes>
      {/* Footer al final de la página */}
      <Footer />
    </Router>
  );
}

export default App;
