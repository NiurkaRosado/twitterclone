import { useUsuario } from "@/stores/usuario";
import { useRouter } from "next/navigation";

export function BotonLogOut(){
   const usuarioStore = useUsuario();
     const router = useRouter();
   
     const logout = () => {
       usuarioStore.limpiarUsuario();
   
       router.push("/registrar");
     };
    return(
        
        <button
        className="mt-4 bg-white text-black font-bold py-3 px-4 rounded-full w-full"
        onClick={() => logout()}
      >
        Log Out
      </button> 
    )
}