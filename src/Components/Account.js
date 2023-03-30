import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import "./Account.css"
import Displayhostel from './Displayhostel'
import Searchbar from './Searchbar'
function Account() {
  const userdata=useLocation()
  const [location,setLocation]=useState("")
  return (
    <div>
      <h1>Account</h1>
      <Searchbar setLocation={setLocation} />
      {location ? <Displayhostel location={location} userid={userdata.state}/> : <h3>No selected</h3>}
      <Outlet />
    </div>
  )
}

export default Account