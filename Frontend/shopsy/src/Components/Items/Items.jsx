import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

function Items(props) {
  return (
   
    <div className='item'>
        
         <Link to={`/product/${props.id}`}><img className='imge' onClick={window.scrollTo(0,0)} src={props.image} alt='jekj'></img></Link>
         <p>{props.title}</p>
         <div className="price">
             ${props.price}
         </div>
    </div>
  )
}

export default Items
