import React from 'react'
import "./AdminPage.css"
import { useNavigate } from 'react-router'
function AdminPage() {
  const history=useNavigate()
  return (
    <div className='adminpagemaindiv'>
    <h1>Admin Page</h1>
    <button onClick={()=>history("/admin")}>Add Hostel</button>
    </div>
  )
}

export default AdminPage