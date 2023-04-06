import  { useEffect } from 'react'
import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { useMap } from 'react-leaflet'
function MapRouting() {
    const map=useMap()
    useEffect(()=>{
        L.Routing.control({
            waypoints:[
                L.latLng(10.310789,76.160004),
                L.latLng(10.347100,76.216698)
            ],
            lineOptions:{
                styles:[{
                    color:"blue"
                }]
            }
        },[]).addTo(map)
    })
  return null
}

export default MapRouting