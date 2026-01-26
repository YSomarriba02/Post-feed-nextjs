import  query  from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await query`select * from Posts`;
  return NextResponse.json(posts);
}
