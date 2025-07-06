import React from 'react';
import { Link } from 'react-router-dom';
import Particles from '@tsparticles/react';
import './WelcomePage.css';

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 100 }, // Más partículas para un efecto denso
            color: { value: ['#00f5d4', '#f72585', '#ffd60a'] }, // Colores neón
            size: { value: 4, animation: { enable: true, speed: 20, sync: false } },
            move: { speed: 3, direction: 'none', random: true },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' }, // Repulsión al pasar el mouse
              onClick: { enable: true, mode: 'push' }, // Añadir partículas al clic
            },
          },
        }}
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
      />
      <div className="overlay"></div>
      <div className="content text-center">
        <h1 className="display-2 fw-bold text-neon animate-pulse">¡Bienvenido a GamerHub!</h1>
        <p className="lead mb-4 text-light animate-fade">Las noticias más épicas del mundo gamer - Actualizado al 5 de julio de 2025</p>
        <Link to="/blog" className="btn btn-primary btn-lg shadow animate-bounce btn-glow">
          Explora las Noticias
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
export {};