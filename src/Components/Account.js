import React, { useState } from 'react'
import {CgProfile} from "react-icons/cg"
import { Outlet, useLocation } from 'react-router'
import "./Account.css"
import Displayhostel from './Displayhostel'
import Searchbar from './Searchbar'
import logo from "./Images/22.jpg"
function Account() {
  const userdata=useLocation()
  const [location,setLocation]=useState("")
  return (
    <div>
      <div className='accountnavbar'>
        <img src={logo} alt="logo"></img>
        <div className='navright'>
        <h3>Welocome {userdata.state.data.username}</h3>
        <CgProfile className='accountlogo' />
        </div>
      </div>
      <Searchbar setLocation={setLocation} />
      {location ? <Displayhostel location={location} userid={userdata.state}/> : <h3 className='searchloading'>Select Location to search</h3>}
      <Outlet />
    </div>
  )
}

export default Account