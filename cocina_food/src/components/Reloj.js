import React, { useState, useEffect } from 'react';

function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Limpieza al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  return <h1>{hora}</h1>;
}

export default Reloj;
