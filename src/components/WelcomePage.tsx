import React from 'react';
import styles from './WelcomePage.module.css'; 

const WelcomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>¡Bienvenido a GamerHub!</h1>
      <p>Explora noticias, eventos y más sobre gaming.</p>
    </div>
  );
};

export default WelcomePage;