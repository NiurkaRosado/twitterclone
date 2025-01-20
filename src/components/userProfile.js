import React, { useState, useEffect } from 'react';
import { auth, onAuthStateChanged } from './firebase';  // Asegúrate de importar correctamente

const UserProfile = () => {
  const [user, setUser] = useState(null);  // Para almacenar el usuario autenticado

  useEffect(() => {
    // Suscribirse a los cambios del estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);  // Si hay un usuario autenticado, lo guardamos en el estado
      } else {
        setUser(null);  // Si no hay usuario autenticado, lo establecemos en null
      }
    });

    // Limpiar la suscripción cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <p>Por favor, inicia sesión.</p>;  // Si no hay usuario autenticado, mostramos un mensaje
  }

  return (
    <div>
      <h3>Bienvenido, {user.displayName || 'Usuario'}!</h3>
      <p>Email: {user.email}</p>
      {user.photoURL && <img src={user.photoURL} alt="Foto de perfil" />}
    </div>
  );
};

export default UserProfile;
