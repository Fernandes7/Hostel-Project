import React from 'react'
import { useNavigate } from 'react-router'
function Displayhostel(props) {
  const history =useNavigate()
  return (
    <div>
        <button>Filter</button>
        <button>sort</button>
        <h3>Display Hostels in {props.location}</h3>
        <h2 onClick={()=>history("sh",{state:{id:props.userid.data._id}})}>clickme</h2>
    </div>
  )
}

export default Displayhostel