"use client"
import { supabase } from "@/supabase/conexion";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navegador = useNavigate();

  function getEmail(event) {
    setEmail(event.target.value);
  }
  function getPassword(event) {
    setPassword(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
      alert("Por favor complete los campos");
      return;
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log("Login exitoso:", data);
      if (!data.user) {
        alert("Usuario o contraseña incorrectos");
        return;
      } else {
        navegador("/dashboard");
      }
    } catch (error) {
      console.error("Error al iniciar sesion:", error);
    }
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black w-full max-w-md p-8 max-h-[100vh]">
        <button onClick={() => props.setShowModal(false)}>
          <IoClose color="white" />
        </button>
        <div>
          <FaXTwitter size="30px" />
        </div>
        <div>
          <H1>
            Inicia sesiòn en <FaXTwitter size="20px" />
          </H1>
        </div>
        <div>
          <button className="flex items-center justify-center bg-white text-black rounded-[50px] px-[69px] py-[6px]">
            <FcGoogle size={25} /> Sign up with Google
          </button>
        </div>
        <p className="text-white">
          -------------------------- or --------------------------
        </p>
        <div>
          <input
            type="text"
            placeholder="Email"
            onChange={getEmail}
            className="w-full rounded border border-gray-700 bg-transparent px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            onChange={getPassword}
            className="w-full rounded border border-gray-700 bg-transparent px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
          />
        </div>
        <button
          className="mt-4 w-full rounded-full bg-gray-600 py-3 font-medium text-white hover:bg-gray-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default login;