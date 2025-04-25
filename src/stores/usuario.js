import { create } from "zustand";
import { persist } from "zustand/middleware";

//necesitamos globamente saber que existe un usuario 
//nos ayuda a saber cuando hay un usuario activo y cuandoo no, lllevando siempre una ruta
export const useUsuario = create(
  persist(
    (set, get) => {
      return {
        usuario: null,

        getUsuario() {
          const { usuario } = get();
          return usuario;
        },
        guardarUsuario(usuario) {
          set({ usuario });
        },

        limpiarUsuario() {
          set({ usuario: null });
        },
      };
    },
    {
      name: "usuario",
    }
  )
);
