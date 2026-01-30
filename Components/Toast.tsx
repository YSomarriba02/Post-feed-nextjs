"use client";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import { useToasContext } from "@/Context/ToastContext";
import { useEffect, useRef } from "react";

export default function Toast() {
  const { toastState, ocultar } = useToasContext()!!;
  const toastRef = useRef<HTMLDivElement | null>(null);
  const Icons = [MdCancelPresentation, FaRegCheckCircle];
  const Icon = Icons[Number(toastState)];

  useEffect(() => {
    if (!toastRef.current) return;
    const toast = toastRef.current;
    setTimeout(() => {
      toast.classList.add("animate-notificacionSalida");
      toast.addEventListener("animationend", ocultar, { once: true });
    }, 5000);
  }, []);
  return (
    <div
      ref={toastRef}
      className={`${toastState ? "bg-green-500" : "bg-red-400"} rounded-md [box-shadow:1px_2px_4px_2px_black] w-3/4 h-18  fixed top-4/5 left-0 right-0 m-auto p-2 flex items-center gap-2 animate-notificacionEntrada lg:w-1/4 lg:m-0 lg:left-auto lg:right-[1.8vw]`}
    >
      <Icon className="size-10" />
      <p className="text-lg font-semibold">
        {toastState ? "Post Eliminado con exito" : "Error al eliminar post"}
      </p>
    </div>
  );
}
