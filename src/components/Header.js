import React from 'react'
import Logo from '../helper/Logo.png'
import vector from '../helper/vector.png'
import '../App.css'

function Header() {
  return (
    <nav>
    <img className='logo' src={Logo} alt="logo"/>
    <h2>Filters <img src={vector} alt="vector"/></h2>
    <h2>About Us</h2>
    <h2>Blog</h2>
    <h3 className='Earning-calc'>Earning calculator</h3>
    <div className='login-btns'>
        <h3 className='login'>Login</h3>
        <h3 className='signup'>Signup</h3>
    </div>
    </nav>
  )
}

export default Header