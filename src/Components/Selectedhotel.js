import "./Selectedhostel.css"
import {useLocation} from "react-router-dom"
import Map from './Map'
function Selectedhotel() {
  const data=useLocation()
  console.log("mappeddata",data.state)
  return (
    <div className="selectmaindiv">
    <img className="selectedbgimg" src="https://images.unsplash.com/photo-1633505650701-6104c4fc72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="imagesbg"></img>
    <div className="selectmaindivfistinner">
    <div className="selectmainleftmain"> <Map hostel={data.state.hostel} /> </div>
    <div className="selectmainrightmain"></div>
    </div>
   </div>
  )
}

export default Selectedhotel