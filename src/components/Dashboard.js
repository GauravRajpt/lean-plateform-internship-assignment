import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/navslice'
import user from '../helper/user.png'

function Dashboard() {
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(remove());
    },[])
  return (
    <div>
      <div className='sidenav'>
      <div className='user'>
      <img src={user} alt='user'/>
      <h2>Neha Bhat</h2>
      </div>
      <ul className='menu'>
      <li>
      <div className='svg'>
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
  <path d="M8.94118 19V12.2941H13.4118V19H19V10.0588H22.3529L11.1765 0L0 10.0588H3.35294V19H8.94118Z" fill="black"/>
</svg>
</div>
 <h2>Home</h2></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      </ul>
      
      </div>
    </div>
  )
}

export default Dashboard