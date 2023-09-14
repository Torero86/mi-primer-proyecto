"use client"
import { useState } from "react"

const useContador = () =>{
    const[contador, setContador] = useState(0)

    const incrementar = ()=>{
        setContador(contador + 1)
    }
    return{contador, incrementar}
}

export default function ContadorApp(){
    const {contador, incrementar} = useContador()
    
    return(
        <div>
           <p>{contador}</p>
           <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}