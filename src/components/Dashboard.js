import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/navslice'

function Dashboard() {
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(remove());
    },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard