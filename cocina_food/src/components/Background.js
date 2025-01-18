import React from 'react';
import './Background.css';  // Importa el archivo CSS

const Background = ({ children }) => {
  return (
    <div className="background">
      {children}
    </div>
  );
};

export default Background;
