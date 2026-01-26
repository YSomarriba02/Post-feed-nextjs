import { post } from "@/Interfaces/post";
import  query  from "./db";


type postPreview = Pick<post, "id" | "title">

export default async function fetchPosts() {
  try {
    console.log(`Se esta construyendo la ListPost`)
    const listPost : postPreview[]= await query`select id, title from Posts`
    return listPost
  } catch (error) {
    console.log("Error al obtener post de BD");
    console.error(error);
    return false;
  }
}
