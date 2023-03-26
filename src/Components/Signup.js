import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import "./Signup.css"
function Signup() {
    const history=useNavigate()
    const handle=()=>{
        axios.post("http://localhost:8000/login")
    }
  return (
    <div>
        <input type="text" placeholder='Enter Your Username'></input>
        <input  type="text" placeholder='Enter Your Email'></input>
        <input type="password" placeholder="Enter Your Password"></input>
        <button onClick={handle}>Signup</button>
        <label onClick={()=>history("/login")}>Login</label>
    </div>
  )
}

export default Signup