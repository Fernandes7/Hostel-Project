import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import "./Displayhostel.css"
function Displayhostel(props) {
const history =useNavigate()
const [datas,setDatas]=useState([""])
const [filterenable,setFilterenable]=useState(false)
const [sorted,setSorted]=useState()
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
      <div className='hostelwrap' onClick={()=>history("/sh",{state:{user:props.userid.data,hostel:item}})}>
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
let sorteddata;
const sort=(no)=>{
 sorteddata=datas.filter((data)=>{
    return data.mainlocation===props.location
  }).sort((a,b)=>a.price>b.price ?  no===1 ? 1:-1 : no===1 ? -1:1)
 let sorteddisplay=sorteddata.map((item)=>{
    return(
      <div className='hostelmaindiv'>
        <div className='hostelwrap' onClick={()=>history("/sh",{state:{user:props.userid.data,hostel:item}})}>
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
  props.setSortenable(true)
  setSorted(sorteddisplay)
}
  return (
    <div className='displaymain'>
    <div className='displayoptions'>
    <p className='resulttext'>Results Shown ........</p>
    <div className='displaybuttondiv'>
      <button onClick={filter}>Sort</button>
      <button>Filter</button>
    </div>
    </div>
      <div className={filterenable ?'filterdiv':'filterdivoff'}>
      <p onClick={()=>sort(1)}>Low to High</p>
      <p onClick={()=>sort(2)}>High to Low</p>
    </div>
    <div className='hostelrow'onClick={close}>{props.sortenable ? sorted : hostel}</div>
    </div>
  )
}

export default Displayhostel