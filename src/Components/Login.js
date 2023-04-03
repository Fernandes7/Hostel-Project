import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Usercontext } from './Usercontext'
import "./Login.css"
function Login() {
    const history=useNavigate()
    const [data,setData]=useState({})
    const {setUserid}=useContext(Usercontext)
    const handle=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    }
    const passdata=async()=>{
            axios.post("http://localhost:8000/login",{data}).then((responce)=>{
            if(responce.data==="IP"||responce.data==="IU")
            alert("Inavlid Username or Password")
            else
            {
            setUserid(responce.data.username)
            history("/account",{state:{data:responce.data}})
            }
    })
    }
  return (
    <div className='loginbody'>
      <div className='logindiv'>
        <img src="https://kitchendesignpartner.com/wp-content/uploads/2019/09/The-ideal-kitchen-is-the-social-hub-where-everyone-gathers.jpg" alt="loginimage" className='loginimage'></img>
        <div className='inputdiv'>
        <h2>Welcome Hosteler</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <input type="text" placeholder="Enter Your Email" name="email" onChange={handle}></input>
        <input type="password" placeholder="Enter Your Password" name="password" onChange={handle}></input>
        <button onClick={passdata}>Login</button>
        <label>New To Hosteler</label>
        <label className='labelforsignin' onClick={()=>history("/signup")}>Signup</label>
        </div>
        </div>
        </div>
  )
}

export default Login