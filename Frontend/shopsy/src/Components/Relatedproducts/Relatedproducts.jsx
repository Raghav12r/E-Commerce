import React, { useContext } from 'react'
import './Relatedproducts.css'
import Items from '../Items/Items'
import { ShopContext } from '../../Context/Context'

function Relatedproducts() {
  const {itemdata}=useContext(ShopContext);
  return (
    <div className='relatedproducts'>
         <h1>Related Products</h1>
         <hr/>
         <div className="reloptions">
             {
                itemdata.map((item,i)=>{
                    return <Items key={i} id={item.id} title={item.title} price={item.price} image={item.image} old_price={item.old_price}/>
                })
             }
         </div>
    </div>
  )
}

export default Relatedproducts
