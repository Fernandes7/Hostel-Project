import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import "./Displayhostel.css"
function Displayhostel(props) {
const history =useNavigate()
const [datas,setDatas]=useState([""])
const [filterenable,setFilterenable]=useState(false)
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
      <div className='hostelwrap' onClick={()=>history("/sh",{state:{id:props.userid.data._id}})}>
        <img src={item.hostelimage} alt="img"></img>
        <div className='hostelcontent'>
        <h3>{item.hostelname}</h3>
        <p>{item.description}</p>
        <h4>Rate {item.price}</h4>
        </div>
      </div>
    </div>
  )
})
const filter=()=>{
setFilterenable(true)
console.log("here go")
}
const close=()=>{
  setFilterenable(false)
  console.log("close")
}
  return (
    <div className='displaymain'>
    <div className='displayoptions'>
    <p className='resulttext'>Results Shown ........</p>
    <div className='displaybuttondiv'>
      <button onClick={filter}>Filter</button>
      <button>Sort</button>
    </div>
    </div>
    {filterenable &&<div className='filterdiv'></div>}
    <div className='hostelrow'onClick={close}>{hostel}</div>
    </div>
  )
}

export default Displayhostel