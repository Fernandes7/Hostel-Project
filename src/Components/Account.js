import React from 'react'
import { useLocation } from 'react-router'
import "./Account.css"
function Account() {
  const userdata=useLocation()
  console.log("look",userdata)
  return (
    <div>Account</div>
  )
}

export default Account