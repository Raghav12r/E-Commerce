import React from 'react'
import './Actor.css'
import WavingHandIcon from '../Assets/Waving-Hand.png';
import model from '../Assets/actress-removebg-preview.png';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
function Actor() {
  return (
    <div className='actor'>
        <div className="actorLeft">
            <h2>New Arrivals</h2>
            <div className="welcome">
                <div className="hi">
                    <p>new</p>
                    <img src={WavingHandIcon} alt=''></img>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="latest">
                 <div>Latest Collections</div>
                 <DoubleArrowIcon/>
            </div>
        </div>
        <div className="actorRight">
            <img src={model} alt=''></img>
        </div>
    </div>
  )
}

export default Actor
