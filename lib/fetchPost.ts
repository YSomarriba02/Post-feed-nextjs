import  query  from "./db";
import { post } from "@/Interfaces/post";


export default async function fetchPost(id: number) {
  try {
    const postQuery = await query`select * from Posts where id = ${id}`
    const post:post = postQuery[0]
    console.log(post)
    return post;
  } catch (error) {
    console.log(error);
    return false;
  }
}
