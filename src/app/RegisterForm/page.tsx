"use client"

// RegisterForm.tsx
import React, { useState } from 'react';
import styles from './registerForm.module.css'; // Importa los estilos CSS

type RegisterFormProps = {
  onRegister: (username: string, email: string, password: string) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(username, email, password); // Envía los datos al manejar el registro
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-wrapper']}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input className={styles.input} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className={styles.button} type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
