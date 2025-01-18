import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Saludo from './components/Saludo';
import About from './components/About';
import Contador from './components/Contador';
import Reloj from './components/Reloj';
import Login from './components/Login';
import Meals from './components/Meals';  
import Home from './components/Home';
import Navbar from './components/Navbar'; // Importa el componente Navbar
import Background from './components/Background';
import Footer from './components/Footer'; // Importa el componente Footer


function SaludoPage() {
  return (
    <div>
      <h1>Página de Saludo</h1>
      <Saludo nombre="Stalin" />
    </div>
  );
}

function ContadorPage() {
  return (
    <div>
      <h1>Página del Contador</h1>
      <Contador />
    </div>
  );
}

function RelojPage() {
  return (
    <div>
      <h1>Página del Reloj</h1>
      <Reloj />
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Barra de navegación */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Sin Background aquí */}
        <Route path="/about" element={<Background><About /></Background>} />
        <Route path="/saludo" element={<Background><SaludoPage /></Background>} />
        <Route path="/contador" element={<Background><ContadorPage /></Background>} />
        <Route path="/reloj" element={<Background><RelojPage /></Background>} />
        <Route path="/login" element={<Background><Login /></Background>} />
        <Route path="/meals" element={<Background><Meals /></Background>} />
      </Routes>
      {/* Footer al final de la página */}
      <Footer />
    </Router>
  );
}

export default App;
