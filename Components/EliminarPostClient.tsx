"use client";

import { useModalStateContextProvider } from "@/Context/modalStateContext";
import ModalEliminarPost from "./ModalEliminarPost";

export default function EliminarPostClient() {

    const stateModal = useModalStateContextProvider()?.state

  return (
    <div>
      {stateModal && <ModalEliminarPost/>}
    </div>
  );
}
