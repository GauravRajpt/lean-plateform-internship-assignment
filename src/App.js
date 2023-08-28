import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
   <div className='app'>
   <Header />
   <Outlet/>
   <Footer />
   
   </div>
  )
}

export default App