import { RiHome2Line } from "react-icons/ri";
import { MdNoteAdd } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { AiFillFilePpt } from "react-icons/ai";
import Link from "next/link";

const listaLinks = [
    {
        nombre: "Home", href: "/", icon: RiHome2Line
    },
    {
        nombre: "Agregar", href: "/agregar", icon: MdNoteAdd
    },
    {
        nombre: "Eliminar", href: "/eliminar", icon: MdOutlineDeleteSweep
    }
]

export default function NavLinks() {
    return (
        <ul className="px-4 h-16 w-full bg-zinc-600 flex gap-4 items-center">
            {listaLinks.map(link => (
                <li key={link.nombre} className="h-14 flex items-center">
                    <Link href={link.href} className="flex items-center gap-1.5">
                        <link.icon></link.icon>
                        {link.nombre}
                    </Link>
                </li>
            ))}
        </ul>
    )
}