"use client";

import { FiDelete } from "react-icons/fi";
import { post } from "@/Interfaces/post";
import { contextPostProvider } from "@/Context/PostContext";
import { useModalStateContextProvider } from "@/Context/modalStateContext";

type props = Pick<post, "id" | "title">;

export default function ItemPostE({ id, title }: props) {
  const context = contextPostProvider();
  const setContext = context?.setContext!!;

  const abrirModal = useModalStateContextProvider()?.abrirModal!!;

  return (
    <li
      onClick={() => {
        setContext({ id, title });
        abrirModal();
      }}
      className="flex flex-col bg-[#4a4a58] p-4 min-h-24 rounded-md hover:scale-95 transition-transform duration-150 ease-in-out group"
    >
      <FiDelete className="ml-auto size-6 group-hover:animate-bounce ease-in duration-200" />
      <p className="mt-auto">{title}</p>
    </li>
  );
}
