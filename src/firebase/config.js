import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Vb6PUVGRBHGCPBRwhHN7nGTjO7OGK8w",
  authDomain: "twitter-49524.firebaseapp.com",
  projectId: "twitter-49524",
  storageBucket: "twitter-49524.firebasestorage.app",
  messagingSenderId: "477269807463",
  appId: "1:477269807463:web:347b29166c01255d2f1fc2",
  measurementId: "G-C5L3J9SD57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)