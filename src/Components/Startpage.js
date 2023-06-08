import React from 'react'
import {BiUserCircle} from "react-icons/bi"
import {IoLogInOutline} from "react-icons/io5"
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
         <p className='signupologinptag'>Signup/Login</p>
         <BiUserCircle className='startlogos' onClick={()=>history("/signup")}>Register</BiUserCircle>
         <IoLogInOutline className='startlogos' onClick={()=>history("/login")}>Login</IoLogInOutline>
         </div>
        </div>
        <p className='startcontent'>FEEL LIKE HOME</p>
        <div className='startpagecontent'>
          <h3>Premium Accommodation</h3>
          <p>Lets Find Out a Better Place with full of Customer satisfaction.
          Come To Us and Have a Experience with Us with Good Memories</p>
        </div>
    </div>
  )
}

export default Startpage