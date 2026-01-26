"use client";

import { useActionState, useEffect, useState } from "react";
import InputElement from "@/Components/InputElement";
import { FormState, publicarPost } from "@/lib/Actions/postActions";
import Notificacion from "@/Components/Notificacion";

const prevState: FormState = {
  mensaje: undefined,
  ok: false,
};

export default function Page() {
  const [state, formAction, ispending] = useActionState(
    publicarPost,
    prevState,
  );

  const [notificacion, setNotificacion] = useState<boolean>(false);
  const timeShowNotificacion = 4000

  function ocultarNotificacion(){
    setNotificacion(false)
  }

  useEffect(() => {
    if (state.mensaje) {
      setNotificacion(true);
      const timer = setTimeout(() => {
        setNotificacion(false);
      }, timeShowNotificacion);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className="h-dvh flex flex-col items-center overflow-hidden">
      <h1 className="text-white text-3xl w-full md:w-2/3 lg:w-1/3">Agregar Publicacion</h1>

      <form
        action={formAction}
        className="overflow-hidden mt-10 w-full min-h-70 bg-zinc-500 p-4 px-2.5 rounded-lg flex flex-col gap-3 md:w-2/3 lg:w-1/3"
      >
        <InputElement
          min={5}
          max={20}
          // required={true}
          name="titulo"
          placeholder="Titulo publicacion"
        />
        <textarea
          // required
          name="resumen"
          id=""
          placeholder="resumen"
          className="min-h-14 bg-zinc-700 w-full py-2 px-1.5 rounded-sm"
        ></textarea>
        <textarea
          // required
          name="contenido"
          id=""
          placeholder="contenido"
          className="min-h-20 bg-zinc-700 w-full py-2 px-1.5 rounded-sm"
        ></textarea>
        <button
          disabled={ispending}
          className="disabled:bg-gray-600 py-4 bg-green-400 mt-auto text-zinc-700 font-semibold hover:scale-95 hover:bg-green-500 hover:text-white transition-[colors,scale] ease-in duration-150"
        >
          Publicar
        </button>
      </form>
       {notificacion &&  (
            <Notificacion time={timeShowNotificacion} ocultar={ocultarNotificacion} exito={state.ok} mensaje={state.mensaje} />
          )}
    </div>
  );
}
