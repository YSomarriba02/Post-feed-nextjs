import sql from "mssql";
import { post } from "@/Interfaces/post";

const config = {
  user: process.env.SqlUser,
  password: process.env.SqlPassword,
  server: process.env.SqlServer!,
  database: process.env.SqlDatabase,
  options: {
    trustServerCertificate: true,
  },
};

let poolConection: sql.ConnectionPool | null = null

async function getPool(){
  if(!poolConection){
    poolConection = await sql.connect(config)
  }
  return poolConection
}

// export async function query(queryString: string){
//   const pool = await getPool();
//   const result = (await pool.request().query(queryString)).recordset
//   return result
// }


export default async function query<T = any>(strings: TemplateStringsArray, ...values: any[]){
  const pool = await getPool()
  const result = await pool.request().query(strings, ...values)
  const valor = result.recordset
  return valor as T[]
}