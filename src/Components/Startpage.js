import React from 'react'
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
         <img src="https://cdn-icons-png.flaticon.com/128/9706/9706647.png" alt="login" className='startlogos' onClick={()=>history("/signup")}></img>
         <img src="https://cdn-icons-png.flaticon.com/128/9797/9797203.png" alt="signup" className='startlogoss' onClick={()=>history("/login")}></img>
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