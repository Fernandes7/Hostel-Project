import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
function Signup() {
    const history=useNavigate()
    const handle=()=>{
        axios.post("http://localhost:8000/login")
    }
  return (
    <div className='loginbody'>
      <div className='logindiv'>
        <img src="https://images.unsplash.com/photo-1617098900591-3f90928e8c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZCUyMHJvb218ZW58MHx8MHx8&w=1000&q=80" alt="loginimage" className='loginimage'></img>
        <div className='inputdiv'>
        <h2>Welcome Hosteler</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <input type="text" placeholder="Enter Your Name" name="email" onChange={handle}></input>
        <input type="text" placeholder="Enter Your Email" name="email" onChange={handle}></input>
        <input type="password" placeholder="Enter Your Password" name="password" onChange={handle}></input>
        <button>Signup</button>
        <label>Already have account</label>
        <label className='labelforsignin' onClick={()=>history("/login")}>Login</label>
        </div>
        </div>
    </div>
  )
}

export default Signup