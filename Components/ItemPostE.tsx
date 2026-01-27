"use client"

import { FiDelete } from "react-icons/fi";
import { post } from "@/Interfaces/post";
import { contextPostProvider } from "@/Context/PostContext";
import { useModalStateContextProvider } from "@/Context/modalStateContext";

type props = Pick<post, "id" | "title">

export default function ItemPostE({id, title}:props){

    const context = contextPostProvider()
    const setContext = context?.setContext!!

    const abrirModal = useModalStateContextProvider()?.abrirModal!!

    return(
        <li className="flex flex-col bg-[#4a4a58] p-4 h-24 rounded-md">
            <FiDelete 
            onClick={() => {
                setContext({id, title})
                abrirModal()
            }}
            className="ml-auto size-6 hover:animate-bounce ease-in duration-200"/>
            <p className="mt-auto">{title}</p>
        </li>
    )
}