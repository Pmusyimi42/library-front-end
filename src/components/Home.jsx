import React from 'react'
import Navbar from './Navbar'
import Footer from './footer/Footer'
import DisplayBooks from './DisplayBooks'
import { Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className='container_dp px-8 min-vh-100'>
          <DisplayBooks />
          <Outlet/>
          </div>
        <Footer/>
    </div>
  )
}
