import { useState, useEffect } from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia el ancho según tus necesidades
    };

    checkScreenSize(); // Verifica el tamaño al cargar
    window.addEventListener('resize', checkScreenSize); // Escucha cambios de tamaño

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Limpia el listener
    };
  }, []);

  return isMobile;
};

export default useMobile;