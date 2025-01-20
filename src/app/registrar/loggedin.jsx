// App.js
import React from 'react';
import UserProfile from './UserProfile';  // Asegúrate de que la ruta de importación sea correcta

function App() {
  return (
    <div>
      <h1>Mi Aplicación de Firebase</h1>
      <UserProfile />  {/* Mostrar el perfil del usuario */}
    </div>
  );
}

export default App;
