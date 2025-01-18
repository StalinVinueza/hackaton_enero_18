import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Archivo CSS específico para la barra de navegación

function Navbar() {
  return (
    <nav className="navbar">
      {/* Imagen a la izquierda */}
      <div className="nav-logo">
        <img src="./Images/logo.svg" alt="Logo" />
      </div>
      {/* Enlaces a la derecha */}
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca</Link>
        <Link to="/saludo">Saludo</Link>
        <Link to="/contador">Contador</Link>
        <Link to="/reloj">Reloj</Link>
        <Link to="/login">Login</Link>
        <Link to="/meals">Comidas</Link>
      </div>
    </nav>
  );
}

export default Navbar;
