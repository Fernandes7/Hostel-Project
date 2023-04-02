import React, { useState } from 'react'
import "./Profileupdate.css"
import { useLocation } from 'react-router'
function Profileupdate() {
  const profile=useLocation()
  const [updateddata,setUpdateddata]=useState({})
  const [name,setName]=useState(profile.state.profile)
  const handle=(event)=>{
  setName({[event.target.name]:event.target.value})
  setUpdateddata({...updateddata,[event.target.name]:event.target.value})
  }
  const update=()=>{
    console.log(updateddata)
  }
  return (
    <div className='updatewrap'>
    <img src="https://img.jamesedition.com/listing_images/2023/02/21/12/32/36/0236076f-4269-443b-acdb-2b82c87730de/je/1000x620xc.jpg" alt="image"></img>
        <div className='updatemain'>
            <h4>UPDATE ACCOUNT</h4>
            <input type="text" placeholder="Enter New name" value={name.username} name="username" onChange={handle}></input>
            <input type="text" placeholder="Enter New Email" value={name.email} name="email" onChange={handle}></input>
            <input type="number" placeholder="Enter New Mobile Number" value={name.contactno && name.contactno} name="contactno" onChange={handle}></input>
            <input type="number" placeholder="Enter Your Age" value={name.Age && name.Age} name="Age" onChange={handle}></input>
            <input type="text" name="Gender" placeholder='Male or Femail' value={name.Gender && name.Gender} onChange={handle}></input>
            <input type="text" placeholder="Enter New Address" value={name.Address} name="Address" onChange={handle}></input>
            <input type="text" placeholder="Enter Your Location" value={name.Place && name.Place} name="Place" onChange={handle}></input>
            <input type="text" placeholder="Student or Working" value={name.Status} name="Status" onChange={handle}></input>
            <input type="text" placeholder="Enter Your Collge or Company name" value={name.Workplace && name.Workplace} name="Workplace" onChange={handle}></input>
            <button onClick={update}>UPDATE AND SUBMIT</button>
        </div>
    </div>
  )
}

export default Profileupdate