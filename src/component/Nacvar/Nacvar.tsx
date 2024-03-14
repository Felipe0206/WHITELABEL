"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';

import ComponenteProyectos from '../../app/page/Usuario/Proyectos/page';
import ComponenteRetiros from '../../app/page/Usuario/Retiros/page';
import ComponentePerfil from '../../app/page/Usuario/Perfil/page';
import ComponenteCrearTiket from '../../app/page/Usuario/CrearTicket/page';

const Navbar: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<number | null>(1);

  const handleIconClick = (iconNumber: number) => {
    setSelectedIcon(iconNumber);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper}>
          <Image src="/ruta-del-logo.png" alt="Logo" width={80} height={80} />
        </div>

        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${selectedIcon === 1 ? styles.selected : ''}`}>
            <div className={styles.iconWrapper} onClick={() => handleIconClick(1)}>
              <Link href="/page/Usuario/Proyectos">
                <div>
                  <Image src="/SVG/Proyectos.svg" alt="Proyectos" width={30} height={30} />
                  <span className={styles.linkText}>Proyectos</span>
                </div>
              </Link>
            </div>
          </li>
          <li className={`${styles.navItem} ${selectedIcon === 2 ? styles.selected : ''}`}>
            <div className={styles.iconWrapper} onClick={() => handleIconClick(2)}>
              <Link href="/page/Usuario/Retiros">
                <div>
                  <Image src="/SVG/Whitelabel-javalabsJVLBs.svg" alt="Retiros" width={30} height={30} />
                  <span className={styles.linkText}>Retiros</span>
                </div>
              </Link>
            </div>
          </li>
          <li className={`${styles.navItem} ${selectedIcon === 3 ? styles.selected : ''}`}>
            <div className={styles.iconWrapper} onClick={() => handleIconClick(3)}>
              <Link href="/page/Usuario/Perfil">
                <div>
                  <Image src="/SVG/Usuario.svg" alt="Perfil" width={30} height={30} />
                  <span className={styles.linkText}>Perfil</span>
                </div>
              </Link>
            </div>
          </li>
          <li className={`${styles.navItem} ${selectedIcon === 4 ? styles.selected : ''}`}>
            <div className={styles.iconWrapper} onClick={() => handleIconClick(4)}>
              <Link href="/page/Usuario/CrearTicket">
                <div>
                  <Image src="/SVG/Tiques_Whitelabel-javalabsJVLBs.svg" alt="Crear Tiket" width={30} height={30} />
                  <span className={styles.linkText}>Crear Tiket</span>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </nav>

     
    </div>
  );
};

export default Navbar;
