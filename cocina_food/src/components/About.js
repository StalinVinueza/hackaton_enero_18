import React from 'react';
import './About.css'; 

function About() {
  return (

    <div className="about-container">
      <h1>Acerca de Nosotros</h1>
      <div className="about-content">
        <p>
          Somos una web comprometida con ofrecer la mejor experiencia para nuestros usuarios.
          Nuestro objetivo es dar a conocer recetas y para facilitar la vida diaria y mejoren el bienestar de todos.
        </p>
        <p>
          Creemos en la innovación, la calidad y que todos podemos ser buenos cocineros con los ingredientes a nuestro alcance.
            Cada miembro de nuestro equipo trabajara para
          garantizar que tus recetas sean divertidas de preparar.
        </p>
        <p>
          Gracias por confiar en nosotros. ¡Vamos a cocinar!
        </p>
      </div>
    </div>
  );
}

export default About;
