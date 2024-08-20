import React from 'react'
import Actor from '../Components/Actor/Actor'
import Famous from '../Components/Famous/Famous'
import Offers from '../Components/Offers/Offers'
import Newstocks from '../Components/Newstocks/Newstocks'
import Newsletter from '../Components/NewsLetter/Newsletter'

function Home() {
  return (
    <div>
        <Actor/>
        <Famous/>
        <Offers/>
        <Newstocks/>
        <Newsletter/>
    </div>
  )
}

export default Home
