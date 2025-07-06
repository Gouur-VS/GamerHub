import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(90deg, #1b263b, #415a77)' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20230216/ourmid/pngtree-blue-joystick-for-gaming-png-image_6603316.png"
            alt="GamerHub Logo"
            className="me-2"
            style={{ height: '30px', width: 'auto', background: 'transparent' }}
          />
          GamerHub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Noticias</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
export {};