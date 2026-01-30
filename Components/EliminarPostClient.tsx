"use client";

import { useModalStateContextProvider } from "@/Context/modalStateContext";
import ModalEliminarPost from "./ModalEliminarPost";
import { useToasContext } from "@/Context/ToastContext";
import Toast from "./Toast";

export default function EliminarPostClient() {
  const stateModal = useModalStateContextProvider()?.state;
  const isShow = useToasContext()?.isShow;

  return (
    <div>
      {stateModal && <ModalEliminarPost />}
      {isShow && <Toast />}
    </div>
  );
}
