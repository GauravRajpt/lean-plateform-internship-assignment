import React from 'react'
import rocket from '../helper/rocket.png'
import mobile from '../helper/mobile.png'

function Main() {
  return (
    <section>

    <div className='main-poster'>
    <div className='headings'>
    <img src={rocket} alt='rocket'/>
    <h1>Grow Faster Together</h1>
    <h2>Find a mentor or Lead the path for someone<br/>
    It’s a win win!</h2>
    <div className='poster-btn'>
    <h3>Find a Mentor</h3>
    <h3>Become a Mentor</h3>
    </div>
    </div>
    <div className='mobileImg'>
    <img src={mobile} alt='mobile'/>
    </div>
    </div>
    </section>
  )
}

export default Main