import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import "./Displayhostel.css"
function Displayhostel(props) {
const history =useNavigate()
const [datas,setDatas]=useState([""])
useEffect(()=>{
axios.get("http://localhost:8000/fetchhotel").then((responce)=>{
  console.log(responce.data)
  setDatas(responce.data)
})
},[])
let hostel=datas.filter((data)=>{
  return data.mainlocation===props.location
}).map((item)=>{
  return(
    <div className='hostelmaindiv'>
      <div className='hostelwrap' onClick={()=>history("sh",{state:{id:props.userid.data._id}})}>
        <img src={item.hostelimage} alt="img"></img>
        <div className='hostelcontent'>
        <h3>{item.hostelname}</h3>
        <p>{item.description}</p>
        <h4>Rs {item.price}</h4>
        </div>
      </div>
    </div>
  )
})
  return (
    <div>
    <div className='hostelrow'>{hostel}</div>
    </div>
  )
}

export default Displayhostel