import React, { useState } from 'react'
import "./Profile.css"
import { useLocation, useNavigate } from 'react-router'
function Profile() {
  const profile=useLocation()
  const history=useNavigate()
  const [selection,setSelecton]=useState(1)
  return (
    <div>
    <img className='profilebackimg' src="https://img5.goodfon.com/wallpaper/nbig/6/58/gunten-switzerland-thunersee-lake-thun-bernese-alps-gunten-s.jpg" alt="images"></img>
    <div className='profiledetaildiv'>
    <div className='profileimagediv'>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
        <h3>Hey, {profile.state.profile.username}</h3>
    </div>
    <div className='profilecontent'>
        <h3>YOUR ACCOUNT</h3>
        <div className='profileselectiondiv'>
        <p className={selection===1 ?'selection':"notselection"} onClick={()=>setSelecton(1)}>Account Info</p>
        <p className={selection===2 ?'selection':"notselection"} onClick={()=>setSelecton(2)}>Additional Info</p>
        </div>
        {selection===1 ? 
        <div className='profiledatawrapdiv'>
        <div className='profiledatadiv'>
        <p>Name :</p>
        <p className='profiledatadivdata'>{profile.state.profile.username}</p>
        </div>
        <div className='profiledatadiv'>
        <p>Linked Email
        :</p>
        <p className='profiledatadivdata'>{profile.state.profile.email}</p>
        </div>
        <button onClick={()=>history("/profileupdate",{state:{profile:profile.state.profile}})}>Update</button>
        <button onClick={()=>history("/account",{state:{data:profile.state.profile}})}>Cancel</button>
        </div>:profile.state.profile.age!=="" ? <p>Nothing to show</p>:<p>Datsa</p>}
    </div>
    </div>
    </div>
  )
}

export default Profile