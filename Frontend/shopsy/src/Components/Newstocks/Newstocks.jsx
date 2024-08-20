import React, { useEffect, useState } from 'react'
import './Newstocks.css'
import newst from '../Assets/stocks'
import Items from '../Items/Items'

function Newstocks() {
  const [newst,setNewst]=useState([]);
  useEffect(()=>{
      fetch('http://localhost:8000/latest').then((res)=>res.json()).then((data)=>setNewst(data))
  },[]);
  return (
    <div className='stocks'>
        <h1>New Collections</h1>
        <div className="newstocks">
            {newst.map((item,i)=>{
                return <Items  key={i} id={item.id} title={item.title} price={item.price} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default Newstocks
