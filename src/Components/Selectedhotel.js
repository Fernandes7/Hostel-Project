import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import { Usercontext } from './Usercontext'
function Selectedhotel() {
  const {userid,Setuserid}=useContext(Usercontext)
  const id=useLocation()
  const value=userid
  return (
    <div>Selectedhotel
    <h1>{value}</h1>
    <h2>{id.state.id}</h2></div>
  )
}

export default Selectedhotel