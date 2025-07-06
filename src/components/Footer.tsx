import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">© 2025 GamerHub. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="https://x.com/VSalvagiotto" className="text-white me-3 text-decoration-none">Contacto</a>
            <a href="https://www.reddit.com/r/Argaming/" className="text-white me-3 text-decoration-none">Foro</a>
            <a href="https://www.espn.com.ar/gaming/" className="text-white text-decoration-none">Eventos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export {};