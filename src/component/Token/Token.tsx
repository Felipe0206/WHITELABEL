"use client"
import React from 'react';
import styles from './Token.module.css'; // Importa los estilos CSS
import TokenHolder from '../TokenHolder/TokenHolder';

const Token: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <p className={styles.paragraph}>Mi Portafolio</p>
        <p className={styles.additionalParagraph}><samp></samp>Valor Total del portafolio:
          <samp className={styles.sample}>xxx.xxUSD</samp>
        </p>

      </div>

      <div>
        <TokenHolder/>
      </div>
    </div>
  );
};

export default Token;
