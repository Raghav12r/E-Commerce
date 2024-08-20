import React, { useContext } from 'react'
import './Insidecart.css'
import { ShopContext } from '../../Context/Context'
import CloseIcon from '@mui/icons-material/Close';

function Insidecart() {
  const { itemdata, cartdata, removefromcart,totalprice } = useContext(ShopContext);
  return (
    <div className='insidecart'>
      <div className="cartformat">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      {itemdata.map((e) => {
        if (cartdata[e.id] > 0) {
          return <div>
            <div className="insertdata cartformat">
              <img className='imagedata' src={e.image} alt='' />
              <p>{e.title}</p>
              <p>${e.price}</p>
              <p>{cartdata[e.id]}</p>
              <p>${e.price * cartdata[e.id]}</p>
              <div className="removeicon" onClick={() => { removefromcart(e.id) }}><CloseIcon /></div>
            </div>
            <hr/>
          </div>
        }
        return null;
      })}
      <div className="nettotal">
        <div className="maincont">
          <h1>Cart Totals</h1>
          <div>
            <div className="total">
              <p>Subtotal</p>
              <p>${totalprice()}</p>
            </div>
            <hr></hr>
            <div className="total">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr></hr>
            <div className="total">
              <p>Total</p>
              <h3>${totalprice()}</h3>
            </div>
            <hr></hr>
          </div>
          <button>Proceed to CheckOut</button>
        </div>
        <div className="coupon">
          <p>If you have Coupon Code,Enter it here</p>
          <div className="code">
            <input type='text' placeholder='Coupon Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insidecart
