import React from 'react'
import  './Navbar.css'
import logo from '../../assets/logo2.jpg'
import profile from '../../assets/boy.png'
function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className="logo" />
      <img src={profile} alt="" className="logoprofile" />
    </div>
  )
}

export default Navbar
