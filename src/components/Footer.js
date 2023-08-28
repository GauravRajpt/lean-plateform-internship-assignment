import React from 'react';

import linkdin from '../helper/linkdin.png'
import insta from '../helper/insta.png'
import twitter from '../helper/twitter.png'
import facebook from '../helper/facebook.png'


function Footer() {
  return (
    <footer>
    <div className='column1'>
      <div className='social'>
      <img src={linkdin} alt='social-media' />
    <img src={insta} alt='social-media' />
    <img src={twitter} alt='social-media' />
    <img src={facebook} alt='social-media' />
      </div>
      <h3><span style={{"font-size":"30px"}}>©</span> 2023 Mentorbridge. All Rights Reserved.</h3>
    </div>
    <div className='column2'>
    <div className='links'>
    <a href='#'>Contact us</a>
    <a href='#'>Privacy policy</a>
    <a href='#'>Terms of use</a>
    
    </div>
    <div className='links'>
    <a href='#'>Help center</a>
    <a href='#'>About Us</a>
    <a href='#'>FAQs</a>
    
    </div>
    </div>
    </footer>
  )
}

export default Footer