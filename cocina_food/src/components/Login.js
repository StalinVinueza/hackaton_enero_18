import React from 'react';
import './Login.css';  // Importa el archivo CSS

function Login() {
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true'); // Guarda el estado de inicio de sesión
    window.location.href = '/'; // Redirige al inicio o a la página que desees
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="image-container">
          <img src="./Images/login.png" alt="Logo" className="login-image" />
        </div>
        <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    </div>
  );
}

export default Login;
