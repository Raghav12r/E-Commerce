import React, { useContext, useState } from 'react'
import './Offers.css'
import offerimg from '../Assets/offering-removebg-preview.png'
import { ShopContext } from '../../Context/Context'
import Category from '../../Pages/Category';
import { Link } from 'react-router-dom';

function Offers() {
    
    return (
        <div className="full">
            <div className='offer'>
                <div className="left">
                    <h1>Exclusive Offers</h1>
                    <h1>for you</h1>
                    <p>ONLY ON BEST SELLER PRODUCTS</p>
                    <button onClick={()=>{
                        <Link style={{textDecoration:"none"}} to='/offers'></Link>
                    }}>View Now</button>
                </div>
                <div className="right">
                    <img src={offerimg} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Offers;
