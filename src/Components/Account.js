import React, { useState } from 'react'
import {CgProfile} from "react-icons/cg"
import { Outlet, useLocation } from 'react-router'
import "./Account.css"
import "./Displayhostel"
import Displayhostel from './Displayhostel'
import Searchbar from './Searchbar'
import logo from "./Images/22.jpg"
import Accountloader from './Accountloader'
function Account() {
  const userdata=useLocation()
  const [location,setLocation]=useState("")
  return (
    <div>
      <div className='accountnavbar'>
        <img src={logo} alt="logo"></img>
        <div className='navright'>
        <p>Hello, {userdata.state.data.username}</p>
        <CgProfile className='accountlogo' />
        </div>
      </div>
      {location ? <Displayhostel location={location} userid={userdata.state}/> :<Accountloader />}
      <Searchbar setLocation={setLocation} />
      <Outlet/>
    </div>
  )
}

export default Account