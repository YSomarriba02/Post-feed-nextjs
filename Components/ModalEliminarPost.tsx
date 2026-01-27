"use client";

import { IoAlertCircle } from "react-icons/io5";
import { useModalStateContextProvider } from "@/Context/modalStateContext";
import { contextPostProvider } from "@/Context/PostContext";
import { useRef } from "react";

export default function ModalEliminarPost() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const cerrarModal = useModalStateContextProvider()?.cerrarModal!!;

  function handleCerrarModal(e: React.MouseEvent) {

    if(e.target !== e.currentTarget) return
    if (!modalRef) return;

    const modal = modalRef.current;
    modal?.classList.add("animate-modalSalida");
    modal?.addEventListener("animationend", cerrarModal);
  }

  const contextPost = contextPostProvider();
  const title = contextPost?.context.title!!;
  return (
    <div
      ref={modalRef}
      onClick={handleCerrarModal}
      className="bg-[#4140407e] backdrop-blur-sm flex flex-col justify-center items-center fixed top-0 bottom-0 left-0 right-0 animate-modalEntrada"
    >
      <div className="w-3/4 min-h-50 pb-2 bg-zinc-200 rounded-lg overflow-hidden">
        <div className="px-4 w-full text-black flex flex-col gap-4 mt-2">
          <IoAlertCircle className="text-5xl ml-auto mr-auto" />
          <p className="font-bold text-[20px] mx-auto">Eliminar Post</p>
          <div className="px-4 w-full flex flex-col gap-1 items-center">
            <span className="text-sm">Estas seguro de borrar el post</span>
            <p className="font-medium">"{title}"</p>
          </div>
          <nav className="w-full px-2 flex justify-around gap-2">
            <button 
            className="h-10 w-1/2 bg-zinc-300 rounded-2xl">cancelar</button>
            <button
            className="h-10 w-1/2 bg-red-400 text-white rounded-2xl">Eliminar</button>
          </nav>
        </div>
      </div>
    </div>
  );
}
