"use client"
import React from 'react';
import styles from './DatosUsuario.module.css'; // Importa los estilos CSS
import TokenHolder from '../TokenHolder/TokenHolder';

const Token: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <p className={styles.paragraph}>Información Persona</p>
        

      </div>
      <br />
      <br />

      <div>
        <h2 className={styles.userInfoTitle}>Información Personal</h2>

        <p className={styles.userInfoText}>Protege tu información 
            valiosa, como los 
            datos de contacto, y 
            mantén un control 
            total sobre tu 
            privacidad. Además, 
            accede fácilmente a 
            un resumen detallado 
            de tus perfile</p>
        
      </div>
    </div>
  );
};

export default Token;
