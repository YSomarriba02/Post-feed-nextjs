"use client"

import { createContext, ReactNode, useContext, useState } from "react"

export interface contextPost {
    id: string | null,
    title: string,
}

interface contextType {
    context: contextPost
    setContext: (nuevoContext: contextPost) => void
}

const ContextPost = createContext<contextType | null>(null)



export default function PostContext({ children }: { children: ReactNode }) {
    const [context, setContext] = useState<contextPost>({id: null, title: ""})

    function handleContext(nuevoContext: contextPost){
        setContext(nuevoContext)
    }
    return (
        <ContextPost.Provider value={{ context: context, setContext: handleContext}}>
            {children}
        </ContextPost.Provider>
    )
}



export function contextPostProvider(){
    if(ContextPost){
        return useContext(ContextPost)
    }
}