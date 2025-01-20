"use client"
import { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth, googleProvider } from "@/firebase/config";


export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}

export default function registrar(){


    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [user, setUser] = useState(null);



    useEffect(() => {
      // Recuperar usuario después de la redirección
      getRedirectResult(auth)
        .then((result) => {
          if (result) {
            setUser(result.user);
            console.log("Usuario autenticado:", result.user);
          }
        })
        .catch((error) => {
          console.error("Error al manejar la redirección:", error.message);
        });
  
      // Escuchar el estado de autenticación en tiempo real
      const unsubscribe = auth.onAuthStateChanged((currentUser) => {
        setUser(currentUser);
      });
  
      return () => unsubscribe();
    }, []);

    const handleGoogleLogin = async () => {
      try {
        const result = await signInWithRedirect(auth, googleProvider);
        console.log("Usuario logueado:", result.user);
      } catch (error) {
        console.error("Error al iniciar sesión con Google", error);
      }
    };

    
    const registrarGoogle = async () => {
      if (isPopupOpen) return;
  
      setIsPopupOpen(true);
      const provider = new GoogleAuthProvider();
      
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log('heloooo',result);
          const credential = GoogleAuthProvider.credentialFromResult(result);
          alert('success');
          router.push('/');
          setUser(true);
          const token = credential.accessToken;
          const user = result.user;
        })
        .catch((error) => {
          if (error.code === 'auth/cancelled-popup-request') {
            console.log('Popup request was cancelled');
          } else {
            console.error('Error during sign-in:', error);
          }
        })
        .finally(() => {
          setIsPopupOpen(false);
        });


    };

    

// Función de inicio de sesión
const signIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error);
    });
    };

    return(
        <main>
        <div className="bg-black flex items-center justify-center min-h-screen top-[200px]">
          <div className="w-[50%] flex justify-center">
            <FaXTwitter color="white" size={300} />
          </div>
          <div className="w-[]flex items-center justify-start flex-col">
            <h1 className="text-[4rem] font-bold  font-style">Happening now</h1>
            <br />
            <h3 className="text-[2rem] font-bold">Join today.</h3>
            <br />
            <div className="space-y-2">
            <button onClick={() => registrarGoogle()} className="flex items-center justify-center bg-white text-black rounded-[50px] px-[69px] py-[6px]"><FcGoogle size={25} /> Sign up with Google</button>
            <button className="flex items-center justify-center bg-white text-black rounded-[50px] px-[75px] py-[6px]"> <FaApple size={25} /> Sign up with Apple</button>
            <p className="text-white">-------------------------- or --------------------------</p>
            <button className="flex items-center justify-center bg-blue-400 text-white font-bold rounded-[50px] px-[95px] py-[6px]">Create account</button>
            <p className="text-gray-600 text-[11px] top-[]">By signing up, you agree to the <a className="text-blue-500" href="">Terms of Service</a> and <a className="text-blue-400" href="
            ">Privacy <br />
             Policy</a>, including <a className="text-blue-400" href="">Cookie Use</a>.</p>
            </div>
            <br />
            <br />
            <div className="space-y-3">
            <p className="font-bold text-white text-[16px]">Already have an account?</p>
            <button onClick={() => handleGoogleLogin()} className="flex items-center justify-center border border-white font-bold text-blue-400 rounded-[50px] px-[125px] py-[6px]">Sign in. </button>
            </div>
          </div>
        </div>
  
      </main>
    )
}