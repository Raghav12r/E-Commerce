import React, { useContext } from 'react'
import './Fullinfo.css'
import GradeIcon from '@mui/icons-material/Grade';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { ShopContext } from '../../Context/Context';

function Fullinfo({product}) {
  const {addtocart}=useContext(ShopContext);
  return (
    <div className='fullinfo'>
       <div className="fullinfoleft">
             <div className="multiimage">
                <img src={product.image} alt=''></img>
                <img src={product.image} alt=''></img>
                <img src={product.image} alt=''></img>
                <img src={product.image} alt=''></img>
             </div>
             <div className="mainimage">
                  <img src={product.image} alt=''></img>
             </div>
       </div>
       <div className="fullinforight">
            <h1>{product.title}</h1>
            <div className="rating">
                 <GradeIcon/>
                 <GradeIcon/>
                 <GradeIcon/>
                 <GradeIcon/>
                 <StarHalfIcon/>
            </div>
            <div className="prices">
                <div className="old">{product.old_price ? '$' : <></>}{product.old_price ? product.old_price : <> </>}</div>
                <div className="new">${product.price}</div>
            </div>
            <div className="size">
                <h1>Select Size</h1>
                <div className="select">
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    <p>XL</p>
                    <p>XXL</p>
                </div>
            </div>
            <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
       </div>
    </div>
  )
}

export default Fullinfo
