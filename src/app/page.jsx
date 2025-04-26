"use client";
import Lateral from "@/componentes/lateral";
import { LateralDerecha } from "@/componentes/lateralDerecha";
import Tweet from "@/componentes/tweet";
import { useUsuario } from "@/stores/usuario";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useMobile from "@/hooks/useMobile";

const IndexPage = () => {
  const router = useRouter();
  const getUsuario = useUsuario(state => state.getUsuario)

  const [lateral, setLateral] = useState(false);

  const esCelu = useMobile();

  const cerrarLateral = ()=>{
    setLateral(!lateral);
  }
  useEffect(
    ()=>{
      if(esCelu){
        setLateral(false)
      }else{
        setLateral(true)
      }
    },[esCelu]
  )


  useEffect(() => {
    const usuario = getUsuario()
    if (usuario === null) {
      router.push("/registrar");
    }
  }, []);
  return (
    <div className="bg-black">
    <div className="container bg-black flex min-h-screen mx-auto justify-between">
      {
        lateral && <Lateral />
      }
      <Tweet cerrar={cerrarLateral} />

      <LateralDerecha />
    </div>
    </div>
    
  );
};

export default IndexPage;
