import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import "./Displayhostel.css"
function Displayhostel(props) {
const history =useNavigate()
const [datas,setDatas]=useState([""])
const [filterenable,setFilterenable]=useState(false)
const [sortenable,Setsortenable]=useState(false)
const [options,setOptions]=useState({})
const [sorted,setSorted]=useState()
const [displaysort,setDisplaysort]=useState(false)
useEffect(()=>{
axios.get("http://localhost:8000/fetchhotel").then((responce)=>{
  console.log(responce.data)
  setDatas(responce.data)
})
},[])
const handle=(e)=>{
  setOptions({...options,[e.target.name]:e.target.value})
}
let hostelarray
hostelarray= !displaysort ? datas.filter((data)=>{
  return data.mainlocation===props.location
}): datas.filter((data)=>{
  if(options.Gender && options.Ac && options.Wifi)
  return data.mainlocation===props.location && data.hosteltype===options.Gender && data.Wifi===options.Wifi && data.Ac===options.Ac
  else if(options.Gender && options.Ac)
  return data.mainlocation===props.location && data.hosteltype===options.Gender && data.Ac===options.Ac
  else if(options.Gender && options.Wifi)
  return data.mainlocation===props.location && data.hosteltype===options.Gender && data.Wifi===options.Wifi
  else if(options.Gender)
  return data.mainlocation===props.location && data.hosteltype===options.Gender
  else if(options.Ac)
  return data.mainlocation===props.location && data.Ac===options.Ac
  else if(options.Wifi)
  return data.mainlocation===props.location && data.Wifi===options.Wifi
  else
  return data.mainlocation===props.location
  
})
let hostel=hostelarray.map((item)=>{
  if(item.Availableroom>10)
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
  else
  return(
  <div className='hostelmaindiv'>
  <div className='hostelwrap' onClick={()=>history("/sh",{state:{user:props.userid.data,hostel:item}})}>
    <img src={item.hostelimage} alt="img"></img>
    <div className='hostelcontent'>
    <h3>{item.hostelname}</h3>
    <p>{item.description}</p>
    <p>Currently Unavailable    </p>
    <h4>Rate {item.price}</h4>
    </div>
  </div>
</div>)
})
const filter=()=>{
setFilterenable(true)
console.log("here go")
}
const sortfunction=()=>{
  Setsortenable(true)
  setDisplaysort(false)
  console.log("options are",options)
  const cl=document.querySelectorAll(".radios")
  cl.forEach(value=>value.checked=false)
}
const filters=()=>{
  setDisplaysort(true)
  console.log("in opt",options)
}
const close=()=>{
  setFilterenable(false)
  Setsortenable(false)
  console.log("close")
}
let sorteddata;
const sort=(no)=>{
 sorteddata=hostelarray.sort((a,b)=>a.price>b.price ?  no===1 ? 1:-1 : no===1 ? -1:1)
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
      <button onClick={sortfunction}>Filter</button>
    </div>
    </div>
      <div className={filterenable ?'filterdiv':'filterdivoff'}>
      <p onClick={()=>sort(1)}>Low price to High</p>
      <p onClick={()=>sort(2)}>High price to Low</p>
    </div>
    {sortenable && <div className='sortdiv'>
      <div className='sorttoinnerdiv'>
        <p>Gender</p>
        <div><input type="radio" value="Men" name="Gender" onClick={handle} className='radios'></input><label>Male</label>
        <input type="radio" value="Women" name="Gender"  className='radios' onClick={handle}></input><label>Female</label></div>
      </div>
      <div className='sorttoinnerdiv'>
        <p>Wifi Availability</p>
        <div><input type="radio" name="Wifi" value="Free Wifi"  onClick={handle} className='radios'></input><label>Free Wifi</label>
        <input type="radio" name="Wifi" value=""  onClick={handle} className='radios'></input><label>Not Wifi</label></div>
      </div>
      <div className='sorttoinnerdiv'>
        <p>Ac Or Non Ac</p>
        <div><input type="radio" name="Ac" value="AC"  onChange={handle} className='radios'></input><label>Ac</label>
        <input type="radio" name="Ac" value="Non Ac"  onChange={handle} className='radios'></input><label>Non Ac</label>
        </div>
        <button type="submit" onClick={filters}>Set Filter</button>
      </div>
    </div>}
    <div className='hostelrow' onClick={close}>{props.sortenable ? sorted : hostel}</div>
    </div>
  )
}

export default Displayhostel