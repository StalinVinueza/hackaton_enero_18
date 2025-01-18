import React from 'react';

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirige al login.
  };

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Dashboard;
