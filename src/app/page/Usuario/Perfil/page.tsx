"use client"
import React from 'react';
import styles from './navbar.module.css'; // Importa los estilos CSS
import Header from '../../../../component/Header/Header';
import DatosUsuario from '../../../../component/DatosUsuario/DatosUsuario';
import TokensComprados from '../../../../component/DatosBasicos/DatosBasicos';



const Retiros: React.FC = () => {
  

  return (
    <div className={styles.container}>
      <div className={styles.firstRow}>
      <Header/>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.column}>
        <DatosUsuario/>
        </div>
        <div className={styles.column}>
        <TokensComprados/>
        
        </div>
      </div>
    </div>
  );
};

export default Retiros;