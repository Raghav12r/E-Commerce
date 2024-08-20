import React from 'react'
import './Newsletter.css'

function Newsletter() {
    return (
        <div className="news">
            <div className='letter'>
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>Subscribe to our NewsLetter and stay updated</p>
                <div>
                    <input type='email' placeholder='Your EmailId'></input>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
