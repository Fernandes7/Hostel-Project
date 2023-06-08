import React from 'react'
import "./AdminPage.css"
import { useNavigate } from 'react-router'
import axios from 'axios'
function AdminPage() {
  const history=useNavigate()
  const bookfunction=()=>{
    axios.get("http://localhost:8000/allbooking").then((responce)=>{
      history("/adminviewbooking",{state:{data:responce.data}})
    })
  }
  return (
    <div className='adminpagemaindiv'>
    <div className='wrapadmin'>
    <h2 className='adminh1'>Admin Page</h2>
    <div className='flexofadmin'>
    <div onClick={()=>history("/admin")} className='adminbutton'>Add Hostel</div>
    <div onClick={bookfunction} className='adminbutton'>View Bookings</div>
    <div onClick={()=>history("/admin")} className='adminbutton'>View User</div>
    <div onClick={()=>history("/admin")} className='adminbutton'>View Hostel</div>
    </div>
    </div>
    </div>
  )
}

export default AdminPage