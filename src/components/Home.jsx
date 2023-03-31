import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer/footer'
import Card from './Card'
import { Outlet } from 'react-router-dom'

export default function () {
  return (
    <div>
        <Navbar/>
        <div classname='container_dp p-4 min-vh-100'>
          <Card/>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
