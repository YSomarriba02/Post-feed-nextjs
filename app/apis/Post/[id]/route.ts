import { NextRequest, NextResponse } from "next/server";
import  query  from "@/lib/db";
import { post } from "@/Interfaces/post";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } = await params;
  console.log(`se pidio post ${id}`);

  try {
    const res = await query`select * from Posts where id = ${id}`;
    const post: post = res[0];
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    throw Error("Error obtener post bd");
  }
}
