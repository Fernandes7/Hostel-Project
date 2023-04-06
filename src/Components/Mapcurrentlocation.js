import { useEffect, useState } from 'react'
function Mapcurrentlocation() {
  const [location,setLocation]=useState({
    loaded:false,
    coordinates:{lan:"",lng:""}
  })
  const onSuccess=location=>{
  setLocation({
    loaded:true,
    coordinates:{lat:location.coords.latitude,lng:location.coords.longitude}
  })
  }
  const onError=error=>{
    setLocation({
        loaded:true,
        error,
      })
  }
  useEffect(()=>{
  if(!("geolocation" in navigator)){
    onError({
        code:0
    })
  }
  navigator.geolocation.getCurrentPosition(onSuccess,onError)
  },[])
  return location
}

export default Mapcurrentlocation