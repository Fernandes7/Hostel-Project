import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import {GoLocation} from "react-icons/go"
import {FaRegHeart,FaHeart} from "react-icons/fa"
import {BsPerson} from "react-icons/bs"
import {GiHandheldFan} from "react-icons/gi"
import "./Displayhostel.css"
function Displayhostel(props) {
const history =useNavigate()
const [datas,setDatas]=useState([""])
const [filterenable,setFilterenable]=useState(false)
const [sortenable,Setsortenable]=useState(false)
const [options,setOptions]=useState({})
const [sorted,setSorted]=useState()
const [displaysort,setDisplaysort]=useState(false)
const [favdatarray,setFavdataarray]=useState([])
const [favdivenable,setFavdiv]=useState(false)
const [fetchedfavdata,setFecthedfavdata]=useState()
useEffect(()=>{
axios.get("http://localhost:8000/fetchhotel").then((responce)=>{
  console.log(responce.data)
  setDatas(responce.data)
})
},[])
const handle=(e)=>{
  setOptions({...options,[e.target.name]:e.target.value})
}
const favdivfunction=()=>{
  setFavdiv(true)
  axios.get(`http://localhost:8000/fetchfavhotel/${props.userid.data._id}`).then((responce)=>{
    console.log("favdata",responce)
    setFecthedfavdata(responce.data)
  })
}
const addfavid=async(item)=>{
favdatarray.includes(item._id) ?setFavdataarray(favdatarray.filter((value)=>value!==item._id)):setFavdataarray([...favdatarray,item._id])
axios.post(`http://localhost:8000/favhotel/${props.userid.data._id}`,{data:[item._id]}).then((responce)=>console.log("backs",responce))
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
  if(item.Availableroom>1)
  return(
    <div className='hostelmaindiv'>
      <div className='hostelwrap'>
        <img src={item.hostelimage} alt="img"></img>
        <div className='hostelcontent' onClick={()=>history("/sh",{state:{user:props.userid.data,hostel:item}})}>
        <h3>{item.hostelname}</h3>
        <p>{item.description}</p>
        <div className='locationcontentdiv'>
        <div><GoLocation />
        <p className='locationcontent'>{item.location}</p>
        </div>
        <p className='ptagfordistancefrommainloaction'>42km from {item.mainlocation}</p>
        </div>
        <div className='ratewithfavdiv'>
        <h4 onClick={()=>console.log("pleaseeelookhere",favdatarray)}>Rate {item.price} Rs/Month</h4>
        <div>
        <GiHandheldFan />
        <p>{item.Ac}</p>
        <BsPerson />
        <p>{item.hosteltype}</p>
        </div>
        </div>
        </div>
        {favdatarray.includes(item._id)?<FaHeart onClick={()=>addfavid(item)}/>:<FaRegHeart onClick={()=>addfavid(item)}/>}
      </div>
    </div>
  )
  else
  return(
  <div className='hostelmaindiv'>
  <div className='hostelwrap'>
    <img src={item.hostelimage} alt="img"></img>
    <div className='hostelcontent'>
    <div className='unavilablewrap'></div>
    <h4 className='unvalibleh4content'>Currently Unaviable</h4>
    <h3>{item.hostelname}</h3>
    <p>{item.description}</p>
    <div className='locationcontentdiv'>
        <div><GoLocation />
        <p className='locationcontent'>{item.location}</p>
        </div>
        <p className='ptagfordistancefrommainloaction'>42km from {item.mainlocation}</p>
        </div>
    <h4>Rate {item.price}Rs/Month</h4>
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
}
let sorteddata;
const sort=(no)=>{
 sorteddata=hostelarray.sort((a,b)=>a.price>b.price ?  no===1 ? 1:-1 : no===1 ? -1:1)
 let sorteddisplay=(sorteddata).map((item)=>{
    return(
      <div className='hostelmaindiv'>
        <div className='hostelwrap' onClick={()=>history("/sh",{state:{user:props.userid.data,hostel:item}})}>
          <img src={item.hostelimage} alt="img"></img>
          <div className='hostelcontent'>
          <h3>{item.hostelname}</h3>
          <p>{item.description}</p>
          <div className='locationcontentdiv'>
          <div><GoLocation />
          <p className='locationcontent'>{item.location}</p>
          </div>
          <p className='ptagfordistancefrommainloaction'>42km from {item.mainlocation}</p>
          </div>
          <div className='ratewithfavdiv'>
          <h4>Rate {item.price}Rs/Month</h4>
          <div>
        <GiHandheldFan />
        <p>{item.Ac}</p>
        <BsPerson />
        <p>{item.hosteltype}</p>
        </div>
        </div>
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
      <button onClick={favdivfunction}>Liked</button>
      <button onClick={filter}>Sort</button>
      <button onClick={sortfunction}>Filter</button>
    </div>
    </div>
      <div className={filterenable ?'filterdiv':'filterdivoff'}>
      <h3>Price</h3>
      <p onClick={()=>sort(1)}>Low to High</p>
      <p onClick={()=>sort(2)}>High to Low</p>
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
    {favdivenable && <div className='favdivwrap'>
    <img src="https://cdn-icons-png.flaticon.com/256/10449/10449858.png" className='closeoffavimage' onClick={()=>setFavdiv(false)} alt="close"></img>
      {fetchedfavdata ? fetchedfavdata.map((item)=>{
        return(
          <div className='divofmappedfavdata'>
            <img src={item.hostelimage} alt="images"></img>
            <div>
              <h3>{item.hostelname}</h3>
              <h6>Rs {item.price}/Month</h6>
            </div>
          </div>
        )
      }):<h5 className='deafultfavtext'>You Currenty Didnt have Favorite Hostel</h5>}
    </div>}
    </div>
  )
}

export default Displayhostel