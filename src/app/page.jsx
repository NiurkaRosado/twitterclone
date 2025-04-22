"use client";
import Lateral from "@/componentes/lateral";
import { LateralDerecha } from "@/componentes/lateralDerecha";
import Tweet from "@/componentes/tweet";
import { useUsuario } from "@/stores/usuario";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const IndexPage = () => {
  const router = useRouter();
  const getUsuario = useUsuario(state => state.getUsuario)


  useEffect(() => {
    const usuario = getUsuario()
    if (usuario === null) {
      router.push("/registrar");
    }
  }, []);
  return (
    <div className="bg-black">
    <div className="container bg-black flex min-h-screen mx-auto justify-between">
      <Lateral/>

      <Tweet />

      <LateralDerecha />
    </div>
    </div>
    
  );
};

export default IndexPage;
