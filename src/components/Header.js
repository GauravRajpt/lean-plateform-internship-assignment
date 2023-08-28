import React from 'react'
import Logo from '../helper/Logo.png'
import vector from '../helper/vector.png'
import '../App.css'
import { useSelector } from 'react-redux'

function Header() {

  const nav= useSelector((state)=>state.nav)
  return (
    <nav>
    <img className='logo' src={Logo} alt="logo"/>
    <h2>Filters <img src={vector} alt="vector"/></h2>
    <h2>About Us</h2>
    <h2>Blog</h2>
    {nav?
      <><h3 className='Earning-calc'>Earning calculator</h3>
    <div className='login-btns'>
        <h3 className='login'>Login</h3>
        <h3 className='signup'>Signup</h3></div></>:

        <><h3 className='Earning-calc' style={{visibility:'hidden'}}>Earning calculator</h3>
        <div className='login-btns' style={{visibility:'hidden'}}>
            <h3 className='login'>Login</h3>
            <h3 className='signup'>Signup</h3></div></>}
    
    </nav>
  )
}

export default Header