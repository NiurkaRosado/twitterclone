import { supabase } from "@/supabase/conexion";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useRouter } from 'next/navigation'
import { useUsuario } from "@/stores/usuario";

export default function FormularioDeRegistro(props) {
  const router = useRouter()
  const usuarioStore = useUsuario()
  const [usuario, setUsuario] = useState({
      correo: '',
      password: ''
  })

  const manejarElCambioDelInput = (llave, valor) => {
    setUsuario({...usuario, [llave]: valor})
  }

  const crearUsuario = async () =>{
    if (usuario.correo == '' || usuario.password == ''){
      alert('Querido Usuario, el usuario y contraseña estan vacios.')
      return
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email: usuario.correo,
        password: usuario.password,
      })
  
      if(error){
        throw new Error ('Error al crear usuarioo.')
      }
     
      
      usuarioStore.guardarUsuario(data.user)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black w-full max-w-md p-8 max-h-[100vh]">
        <button onClick={() => props.setShowModalRegistro(false)}>
          <IoClose color="white" />
        </button>
        <div>
        <div className="flex flex-col justify-center items-center">
              <FaXTwitter size="30px"/>
            </div>
            <div className="mt-10 space-y-6 items-center">
              <h1 className="text-2xl font-bold text-center">Create your account</h1>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => manejarElCambioDelInput('correo', e.target.value)}
                    className="w-full rounded border border-blue-500 bg-transparent px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                  />
                  <div className="absolute right-4 top-3 text-sm text-gray-400">
                    0 / 50
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => manejarElCambioDelInput('password', e.target.value)}
                    className="w-full rounded border border-gray-700 bg-transparent px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div className="flex justify-end">
                  <p href="#" className="text-blue-500 hover:underline">
                    Usar correo
                  </p>
                </div>
                <br />
                <button onClick={crearUsuario} className="mt-4 w-full rounded-full bg-gray-600 py-3 font-medium text-white hover:bg-gray-700">
                  Create your account
                </button>
              </div>
            </div>
        </div>
            
          </div>
        </div>
  );
}
