import React from 'react';
import styles from './DatosBasicos.module.css'; // Importa los estilos CSS
import TokenHolder from '../TokenHolder/TokenHolder';

const DatosBasicos: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.section1}>
          <h2 className={styles.title}>Datos básicos</h2>
          <p className={styles.description}>Es probable que ciertos detalles de tu información sean visibles para otros usuarios al utilizar los servicios de WhiteLabel</p>
        </div>
      <br /><br />
        <div className={styles.section2}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.label}>Imagen de perfil</td>
                <td className={styles.description}>Personaliza tu experiencia al agregar tu foto de perfil</td>
              </tr>
              <tr>
                <td className={styles.label}>Nombre del perfil</td>
                <td className={styles.description}>Quién tiene acceso a tu nombre</td>
              </tr>
              <tr>
                <td className={styles.label}>Correo</td>
                <td className={styles.description}>Gestiona las direcciones de correo electrónico asociadas a tu cuenta WhiteLabel</td>
              </tr>
              <tr>
                <td className={styles.label}>Teléfono</td>
                <td className={styles.description}>Este número de teléfono se ha añadido a tu cuenta WhiteLabel</td>
              </tr>
              <tr>
                <td className={styles.label}>Idiomas</td>
                <td className={styles.description}>El idioma que prefieres para tu cuenta WhiteLabel u otros idiomas que posiblemente necesites en la plataforma.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DatosBasicos;

