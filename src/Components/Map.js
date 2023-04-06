import React, { useState } from 'react'
import {MapContainer,Marker,Popup,TileLayer} from "react-leaflet"
import "./Map.css"
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'
import Mapcurrentlocation from './Mapcurrentlocation'
import MapRouting from './MapRouting'
import L from "leaflet"
function Map() {
  const [currentlocationenable,setCurrentlocationenable]=useState(false)
  const icon=new Icon({
    iconUrl:"https://cdn-icons-png.flaticon.com/512/5836/5836608.png",
    iconSize:[40,40]
  })
  const currentloactionicon=new Icon({
    iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize:[40,40]
  })
  const location=Mapcurrentlocation()
  return (
    <div>
    <MapContainer center={[10.310789,76.160004]} zoom={10} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[10.347100,76.216698]} icon={icon}>
    <Popup>
      <p className='mappopupcontent'>Chakkara Hostel</p>
    </Popup>
  </Marker>
  {currentlocationenable && location.loaded && !location.error &&(
    <Marker position={[location.coordinates.lat,location.coordinates.lng]} icon={currentloactionicon}></Marker>
  )}
  {currentlocationenable &&<MapRouting ></MapRouting>}
</MapContainer>
<button onClick={()=>currentlocationenable ? setCurrentlocationenable(false):setCurrentlocationenable(true)}>See Your location</button>
    </div>
  )
}
let defaulticon=L.icon({
  iconUrl:"https://cdn-icons-png.flaticon.com/512/5836/5836608.png",
  iconSize:[40,40]
})
L.Marker.prototype.options.icon=defaulticon
export default Map