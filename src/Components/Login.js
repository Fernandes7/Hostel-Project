import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import "./Login.css"
function Login() {
    const history=useNavigate()
    const [data,setData]=useState({})
    const handle=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    }
    const passdata=async()=>{
            axios.post("http://localhost:8000/login",{data}).then((responce)=>{
            if(responce.data==="IP"||responce.data==="IU")
            alert("Inavlid Username or Password")
            else
            history("/account",{state:{data:responce.data}})
    })
    }
  return (
    <div>
        <input type="text" placeholder="Enter Your Email" name="email" onChange={handle}></input>
        <input type="password" placeholder="Enter Your Password" name="password" onChange={handle}></input>
        <button onClick={passdata}>Login</button>
        <label onClick={()=>history("/signup")}>Signup heree</label>
    </div>
  )
}

export default Login