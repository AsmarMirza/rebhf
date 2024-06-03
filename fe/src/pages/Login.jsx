import React, { useState } from 'react'
import Cookies from "js-cookie"
function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        async function login(){
            const res=await fetch("http://localhost:3000/user/login",
            {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({email,password})
            })
            const data=await res.json()
            console.log(data);
            Cookies.set('token',data.token)
        }
        login()
    }
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <input onChange={(e)=>setemail(e.target.value)} value={email} placeholder='email' type="" /><br />
            <input onChange={(e)=>setpassword(e.target.value)} value={password} placeholder='password' type="text" /><br />
            <button>send</button>
        </form>
    </div>
  )
}

export default Login