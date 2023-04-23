import "./Selectedhostel.css"
import {useLocation} from "react-router-dom"
import Map from './Map'
function Selectedhotel() {
  const data=useLocation()
  console.log("mappeddata",data.state)
  return (
    <div className="selectmaindiv">
     <Map hostel={data.state.hostel} /> 
   </div>
  )
}

export default Selectedhotel