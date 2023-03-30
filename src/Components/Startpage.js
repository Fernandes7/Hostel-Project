import React from 'react'
import {BiUserCircle,BiLogInCircle} from "react-icons/bi"
import logo from "./Images/22.jpg"
import { useNavigate } from 'react-router'
import "./Startpage.css"
function Startpage() {
    const history=useNavigate()
  return (
    <div>
        <img className='startimg' src="https://www.hotelscombined.com/himg/da/c2/4f/agoda-435270-113568793-201815.jpg" alt="startimage"></img>
        <div className='navbar'>
         <img className='logo' src={logo} alt="logo"></img>
         <div className='logodiv'>
         <BiUserCircle className='startlogos' onClick={()=>history("/signup")}>Register</BiUserCircle>
         <BiLogInCircle className='startlogos' onClick={()=>history("/login")}>Login</BiLogInCircle>
         </div>
        </div>
        <p className='startcontent'>FEEL LIKE HOME</p>
    </div>
  )
}

export default Startpage