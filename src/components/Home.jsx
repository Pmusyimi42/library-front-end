import React from 'react'
import Navbar from './Navbar'
import Footer from './footer/Footer'
import DisplayBooks from './DisplayBooks'
export default function Home() {
  return (
    <div>
        <Navbar/>
          <DisplayBooks />
        <Footer/>
    </div>
  )
}
