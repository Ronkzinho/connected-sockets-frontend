import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"

export default function Register({ history }){
    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')

    useEffect(() => {
        if(localStorage.getItem("user")){
            return history.push("/dashboard")
        }
    }, [history])
    async function handleSubmit(e){
        e.preventDefault()
        var res = await api.post("/users", { email, password })
        if(res.data.error){
            return alert(res.data.error)
        }
        else{
            localStorage.setItem("user", res.data._id)
            history.push("/dashboard")
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                />
                <br />
                <input 
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                />
                <br />
                <button type="submit">Registrar</button>
            </form>
            Já tem uma conta, <Link to="/login">logue-se</Link>
        </>
    )
}