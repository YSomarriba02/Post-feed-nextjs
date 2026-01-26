import { post } from "@/Interfaces/post";
import  query  from "@/lib/db";
import fetchPost from "@/lib/fetchPost"



export default async function Page({ params }: {
    params: Promise<{
        post: string
    }>
}) {
    const { post: id } = await params
    const post = await fetchPost(Number(id))
    if (!post) return <h1>No post</h1>
    return (
        <div className="mt-20 flex flex-col gap-10 px-10 w-3/4">
            <h2 className="text-3xl">{post.title}</h2>
            <div className="flex flex-col gap-4">
                <h3 className="text-zinc-300 text-md font-semibold">{post.summary}</h3>
                <p className="text-sm text-zinc-400">{post.content}</p>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const data:post[] = await query`select id from Posts`
    return data.map(post => {
        return {
            post: String(post.id)
        }
    })
}


