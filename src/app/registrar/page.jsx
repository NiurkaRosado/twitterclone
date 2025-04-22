"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import FormularioDeRegistro from "@/componentes/formularioDeRegistro";
import { Login } from "@/componentes/inicioDeSesion";
import { useUsuario } from "@/stores/usuario";

export default function registrar() {
  const [showModalRegistro, setShowModalRegistro] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const getUsuario = useUsuario((state) => state.getUsuario);

  useEffect(() => {
    console.log(getUsuario());
  }, []);
  return (
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
            <button
              onClick={() => setShowModalRegistro(true)}
              className="flex items-center justify-center bg-blue-400 text-white font-bold rounded-[50px] px-[95px] py-[6px]"
            >
              Create account
            </button>
            {showModalRegistro && (
              <FormularioDeRegistro
                setShowModalRegistro={setShowModalRegistro}
              />
            )}
            <p className="text-gray-600 text-[11px] top-[]">
              By signing up, you agree to the{" "}
              <a className="text-blue-500" href="">
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="text-blue-400"
                href="
            "
              >
                Privacy <br />
                Policy
              </a>
              , including{" "}
              <a className="text-blue-400" href="">
                Cookie Use
              </a>
              .
            </p>
          </div>
          <br />
          <br />
          <div className="space-y-3">
            <p className="font-bold text-white text-[16px]">
              Already have an account?
            </p>
            <button
              onClick={() => setShowModalLogin(true)}
              className="flex items-center justify-center border border-white font-bold text-blue-400 rounded-[50px] px-[125px] py-[6px]"
            >
              Sign in.{" "}
            </button>
            {showModalLogin && <Login setShowModalLogin={setShowModalLogin} />}
          </div>
        </div>
      </div>
    </main>
  );
}
