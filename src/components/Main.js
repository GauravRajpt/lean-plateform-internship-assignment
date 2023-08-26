import React from 'react'
import rocket from '../helper/rocket.png'
import mobile from '../helper/mobile.png'
import amazon from '../helper/amazon.png'
import spotify from '../helper/spotify.png'
import meta from '../helper/meta.png'

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

    {/** experties section starts here */}

    <div className='experties-section'>
      <h3>Find the expertises from </h3>
      <div className='companies'>
      <img src={amazon} alt="companiesLogo" />
      <img src={spotify} alt="companiesLogo" />
      <img src={meta} alt="companiesLogo" />
      </div>
      <h3>Make your career growth in</h3>
      <div className='experties'>
    <div className='ui-ux'>
    UX/UI Design
    </div>
      <div className='product-management'>
      Product 
Management
      </div>
      <div className='marketing'>
      Marketing
      </div>
      <div className='datascience'>
      Data Science
      </div>
      </div>
    </div>
    </section>
  )
}

export default Main