import { FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { X } from "@/icons/X";

export function LateralDerecha() {
    return (
        <div className="container items-start w-80 p-1 hidden lg:block">
        {/* Search */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-black text-white w-full pl-10 pr-4 py-2 rounded-full border border-gray-500 focus:border-[#1d9bf0] focus:outline-none"
          />
        </div>

        {/* Premium */}
        <div className="bg-black flex flex-col items-start rounded-xl border border-gray-500 p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Subscribe to Premium</h2>
          <p className="text-sm mb-3">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
          <button className="bg-[#1d9bf0] text-white font-bold py-2 rounded-full w-full">Subscribe</button>
        </div>

        {/* What's happening */}
        <div className="bg-black border border-gray-500 rounded-xl mb-4">
          <h2 className="text-xl font-bold p-4">What's happening</h2>

          <div className="p-4 hover:bg-gray-800/50 cursor-pointer border-t border-gray-500">
            <div className="flex justify-between">
              <span className="text-xs text-gray-500">Sports · Trending</span>
              <FiMoreHorizontal className="h-4 w-4 text-gray-500" />
            </div>
            <p className="font-bold">Sara</p>
            <p className="text-xs text-gray-500">110K posts</p>
          </div>

          <div className="p-4 hover:bg-gray-800/50 cursor-pointer border-t border-gray-500">
            <div className="flex justify-between">
              <span className="text-xs text-gray-500">Trending in Colombia</span>
              <FiMoreHorizontal className="h-4 w-4 text-gray-500" />
            </div>
            <p className="font-bold">Yumbo</p>
          </div>

          <div className="p-4 hover:bg-gray-800/50 cursor-pointer border-t border-gray-800">
            <div className="flex justify-between">
              <span className="text-xs text-gray-500">Sports · Trending</span>
              <FiMoreHorizontal className="h-4 w-4 text-gray-500" />
            </div>
            <p className="font-bold">Colombia</p>
            <p className="text-xs text-gray-500">27.8K posts</p>
          </div>

          <div className="p-4 hover:bg-gray-800/50 cursor-pointer border-t border-gray-800">
            <div className="flex justify-between">
              <span className="text-xs text-gray-500">Trending in Colombia</span>
              <FiMoreHorizontal className="h-4 w-4 text-gray-500" />
            </div>
            <p className="font-bold">Caracol</p>
          </div>

          <div className="p-4 text-[#1d9bf0] hover:bg-gray-800/50 cursor-pointer border-t border-gray-800">Show more</div>
        </div>

        {/* Screenshot notification */}
        <div className="bg-gray-900 rounded-xl p-4 relative">
          <div className="absolute top-2 right-2 flex space-x-2">
            <FiMoreHorizontal className="h-5 w-5 text-gray-500" />
            <X className="h-5 w-5 text-gray-500" />
          </div>
          <h3 className="font-bold mb-2">Herramienta Recortes</h3>
          <p className="text-sm">
            Captura de pantalla copiada en el portapapeles Guardado automáticamente en la carpeta de capturas de
            pantalla.
          </p>
          <button className="mt-4 w-full py-2 text-center border border-gray-700 rounded-md">
            Marcado y uso compartido
          </button>
        </div>
      </div>
    )
}