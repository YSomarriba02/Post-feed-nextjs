"use client";

import { useEffect, useRef, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

interface props {
  mensaje: string | undefined;
  exito: boolean;
  ocultar: () => void;
  time: number;
}

export default function Notificacion({ exito, mensaje, ocultar, time }: props) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const Icon = exito ? CiCircleCheck : FaRegCircleXmark;

  useEffect(() => {
    console.log("se monto");
    const timer = setTimeout(() => {
      const divEle = divRef.current;
      if (!divEle) return;
      divEle.classList.add("animate-notificacionSalida");
    }, time - 700);
    return () => clearTimeout(timer);
  }, []);

  function handleOcultar() {
    const divEle = divRef.current;
    if (!divEle) return
    divEle.classList.add("animate-notificacionSalida");
    
    setTimeout(() => {
        ocultar()
    }, 700);
  }

  return (
    <div
      ref={divRef}
      className={`${exito ? "bg-blue-400" : "bg-red-400"} transition-transform ease-in duration-700 animate-notificacionEntrada px-4 flex gap-2 items-center h-[10vh] w-2/3    mt-10 relative -bottom-[10vh] rounded-sm md:mt-0`}
    >
      <Icon onClick={handleOcultar} className="text-black text-2xl" />
      <p className="text-[16px] font-semibold">{mensaje}</p>
    </div>
  );
}
