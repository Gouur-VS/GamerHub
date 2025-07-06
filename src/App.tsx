import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter basename={process.env.NODE_ENV === 'production' ? '/gamerhub' : '/'}>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<div>Contacto</div>} />
        <Route path="/foro" element={<div>Foro</div>} />
        <Route path="/eventos" element={<div>Eventos</div>} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;