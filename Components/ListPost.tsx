import fetchPosts from "@/lib/fetchPosts";
import ItemPost from "./ItemPost";


export default async function ListPost() {
    const posts = await fetchPosts()

    if (!posts || posts.length == 0) {
        return (
            <h2>No hay posts</h2>
        )
    }

    return (
        <div className="mt-10 grid gap-2 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {posts.map(({ id, title }) => {
                return (<ItemPost key={id} id={id} title={title}></ItemPost>)
            })}
        </div>
    )
}