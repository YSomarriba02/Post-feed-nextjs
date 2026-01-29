import Link from "next/link";

interface props {
  id: number;
  title: string;
}

export default function ItemPost({ id, title }: props) {
  return (
    <li className="p-2 h-30 flex gap-1 items-center bg-zinc-600 list-none rounded-sm hover:animate-pulse hover:bg-zinc-500 hover:scale-95 hover:rounded-lg transition-transform ease-in-out">
      <Link href={`/post/${id}`}>
        <h4>{id}</h4>
        <p>{title}</p>
      </Link>
    </li>
  );
}
