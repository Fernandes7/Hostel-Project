import React, { useState } from 'react'
import {CiLogout} from "react-icons/ci"
import {FaRegUser,FaUserEdit} from "react-icons/fa"
import {BsPersonWorkspace} from "react-icons/bs"
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
  const [sortenable,setSortenable]=useState(false)
  const profile=()=>{
    if(profileenable===false)
    setProfileenable(true)
    else
    setProfileenable(false)
  }
  return (
    <div className='blackbody'>
      <div className='accountnavbar'>
        <img src={logo} alt="logo" className='accountnavbarimage'></img>
        <div className='navright'>
        <p>{userdata.state.data.isadmin ?"Hello Admin,":"Hello"} {userdata.state.data.username}</p>
        <img src="https://cdn-icons-png.flaticon.com/128/10813/10813449.png" className='accountlogo' onClick={profile} alt="profileimage"></img>
        </div>
      </div>
      {location ? <Displayhostel location={location} userid={userdata.state} setSortenable={setSortenable} sortenable={sortenable}/> :<Accountloader />}
      <Searchbar setLocation={setLocation} setSortenable={setSortenable} />
     <div className={profileenable ?'profilediv':'profileoff'}>
      <div className='innerprofilediv' onClick={()=>history("/profile" ,{state:{profile:userdata.state.data}})}>
        <FaRegUser />
        <p>Your Profile</p>
      </div>
      <div className='innerprofilediv' onClick={()=>history("/profileupdate" ,{state:{profile:userdata.state.data}})}>
        <FaUserEdit />
        <p>Edit Profile</p>
      </div>
      <div className='innerprofilediv' onClick={()=>history("/")}>
        <CiLogout />
        <p>Logout</p>
      </div>
      {userdata.state.data.isadmin && <div className='innerprofilediv' onClick={()=>history("/adminpage")}>
        <BsPersonWorkspace/>
        <p>Admin Panel</p>
      </div>  }
      </div>
      <Outlet/>
    </div>
  )
}

export default Account