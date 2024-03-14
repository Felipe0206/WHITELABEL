"use client"
import React from 'react';
import styles from './navbar.module.css'; // Importa los estilos CSS
import Header from '../../../../component/Header/Header';
import DatosUsuario from '../../../../component/DatosUsuario/DatosUsuario';
import TokensComprados from '../../../../component/TokensComprados/TokensComprados';
import Notificaciones from '../../../../component/Notificaciones/Notificaciones';



const CrearTicket: React.FC = () => {
  

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
        <div className={styles.column}>
        <Notificaciones/>
        
        </div>
      </div>
    </div>
  );
};

export default CrearTicket;