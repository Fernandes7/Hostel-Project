import React, { useState } from 'react'
import "./Profile.css"
import { useLocation, useNavigate } from 'react-router'
function Profile() {
  const profile=useLocation()
  const history=useNavigate()
  const [selection,setSelecton]=useState(1)
  return (
    <div>
    <img className='profilebackimg' src="https://img.jamesedition.com/listing_images/2023/02/21/12/32/36/0236076f-4269-443b-acdb-2b82c87730de/je/1000x620xc.jpg" alt="images"></img>
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
        </div>:!profile.state.profile.contactno ? <p className='profiledatadivdata profiledatadiv'>You didn't have Added Additional User details </p>:<div className='profiledatawrapdiv'>
        <div className='profiledatadiv'>
        <p>Contact No :</p>
        <p className='profiledatadivdata'>{profile.state.profile.contactno}</p>
        </div>
        <div className='profiledatadiv'>
        <p>Address :</p>
        <p className='profiledatadivdata'>{profile.state.profile.Address}</p>
        </div>
        <div className='profiledatadiv'>
        <p>Age :</p>
        <p className='profiledatadivdata'>{profile.state.profile.Age}</p>
        </div>
        <div className='profiledatadiv'>
        <p>Gender :</p>
        <p className='profiledatadivdata'>{profile.state.profile.Gender}</p>
        </div>
        <div className='profiledatadiv'>
        <p>Your Stand :</p>
        <p className='profiledatadivdata'>{profile.state.profile.Status}</p>
        </div>
        <div className='profiledatadiv'>
        <p>Location :</p>
        <p className='profiledatadivdata'>{profile.state.profile.Place}</p>
        </div>
        <div className='profiledatadiv'>
        <p>Company or College Name :</p>
        <p className='profiledatadivdata'>{profile.state.profile.workplace}</p>
        </div>
        <button className='detailbutton' onClick={()=>history("/profileupdate",{state:{profile:profile.state.profile}})}>Update</button>
        <button className='detailbutton' onClick={()=>history("/account",{state:{data:profile.state.profile}})}>Cancel</button>
        </div>}
    </div>
    </div>
    </div>
  )
}

export default Profile