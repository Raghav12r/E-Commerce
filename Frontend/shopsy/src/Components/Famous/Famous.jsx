import React, { useEffect, useState } from 'react'
import './Famous.css'
import Items from '../Items/Items'

function Famous() {
  const [popular,setPopular]=useState([]);
  useEffect(()=>{
     fetch('http://localhost:8000/popularinwomen').then((res)=>res.json()).then((data)=>setPopular(data))
  },[])
  return (
    <div className='famous'>
         <h1>Popular in Women</h1>
         <hr/>
         <div className="famousitem">
               {popular.map((item,i)=>( 
                   <Items key={i} id={item.id} title={item.title} price={item.price} old_price={item.old_price} category={item.category} image={item.image}/> 
              ))}
         </div>
    </div>
  )
}

export default Famous
