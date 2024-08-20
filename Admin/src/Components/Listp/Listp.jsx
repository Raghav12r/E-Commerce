import React, { useEffect, useState } from 'react'
import './Listp.css'
import CloseIcon from '@mui/icons-material/Close';

function Listp() {

  const [wholedata, setwholedata] = useState([]);

  const fetchapi = async () => {
    await fetch('http://localhost:8000/allitems').then((res) => res.json()).then((data) => { setwholedata(data) });
  }

  useEffect(() => {
    fetchapi();
  }, [])

  const remove=async(id)=>{
         await fetch('http://localhost:8000/deleteproduct',{
               method:'POST',
               headers:{
                   Accept:'application/json',
                   'Content-type':'application/json'
               },
               body:JSON.stringify({id:id})
         })
         await fetchapi();
  }
  return (
    <div className='listp'>
      <h1>Products List</h1>
      <div className="main-listp">
        <p>Products</p>
        <p>Title</p>
        <p>Old_Price</p>
        <p>Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="all-listp">
        <hr />
        {wholedata.map((item, i) => {
          return <>
            <div key={i} className="main-listp api-listp">
              <img src={item.image} alt='' />
              <p>{item.title}</p>
              <p>${item.old_price}</p>
              <p>${item.price}</p>
              <p>{item.category}</p>
              <div onClick={()=>{remove(item.id)}} >
                <CloseIcon />
              </div>
            </div>
            <hr/>
          </>
        })}
      </div>
    </div>
  )
}

export default Listp
