// firebase.js (o config.js)
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

// Tu configuración de Firebase (cópiala desde la consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyD1Vb6PUVGRBHGCPBRwhHN7nGTjO7OGK8w",
  authDomain: "twitter-49524.firebaseapp.com",
  projectId: "twitter-49524",
  storageBucket: "twitter-49524.firebasestorage.app",
  messagingSenderId: "477269807463",
  appId: "1:477269807463:web:347b29166c01255d2f1fc2",
  measurementId: "G-C5L3J9SD57"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

// Obtén la instancia de autenticación
const auth = getAuth(app);

export { auth, onAuthStateChanged, googleProvider, firebaseConfig };
