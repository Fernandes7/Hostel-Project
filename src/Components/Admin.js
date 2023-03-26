import axios from 'axios'
import React, { useState } from 'react'
import "./Admin.css"
function Admin() {
  const [data,setdata]=useState({})
  const handle=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
  const submit=()=>{
    axios.post("http://localhost:8000/addhostel",{data}).then((responce)=>{
        console.log(responce)
    })
  }
  return (
    <div className='main'>
        <div className='adminwrap'>
        <h3>HOSTELS DATA</h3>
        <input type="text" placeholder="Hostel name" name="hostelname" onChange={handle}></input>
        <input type="text" placeholder="Hostel image" name="hostelimage" onChange={handle}></input>
        <input type="text" placeholder="Hostel location" name="location" onChange={handle}></input>
        <input type="text" placeholder="Main Loction" name="mainlocation" onChange={handle}></input>
        <input type="number" placeholder="Cost per month" name="price" onChange={handle}></input>
        <input type="number" placeholder="Cost without food" name="pricewithoutfood" onChange={handle}></input>
        <input type="text" placeholder="hosteltype eg:Men or Women" name="hosteltype" onChange={handle}></input>
        <input type="number" placeholder="No of members in room" name="noofmembersinroom" onChange={handle}></input>
        <input type="text" placeholder="Description" name="description" onChange={handle}></input>
        <input type="text" placeholder="Ownername" name="ownername" onChange={handle}></input>
        <input type="number" placeholder="Contact no" name="contactno" onChange={handle}></input>
        <input type="text" placeholder="Amenities" name="amenities" onChange={handle}></input>
        <input type="text" placeholder="Services eg:washing Ironing etc" name="service" onChange={handle}></input>
        <input type="text" placeholder="Near By Places" name="nearbyplace" onChange={handle}></input>
        <input type="text" placeholder="Caterory eg:Single room or Combined room" name="category" onChange={handle}></input>
        <input type="number" placeholder="No of availablerooms" name="Availableroom" onChange={handle}></input>
    </div>
    <button onClick={submit}>SUBMIT</button>
    </div>
  )
}

export default Admin