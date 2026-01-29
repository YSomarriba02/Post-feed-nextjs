"use server";

import sql from "mssql";
import { revalidatePath } from "next/cache";
import query from "../db";
import { post } from "@/Interfaces/post";

export interface FormState {
  id?: number;
  mensaje: string | undefined;
  ok: boolean;
}

export async function publicarPostAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const titulo = formData.get("titulo");
  const resumen = formData.get("resumen");
  const contenido = formData.get("contenido");

  if (!titulo || !resumen || !contenido) {
    return {
      mensaje: "Datos no validos",
      ok: false,
    };
  }
  console.log(`${titulo} \ ${resumen} \ ${contenido}`);

  try {
    const data =
      await query<post>`insert into Posts(title, summary, content) output inserted.id values(${titulo}, ${resumen}, ${contenido})`;
    const post = data[0];
    revalidatePath("/");
    return {
      id: post.id,
      mensaje: "Post publicado",
      ok: true,
    };
  } catch (error) {
    return {
      mensaje: "Error al publicar post",
      ok: false,
    };
  }
}

export async function eliminarPostAction(id: number) {
  try {
    await query`delete from Posts where id = ${id}`;
    revalidatePath("/");
    revalidatePath("/eliminar");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
