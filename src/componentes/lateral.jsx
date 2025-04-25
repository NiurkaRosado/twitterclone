"use client";

import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { TbBrandSocketIo } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { useUsuario } from "@/stores/usuario";
import { useRouter } from "next/navigation";

export default function Lateral() {
  const usuarioStore = useUsuario();
  const router = useRouter();

  const logout = () => {
    usuarioStore.limpiarUsuario();

    router.push("/registrar");
  };
  return (
    <div className="w-64 border-gray-800 p-4 md:flex flex-col hidden">
      <div className="p-2 mb-4">
        <FaXTwitter color="white" size="35px" />
      </div>

      <nav className="space-y-2">
        <button className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800/50 w-full text-xl font-bold">
          <GoHomeFill className="h-7 w-7" />
          <span>Home</span>
        </button>

        <button className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800/50 w-full text-xl font-bold">
          <IoPeopleOutline className="h-7 w-7" />
          <span>Explore</span>
        </button>

        <button className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800/50 w-full text-xl font-bold">
          <IoNotificationsOutline className="h-7 w-7" />
          <span>Notifications</span>
        </button>

        <button className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800/50 w-full text-xl font-bold">
          <FiMail className="h-7 w-7" />
          <span>Messages</span>
        </button>

        <button className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800/50 w-full text-xl font-bold">
          <FiUser className="h-7 w-7" />
          <span>Profile</span>
        </button>

        <button className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800/50 w-full text-xl font-bold">
          <CiCircleMore className="h-7 w-7" />
          <span>More</span>
        </button>
      </nav>

      <button
        className="mt-4 bg-white text-black font-bold py-3 px-4 rounded-full w-full"
        onClick={() => logout()}
      >
        Log Out
      </button>
      <br />
      <br />
      <br />

      {usuarioStore.usuario && (
        <div className="mt-auto flex items-center p-3 rounded-full hover:bg-gray-700 cursor-pointer">
          <div className="flex-shrink-0 h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center">
            <span className="text-xl">
              {usuarioStore.usuario?.email.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="ml-3 flex-1 truncate">
            <p className="font-bold">
              {usuarioStore.usuario?.email || "No registrado"}
            </p>
            <p className="text-gray-500 text-sm">
              @{usuarioStore.usuario?.email || "No registrado"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
