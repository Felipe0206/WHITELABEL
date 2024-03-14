"use client"
import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from '../component/Login/LoginForm/LoginForm';
import RegisterForm from './RegisterForm/page';
import PasswordRecoveryForm from './PasswordRecoveryForm/page';
import Nacvar from '../component/Nacvar/Nacvar';

export default function Home() {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    try {
      const apiUrl = 'https://tu-api.com/login';
      const response = await axios.post(apiUrl, { username, password });
      
      // Verifica si la respuesta contiene el rol del usuario
      if (response.data.role) {
        // Determina a qué página redirigir según el rol del usuario
        switch (response.data.role) {
          case 'admin':
            // Redirige al componente de la página de administrador
            // Puedes usar el router de tu framework (por ejemplo, React Router) para hacer esto
            history.push('/admin');
            break;
          case 'user':
            // Redirige al componente de la página de usuario normal
            history.push('/user');
            break;
          case 'guest':
            // Redirige al componente de la página para usuarios invitados
            history.push('/guest');
            break;
          default:
            // En caso de un rol desconocido, redirige a una página de error o a la página predeterminada
            history.push('/');
        }
      }
    } catch (error) {
      console.error('Error iniciando sesión:', error.response.data);
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  const handleRegistration = async (userData: any) => {
    try {
      const apiUrl = 'https://tu-api.com/register';
      const response = await axios.post(apiUrl, userData);
      // Aquí puedes manejar la respuesta de la API
    } catch (error) {
      console.error('Error registrando usuario:', error.response.data);
      setError('Error al registrar usuario. Inténtalo de nuevo más tarde.');
    }
  };

  const handlePasswordRecovery = async (email: string) => {
    try {
      const apiUrl = 'https://tu-api.com/recover-password';
      const response = await axios.post(apiUrl, { email });
      // Aquí puedes manejar la respuesta de la API
    } catch (error) {
      console.error('Error recuperando contraseña:', error.response.data);
      setError('Error al recuperar contraseña. Verifica el correo electrónico proporcionado.');
    }
  };

  return (
       <div> 
        
      

      
    </div>
  );
}
