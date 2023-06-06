import "./Selectedhostel.css"
import {useLocation, useNavigate} from "react-router-dom"
import {BsPerson} from "react-icons/bs"
import {GiHandheldFan} from "react-icons/gi"
import {GoLocation} from "react-icons/go"
import {GrPhone} from "react-icons/gr"
import {IoBedOutline} from "react-icons/io5"
import { GoPerson } from "react-icons/go"
import Map from './Map'
import { useState } from "react"
import axios from "axios"
import ReactSwitch from "react-switch"
function Selectedhotel() {
  const history=useNavigate()
  const data=useLocation()
  const [togglecheckarray,setTogglecheckarray]=useState([])
  const [enableservice,setEnableservice]=useState(false)
  const [hostelprice,setHostelPrice]=useState(data.state.hostel.price)
  const [enablebooking,setEnablebooking]=useState(false)
  const [bookingdata,setBookingdata]=useState({Bookeduserid:"",Bookedhostelid:"",Noofrooms:""})
  const [Noofroom,setNoofroom]=useState(1)
  const amenty=data.state.hostel.amenities.split(",")
  const nearbyplace=["Kadamakudi View Point","Salt Resturent","Bus Stand","Edappaly Church","Kochi Metro Rail"]
  const services=["iron","wash","food"]
  console.log("mappeddata",data.state)
  const bookingfunction=()=>{
  setEnableservice(false)
  setEnablebooking(true)
  setBookingdata({Bookeduserid:data.state.user._id,Bookedhostelid:data.state.hostel,Noofrooms:Noofroom,Bookingprice:hostelprice,customise:data.state.hostel.price===hostelprice ?false :true})
  }
  const servicefunction=()=>{
  setEnableservice(true) 
  setEnablebooking(false)
  }
  const increment=()=>{
    if(Noofroom<4)
    setNoofroom(Noofroom+1)
    setBookingdata({...bookingdata,Noofrooms:Noofroom<4 ? Noofroom+1: Noofroom})
  }
  const decrement=()=>{
    if(Noofroom>1)
    setNoofroom(Noofroom-1)
    setBookingdata({...bookingdata,Noofrooms:Noofroom>1 ?Noofroom-1:Noofroom})
  }
  const togglehandle=(key,item)=>{
    if(togglecheckarray.includes(key))
    {
      setTogglecheckarray(togglecheckarray.filter((item)=>item!==key))
      if(item==="iron")
      setHostelPrice(hostelprice+data.state.hostel.noironing)
      if(item==="wash")
      setHostelPrice(hostelprice+data.state.hostel.nowash)
      if(item==="food")
      setHostelPrice(hostelprice+data.state.hostel.nofood)
    }
    else
    {
      setTogglecheckarray([...togglecheckarray,key])
      if(item==="iron")
      setHostelPrice(hostelprice-data.state.hostel.noironing)
      if(item==="wash")
      setHostelPrice(hostelprice-data.state.hostel.nowash)
      if(item==="food")
      setHostelPrice(hostelprice-data.state.hostel.nofood)
      console.log('price',hostelprice)
    }
  }
  const conformbookingfunction=()=>{
    console.log("bookdata",bookingdata)
    if(data.state.user.contactno)
    {
    axios.post("http://localhost:8000/addbooking",{data:bookingdata}).then((responce)=>{
      console.log(responce.data)
      if(responce.data===2)
      alert("You cannot Book More than 2 hostels from a Account")
      else {
      if(responce.data==="Failed")
      alert("Failed To Book Hostel")
      else
      history("/booksuccess",{state:{data:data.state}})
    }
    })
    }
    else
    {
    alert("Please Fill the Your details in Profile ,Then Book the Hostel")
    history("/profileupdate",{state:{profile:data.state.user}})
    }
  }
  const customisefunction=()=>{
    setEnableservice(false)
  }
  return (
    <div className="selectmaindiv">
    <img className="selectedbgimg" src="http://www.wallpaperup.com/uploads/wallpapers/2013/07/16/119325/7b375e1b4e908d53fd1b53394bb31832.jpg" alt="imagesbg"></img>
    <div className="selectmaindivfistinner">
    <div className="selectmainleftmain">
    <div>
    <p className="amenityheadingp">Amenities we provides.....</p>
    <div className="amenitymaindiv">
    {amenty.map((item)=>{
      if(item==="Wifi")
      return(
        <div className="amenitydiv">
          <img src="https://cdn-icons-png.flaticon.com/128/747/747982.png" alt="wifi"></img>
          <p>Wifi</p>
        </div>
      )
      else if(item==="Ac")
      return(
        <div className="amenitydiv">
          <img src="https://cdn-icons-png.flaticon.com/128/911/911409.png" alt="wifi"></img>
          <p>Ac</p>
        </div>
      )
      else if(item==="Gym")
      return(
        <div className="amenitydiv">
          <img src="https://cdn-icons-png.flaticon.com/128/2871/2871250.png" alt="wifi"></img>
          <p>Gym</p>
        </div>
      )
      else if(item==="Power Bank")
      return(
        <div className="amenitydiv">
          <img src="https://cdn-icons-png.flaticon.com/128/10820/10820540.png" alt="wifi"></img>
          <p>PowerBank</p>
        </div>
      )
      else if(item==="food")
      return(
        <div className="amenitydiv">
          <img src="https://cdn-icons-png.flaticon.com/128/10896/10896146.png" alt="wifi"></img>
          <p>Homely food</p>
        </div>
      )
    })}</div></div>
    <div className="contentdivofselect">
    <div className="contentdivofselectleft">
      <h3>{data.state.hostel.hostelname}</h3>
      <div className="contentsubflexdiv">
      <GoLocation/>
      <p className="contentdivofselectleftp">{data.state.hostel.mainlocation}</p>
      </div>
      <div className="contentsubflexdiv">
      <IoBedOutline />
      <p className="contentdivofselectleftp">BedType: Single</p>
      </div>
      <p className="descriptionpofselect">{data.state.hostel.description}</p>
    </div>
    <div className="contentdivofselectright">
      <div className="contentsubflexdiv">
        <GrPhone />
        <p className="contentdivofselectleftp">7025059876</p>
      </div>
      <div className="contentsubflexdiv">
        <GoPerson />
        <p className="contentdivofselectleftp">Owner:Unknown</p>
      </div>
    </div>
    <p className="policyp">Read the Hostel Policy Before Booking........</p>
    <p className="policypt">To Read Click View service</p>
    </div>
    <Map hostel={data.state.hostel} /> 
    <div className="maprightdiv">
     <h3 className="nearbyh3">Nearby Places.......</h3>
     <div>
      <ul>
        {nearbyplace.map((item)=>{
          return(
            <li className="nearbyli">{item}</li>
          )
        })}
      </ul>
     </div>
    </div>
    </div>
    <div className="selectmainrightmain">
      <img src={data.state.hostel.hostelimage} alt="hostelimage"></img>
      <div className="selectimagetextdiv"><h3>Explore the way of Living</h3>
      <p>Lets Stay peace</p>
      </div>
      <h5 className="subimageheading">Take a Look on the Service</h5>
      <div className="wrapofhostelserviceimagesectiondiv">
      <div className="hostelserviceimagesectiondiv">
        <img src="https://www.christinacooks.com/wp-content/uploads/2021/01/soba_noodles_with_chrispy_seitan_and_vegetables_lt.jpg" alt="imagesservisec"></img>
        <div className="selectionimagecontent"><h4>Food and Beverage</h4>
        <p>Healty food shared with love and peace with Varety of Features</p>
      </div>
      </div>
      <div className="hostelserviceimagesectiondiv">
        <img src="http://www.zastavki.com/pictures/1920x1200/2012/Interior_Hotel_Room_033155_.jpg" alt="imagesservisec"></img>
        <div className="selectionimagecontent"><h4>Bed Rooms Feature</h4>
        <p>Healty food shared with love and peace with Varety of Features</p>
      </div>
      </div>
    </div>
    <div className="line"></div>
    <div className="selctedhotelpricemaindiv">
      <div className="booksmalldiv">
      <h3>Rs {hostelprice} Rs/Month</h3>
      <p>Including All Taxes</p> 
      {hostelprice!==data.state.hostel.price && <p className="servicecust">Services Customized Price</p>}
      </div>
      <div className="booksmalldivleft">
      <div><BsPerson />
       <p>Men</p></div>
       <div><GiHandheldFan/>
       <p>Ac</p></div>
      </div>
    </div>
    <p className="sustimizetext" onClick={servicefunction}>View Service or Customize</p>
    <button className="Bookingbutton" onClick={bookingfunction}>Book Now</button>
    </div>
   </div>
   {enableservice && <div className="divofviewservice">
    <div className="serviceborder">
    <img src="https://cdn-icons-png.flaticon.com/128/2732/2732657.png" alt="close"onClick={()=>setEnableservice(false)} className="serviceborderimg"></img>
    <div>
    <h3 className="customizehead">Customize services</h3>
    <p className="pofcustomixe">Select the Option that you need</p>
    {services.map((item,key)=>{
      if(item==="iron")
      return(
      <div className="cutomizeoptdiv">
     <div className="warpofeachservice">
      <img src="https://cdn-icons-png.flaticon.com/128/79/79677.png" alt="service" className="imageserviceofdiv"></img>
      <p className="ptag">Irons</p>
      <ReactSwitch checked={togglecheckarray.includes(key)?false :true}  onChange={()=>togglehandle(key,item)}className="toggle" key={key}/>
     </div>
     <p className="reductionp">Reduction -{data.state.hostel.noironing}rs/month</p>
    </div>
      )
      else if(item==="food")
      return(
      <div className="cutomizeoptdiv">
     <div className="warpofeachservice">
      <img src="https://cdn-icons-png.flaticon.com/128/79/79677.png" alt="service" className="imageserviceofdiv"></img>
      <p className="ptag">Food</p>
      <ReactSwitch checked={togglecheckarray.includes(key)?false :true}  onChange={()=>togglehandle(key,item)} className="toggle" key={key}/>
     </div>
     <p className="reductionp">Reduction -{data.state.hostel.nofood}rs/month</p>
    </div>
      )
      else
      return(
        <div className="cutomizeoptdiv">
     <div className="warpofeachservice">
      <img src="https://cdn-icons-png.flaticon.com/128/79/79677.png" alt="service" className="imageserviceofdiv"></img>
      <p className="ptag">wash</p>
      <ReactSwitch checked={togglecheckarray.includes(key)?false :true}  onChange={()=>togglehandle(key,item)} className="toggle" key={key}/>
     </div>
     <p className="reductionp">Reduction -{data.state.hostel.nowash}rs/month</p>
    </div>
      )
    })}
    </div>
    <p className="priceinadjust">Customised Price :{hostelprice}rs/Month</p>
    <button className="conformservicebutton" onClick={customisefunction}>Conform Customise Services</button>
    </div>
   </div>}
   {enablebooking && <div className="bookingenablediv">
   <img src="https://cdn-icons-png.flaticon.com/128/10613/10613604.png" alt="images" className="closeofbook" onClick={()=>setEnablebooking(false)}></img>
   <img src={data.state.hostel.hostelimage} alt="images" className="bookimage"></img>
   <h3>{data.state.hostel.hostelname}</h3>
   <div className="bookingenableinnerflex">
   <h4>Price {hostelprice} Rs/Month</h4>
   <p>{data.state.hostel.location}</p>
   </div>
   <div className="counterdiv">
   <p>No of Rooms to Book:</p>
   <button onClick={decrement}>-</button>
   <h3>{Noofroom}</h3>
   <button onClick={increment}>+</button>
   </div>
   <button className="conformbookingbutton" onClick={conformbookingfunction}>Conform Booking</button>
   </div>}
   </div>
  )
}

export default Selectedhotel