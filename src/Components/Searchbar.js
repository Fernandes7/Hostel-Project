import React, { useState } from 'react'
import {searchdata} from "./Searchdata"
import "./Searchbar.css"
function Searchbar(props) {
  const [searchitem,setSearchitem]=useState("")
  const [selected,setSelected]=useState()
  const search=()=>{
  props.setLocation(selected)
  setSearchitem("")
  setSelected("")
  }
  return (
    <div className='mainbody'>
       <div className='searchbar'>
        <input type="text" placeholder="search here" value={selected ? selected : searchitem} onChange={(e)=>setSearchitem(e.target.value)}></input>
        <button onClick={search}>Search</button>
        {searchdata.filter((item)=>{
            const data=item.toLowerCase();
            const inputdata=searchitem.toLowerCase();
            return inputdata && data.startsWith(inputdata)
        }).map((item)=><p className='options' key={item} onClick={()=>setSelected(item)}>{item}</p>)}
        </div>
    </div>
  )
}

export default Searchbar