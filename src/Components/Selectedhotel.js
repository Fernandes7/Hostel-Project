import "./Selectedhostel.css"
import {useLocation} from "react-router-dom"
import {BsPerson} from "react-icons/bs"
import {GiHandheldFan} from "react-icons/gi"
import Map from './Map'
function Selectedhotel() {
  const data=useLocation()
  console.log("mappeddata",data.state)
  return (
    <div className="selectmaindiv">
    <img className="selectedbgimg" src="http://www.wallpaperup.com/uploads/wallpapers/2013/07/16/119325/7b375e1b4e908d53fd1b53394bb31832.jpg" alt="imagesbg"></img>
    <div className="selectmaindivfistinner">
    <div className="selectmainleftmain"> <Map hostel={data.state.hostel} /> </div>
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
      <h3>Rs {data.state.hostel.price}/Month</h3>
      <p>Including All Taxes</p>
      </div>
      <div className="booksmalldivleft">
      <div><BsPerson />
       <p>Men</p></div>
       <div><GiHandheldFan/>
       <p>Ac</p></div>
      </div>
    </div>
    <p className="sustimizetext">View Service or Customize</p>
    <button className="Bookingbutton">Book Now</button>
    </div>
   </div>
   </div>
  )
}

export default Selectedhotel