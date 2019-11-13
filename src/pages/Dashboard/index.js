import React, { useState, useEffect } from "react"
import api from "../../services/api"
export default function Dashboard({ history }){
    var [email, setEmail] = useState('')
    var [msg, setMsg] = useState('')

    useEffect(() => {
        if(!localStorage.getItem("user")){
            return history.push("/home")
        }
    }, [history])

    async function handleSubmit(){
        var res = await api.post("/emit", { email, msg })
        if(res.data.error){
            return alert(res.data.error)
        }
        else{
            alert("Sucesso")
        }
    }
    return(
        <>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input placeholder="msg" value={msg} onChange={(e) => setMsg(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Ir</button>
        </>
    )
}