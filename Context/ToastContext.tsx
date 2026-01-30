"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface typeToastContext {
  toastState: boolean;
  setToastState: Dispatch<SetStateAction<boolean>>;
  mostrar: () => void;
  ocultar: () => void;
  isShow: boolean;
}

const toastContext = createContext<typeToastContext | null>(null);

export default function ToastContextComponent({
  children,
}: {
  children: ReactNode;
}) {
  const [toastState, setToastState] = useState<boolean>(false);
  const [isShow, setShow] = useState(false);

  function mostrar() {
    setShow(true);
  }
  function ocultar() {
    setShow(false);
  }

  return (
    <toastContext.Provider
      value={{ toastState, mostrar, ocultar, isShow, setToastState }}
    >
      {children}
    </toastContext.Provider>
  );
}

export function useToasContext() {
  return useContext(toastContext);
}
