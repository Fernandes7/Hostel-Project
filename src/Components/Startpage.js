import React from 'react'
import { useNavigate } from 'react-router'
function Startpage() {
    const history=useNavigate()
  return (
    <div>
        <button onClick={()=>history("/signup")}>Register</button>
        <button onClick={()=>history("/login")}>Login</button>
    </div>
  )
}

export default Startpage