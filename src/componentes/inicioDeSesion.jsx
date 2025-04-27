import { supabase } from "@/supabase/conexion";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useUsuario } from "@/stores/usuario";
import Link from "next/link";
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usuarioStore = useUsuario();
  const navegador = useRouter();

   // Se detecta el cambio del imput para obtener el email 
  function getEmail(event) {
    setEmail(event.target.value);
  }

  // Se detecta el cambio del imput para obtener la contraseña 
  function getPassword(event) {
    setPassword(event.target.value);
  }

  //Es lo que enviamos a supabase para verificar si el usuari9o esta registrado
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
        usuarioStore.guardarUsuario(data.user);
        navegador.push("/");
      }
    } catch (error) {
      console.error("Error al iniciar sesion:", error);
    }
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black w-full max-w-md p-8 max-h-[100vh]">
        <button onClick={() => props.setShowModalLogin(false)}>
          <IoClose color="white" />
        </button>
        <div>
          <div className=" flex flex-col justify-center items-center mt-10 space-y-6 ">
            <FaXTwitter size="30px" />
          </div>
          <br />
          <div>
            <h1 className="text-2xl font-bold text-center">
              Inicia sesiòn
            </h1>
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Email"
              onChange={getEmail}
              className="w-full rounded border border-gray-700 bg-transparent px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={getPassword}
              className="w-full rounded border border-gray-700 bg-transparent px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 w-full rounded-full bg-gray-600 py-3 font-medium text-white hover:bg-gray-700"
          >
            Login
          </button>
          <br />
          <br />
          <p className="text-gray-600">Don't have an account? <Link href="/componentes/formularioDeRegistro" className="text-blue-500 font-bold">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};
