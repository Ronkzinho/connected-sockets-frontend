import React from "react"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
            <Link to="/login"><button>Logar-se</button></Link>
            <Link to="/register"><button>Registrar-se</button></Link>
        </>
    )
}