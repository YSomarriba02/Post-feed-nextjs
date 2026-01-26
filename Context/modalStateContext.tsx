"use client"

import { createContext, ReactNode, useContext, useState } from "react"


interface stateContextType{
    state: boolean,
    abrirModal: () => void
    cerrarModal: () => void
}

const StateContext = createContext<stateContextType | null>(null)

export default function ModalStateContext({children}: {children:ReactNode}){

    const [state, setState] = useState(false)

    function abrirModal(){
        setState(true);
    }

    function cerrarModal(){
        setState(false)
    }


    return(
        <StateContext.Provider value={{abrirModal, cerrarModal, state}}>
            {children}
        </StateContext.Provider>
    )
}


export function useModalStateContextProvider(){
    return useContext(StateContext)
}