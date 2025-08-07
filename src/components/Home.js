import React from 'react';
import './home.css';  // Estilos personalizados para la página de inicio


function Inicio() {
  return (
    <div className="inicio-container">
      {/* Título de la página */}
      <h1 className="inicio-title">Bienvenido a HAPPY EAT</h1>

      {/* Texto descriptivo de la página */}
      <p className="inicio-text">
        ¡Descubre las mejores recetas, consejos de cocina y técnicas de preparación para convertirte en un chef experto! 
        Nuestro sitio es el lugar ideal para explorar nuevas ideas culinarias y compartir tu pasión por la comida.
      </p>

      {/* Imagen principal de inicio */}
      <div className="inicio-banner">
        <img 
          src="./Images/inicio.svg" 
          alt="Deliciosos platillos" 
          className="inicio-banner-image" 
        />
      </div>

      {/* Texto adicional y contenido */}
      <div className="inicio-content">
        <h2 className="inicio-subtitle">¿Qué encontrarás aquí?</h2>
        <ul className="inicio-list">
          <li>Recetas fáciles y rápidas para el día a día.</li>
          <li>Consejos para elegir los mejores ingredientes.</li>
          <li>Técnicas de cocina explicadas paso a paso.</li>
          <li>Inspiración para tus comidas familiares y eventos especiales.</li>
        </ul>
        
      </div>
    </div>
  );
}

export default Inicio;
