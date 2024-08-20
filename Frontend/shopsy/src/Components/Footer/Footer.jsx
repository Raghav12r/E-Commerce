import React from 'react'
import './Footer.css'
import logo from '../Assets/logo2.jpg'
import insta from '../Assets/insta.jpg'
import whatsapp from '../Assets/whats2.jpg'
import meta from '../Assets/meta.jpg'
import twitter from '../Assets/twitter.jpg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt=''></img>
        </div>
        <ul className="imp-links">
              <li>Company</li>
              <li>Products</li>
              <li>Offices</li>
              <li>About</li>
              <li>Contacts</li>
        </ul>
        <div className="social">
             <div className="media">
                 <img src={meta} alt=''></img>
                 <img src={insta} alt=''></img>
                 <img src={twitter} alt=''></img>
                 <img src={whatsapp} alt=''></img>
             </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>CopyRight @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
