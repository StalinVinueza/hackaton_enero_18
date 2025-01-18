import React from 'react';

function Login() {
  const handleLogin = () => {
    localStorage.setItem('token', 'mi_token_secreto');
    window.location.href = '/dashboard'; // Redirige al dashboard.
  };

  return (
    <div>
      <h1>Página de Login</h1>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}

export default Login;
