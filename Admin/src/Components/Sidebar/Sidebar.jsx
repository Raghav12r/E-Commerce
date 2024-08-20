import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import cart from '../../assets/icons8-cart-100.png'
import list from '../../assets/icons8-list-64.png'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
                <div className="compo">
                    <img src={cart} alt='' />
                    <p>Add product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration:"none"}}>
                <div className="list">
                    <img src={list} alt='' />
                    <p>Product list</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
