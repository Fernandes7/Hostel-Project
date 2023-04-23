import React, { useState } from 'react'
import "./Profile.css"
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
function Profile() {
  const profile=useLocation()
  const history=useNavigate()
  const [selection,setSelecton]=useState(1)
  const [profileilmgenable,setProfileimageenable]=useState(false)
  const [image,setimage]=useState({})
  const [fetchedprofileimg,setfetchedprofileimg]=useState()
  let base64String;
  let binaryvalue;
  const imagepopup=(value)=>{
    setProfileimageenable(value)
  }
  const imagesave=(e)=>{
    setimage({picture:e.target.files[0]})
  }
  const uploadimage=()=>{
    const formdata=new FormData()
    formdata.append("image",image.picture)
    axios.post(`http://localhost:8000/single/${profile.state.profile._id}`,formdata).then((responce)=>console.log(responce))
    console.log("image is",image)
  }
  const fetchimage=()=>{
    imagepopup(false)
    axios.post(`http://localhost:8000/getimage/${profile.state.profile._id}`).then((responce)=>{
    setfetchedprofileimg(responce.data[0].image.data.data)
    fetchedprofileimg && console.log("herebaseeee",fetchedprofileimg)
    fetchedprofileimg && (base64String = btoa(String.fromCharCode(...new Uint8Array(responce.data[0].image.data.data))))
    })
  }
  return (
    <div>
    <img className='profilebackimg' src="https://img.jamesedition.com/listing_images/2023/02/21/12/32/36/0236076f-4269-443b-acdb-2b82c87730de/je/1000x620xc.jpg" alt="images"></img>
    <div className='profiledetaildiv'>
    <div className='profileimagediv'>
        {/* {fetchedprofileimg && fetchedprofileimg.map((value)=>{base64String = btoa(String.fromCharCode(...new Uint8Array(value.image.data.data)))
        return <img src={`data:image/png;base64,${base64String}`} alt=""/>})} */}
        <img src={`data:image/png;base64,${base64String}`} alt=""/>
        <button className='detailbutton' onClick={()=>imagepopup(true)}>Add photo</button>
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
    {profileilmgenable && <div className='profileupdatediv'>
      <input type="file" onChange={imagesave}></input>
      <div> <button className='detailsbutton' onClick={fetchimage}>Close</button><button className='detailsbutton' onClick={uploadimage}>Upload</button></div>
    </div>}
    </div>
  )
}

export default Profile