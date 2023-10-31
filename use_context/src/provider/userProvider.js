'use client'
import { createContext, useContext, useState } from "react";

const datosContext = createContext()



// Creamos nuestro propio hook
export const useDatosContext = () =>{
    return useContext(datosContext)
}



export function datosContextProvider({children}){
    const [data,setData] = useState('Estado principal')
    return (<datosContext.Provider value={{data,setData}}>
        {children}
    </datosContext.Provider>)
}