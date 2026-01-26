import { post } from "@/Interfaces/post"
import query from "@/lib/db"
import ItemPostE from "./ItemPostE"


export const revalidate = 10

export default async function ListPostE(){

    const posts = await query<post>`select id, title from Posts`
    console.log('Creando LitsPostE -----------------------------------')
    return(
        <div>
            <ul className="w-full grid gap-2.5 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
            {posts.map(({id, title}) => {
                return (
                    <ItemPostE key={id} id={id} title={title}/>    
                )
            })}
            </ul>
        </div>
    )
}


