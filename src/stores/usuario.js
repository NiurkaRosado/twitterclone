import { create } from "zustand";
import { persist } from "zustand/middleware";

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
