"use client"
import React, { useState } from 'react';
import styles from './loginForm.module.css'; // Importa los estilos CSS
import Link from 'next/link';

type LoginFormProps = {
  onLogin: (username: string, password: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-wrapper']}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          <Link href="/RegisterForm">
            Register
          </Link>
        </p>
        <p>
          <Link href="/PasswordRecoveryForm">
            Forgot Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

