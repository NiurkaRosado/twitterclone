"use client";

import { useUsuario } from "@/stores/usuario";
import { crearPost, obtenerPosts } from "@/supabase/conexion";
import { useEffect, useState } from "react";
import { CiCircleList, CiImageOn } from "react-icons/ci";
import { HiOutlineFaceSmile, HiOutlineGif } from "react-icons/hi2";
import { IoLocationOutline, IoMenu } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { VscCircleSlash } from "react-icons/vsc";
import useMobile from "@/hooks/useMobile";
import { FaXTwitter } from "react-icons/fa6";

export default function Tweet({ cerrar }) {
  const usuarioStore = useUsuario();
  const [notas, setNotas] = useState([]);
  const esCelu = useMobile();
  const [notaNueva, setNotaNueva] = useState({
    post: "",
  });

  const agregarNota = async () => {
    try {
      const [data] = await crearPost({
        ...notaNueva,
        name: usuarioStore.usuario.email,
        idUser: usuarioStore.usuario.id,
      });

      setNotas([...notas, data]);
      setNotaNueva({ post: "" });
    } catch (error) {}
  };
  //Nos ayuda a traer la informacion oo los post agreagados anteriormente a la base de datos y siempre teniendo en cneta los nuevos
  const obtenerNotas = async (id) => {
    const { data } = await obtenerPosts(id);

    setNotas(data);
  };

  useEffect(() => {
    if (usuarioStore.usuario) {
      console.log("first");
      obtenerNotas(usuarioStore.usuario.id);
    }
  }, [usuarioStore.usuario]);
  return (
    <div className="flex-1 border border-gray-800 max-w-xl">
      {/* Tabs */}
      <botonPopOver />
      <div className="flex flex-col justify-center border-b border-gray-800">
        {esCelu ? (
          <div className="flex flex-row m-1 justify-around">
            <div onClick={cerrar}>
              <IoMenu size="40px" />
            </div>
            <div>
              <FaXTwitter color="white" size="35px" />
            </div>
          </div>
        ) : null}
        <div>
          <button className="flex-1 py-4 font-bold border-b-1 border-[#1d9bf0] text-white">
            For you
          </button>
        </div>
      </div>

      {/* Compose Tweet */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex">
          {usuarioStore.usuario && (
            <div className="flex-shrink-0 h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center">
              <span>{usuarioStore.usuario.email.charAt(0).toUpperCase()}</span>
            </div>
          )}
          <div className="ml-3 flex-1">
            <textarea
              placeholder="What's happening?"
              className="w-full bg-transparent text-xl border-b border-gray-500
              } outline-none resize-none"
              rows={2}
              onChange={(e) =>
                setNotaNueva({ ...notaNueva, post: e.target.value })
              }
              value={notaNueva.post}
            />
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-around space-x-3">
                <CiImageOn
                  size="22px"
                  color="#1d9bf0"
                  className="border rounded-full border-transparent hover:bg-indigo-500/30"
                />
                <HiOutlineGif
                  size="22px"
                  color="#1d9bf0"
                  className="border rounded-full border-transparent hover:bg-indigo-500/30"
                />
                <VscCircleSlash
                  size="22px"
                  color="#1d9bf0"
                  className="border rounded-full border-transparent hover:bg-indigo-500/30"
                />
                <CiCircleList
                  size="22px"
                  color="#1d9bf0"
                  className="border rounded-full border-transparent hover:bg-indigo-500/30"
                />
                <HiOutlineFaceSmile
                  size="22px"
                  color="#1d9bf0"
                  className="border rounded-full border-transparent hover:bg-indigo-500/30"
                />
                <LuCalendarClock
                  size="22px"
                  color="#1d9bf0"
                  className="border rounded-full border-transparent hover:bg-indigo-500/30"
                />
                <IoLocationOutline
                  size="22px"
                  color="#1d9bf0"
                  className="opacity-55 border rounded-full border-transparent hover:bg-indigo-500/30"
                />
              </div>

              <button
                className="bg-slate-400 text-black font-bold py-1.5 px-4 rounded-full  items-end"
                onClick={agregarNota}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Starlink Ad */}
      {notas.map((nota, index) => {
        return (
          <div key={index} className="p-4 border-b border-gray-800">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <div className="flex items-center">
                  {usuarioStore.usuario !== null && (
                    <>
                      <span className="font-bold">
                        {usuarioStore.usuario.email.slice(0, 4).toUpperCase()}
                      </span>

                      <span className="text-gray-500 ml-1 text-sm">
                        @{usuarioStore.usuario.email}
                      </span>
                      <span className="text-gray-500 ml-auto text-sm">
                        {usuarioStore.usuario.email.charAt(0).toUpperCase()}
                      </span>
                    </>
                  )}
                </div>
                <p className="mt-1">{nota.post}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
