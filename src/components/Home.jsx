import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer/footer'
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
