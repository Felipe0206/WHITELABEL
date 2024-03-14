"use client"
// PasswordRecoveryForm.tsx
import React, { useState } from 'react';
import styles from './passwordRecoveryForm.module.css'; // Importa los estilos CSS

type PasswordRecoveryFormProps = {
  onRecoverPassword: (email: string) => void;
};

const PasswordRecoveryForm: React.FC<PasswordRecoveryFormProps> = ({ onRecoverPassword }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRecoverPassword(email); // Envía el correo electrónico para recuperar la contraseña
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-wrapper']}>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button className={styles.button} type="submit">Recover Password</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecoveryForm;

