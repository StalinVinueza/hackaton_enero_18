import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Archivo CSS específico para la barra de navegación

function Navbar() {
  // Verifica si el usuario está logueado
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');  // Elimina el estado de inicio de sesión
    window.location.href = '/'; // Redirige al inicio o página de login
  };

  return (
    <nav className="navbar">
      {/* Imagen a la izquierda */}
      <div className="nav-logo">
        <img src="./Images/logo.svg" alt="Logo" />
      </div>
      {/* Enlaces a la derecha */}
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        {/* Muestra solo el enlace de Login si el usuario no está logueado */}
        {!isLoggedIn && <Link to="/login">Login</Link>}
        
        {/* Muestra los demás enlaces solo si el usuario está logueado */}
        {isLoggedIn && (
          <>
            <Link to="/about">Acerca</Link>
            <Link to="/meals">Comidas</Link>
            {/* Agrega el botón de logout */}
            <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


