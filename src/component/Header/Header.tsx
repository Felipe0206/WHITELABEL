"use client"
import React from 'react';
import styles from './header.module.css'; // Importa los estilos CSS
import profileImage from './profile.jpg'; // Importa la imagen de perfil

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileAndWalletContainer}>
        <div className={styles.profileContainer}>
          <img src="/" alt="Profile" className={styles.profileImage} />
          <div className={styles.profileText}>
            <p className={styles.texnom}><samp className={styles.texBien}>¡Bienvenido,</samp>Andrés!</p>
            <p className={styles.connectStatus}>CONECTADO | Última conexión el 1 Feb 2024</p>
          </div>
        </div>

        <div className={styles.walletContainer}>
          <img src="/" alt="Wallet" className={styles.walletImage} />
          <div className={styles.walletContent}>
            <button className={styles.connectButton}>CONECTAR WALLET</button>
            <p className={styles.walletText}>Necesitas una billetera para retirar tu dinero? ¡Crea una ahora!</p>
          </div>
        </div>
      </div>

      <div className={styles.actionsContainer}>
        <button className={styles.referralButton}>SOLICITAR LINK DE REFERIDO</button>
        <button className={styles.logoutButton}>CERRAR SESIÓN</button>
      </div>
    </div>
  );
};

export default Header;
