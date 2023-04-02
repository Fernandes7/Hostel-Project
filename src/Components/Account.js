import React, { useState } from 'react'
import {CgProfile} from "react-icons/cg"
import {CiLogout} from "react-icons/ci"
import {FaRegUser,FaUserEdit} from "react-icons/fa"
import { Outlet, useLocation, useNavigate } from 'react-router'
import "./Account.css"
import "./Displayhostel"
import Displayhostel from './Displayhostel'
import Searchbar from './Searchbar'
import logo from "./Images/22.jpg"
import Accountloader from './Accountloader'
function Account() {
  const userdata=useLocation()
  const history=useNavigate()
  const [location,setLocation]=useState("")
  const [profileenable,setProfileenable]=useState(false)
  const profile=()=>{
    if(profileenable===false)
    setProfileenable(true)
    else
    setProfileenable(false)
  }
  return (
    <div>
      <div className='accountnavbar'>
        <img src={logo} alt="logo"></img>
        <div className='navright'>
        <p>Hello, {userdata.state.data.username}</p>
        <CgProfile className='accountlogo' onClick={profile}/>
        </div>
      </div>
      {location ? <Displayhostel location={location} userid={userdata.state}/> :<Accountloader />}
      <Searchbar setLocation={setLocation} />
      {profileenable && <div className='profilediv'>
      <div className='innerprofilediv' onClick={()=>history("/profile" ,{state:{profile:userdata.state.data}})}>
        <FaRegUser />
        <p>Your Profile</p>
      </div>
      <div className='innerprofilediv'>
        <FaUserEdit />
        <p>Edit Profile</p>
      </div>
      <div className='innerprofilediv' onClick={()=>history("/")}>
        <CiLogout />
        <p>Logout</p>
      </div>
      </div>}
      <Outlet/>
    </div>
  )
}

export default Account