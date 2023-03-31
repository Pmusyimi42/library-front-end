import React from 'react'
import { Link } from 'react-router-dom'
import './Landingpage.css'

export default function LandingPage() {
  return (
    <div className='Landing-container'>
      <div className="landing__container">
        <div className="headings">
          <h1>💫 Welcome to Wordline 💫</h1>
          <br/>
          <h2>Reality doesn’t always give us the life that we desire,<br/> but we can always find what we desire between the pages of books.</h2>
        </div>
        <div className="landing-details">
          <img src="https://www.apple.com/newsroom/images/product/apple-books/apple-books_reading-now_06122018_big.jpg.large.jpg"/>
          <br/>
          <button>
            <Link type='button' to="/signup">SignUp</Link>
          </button>
          <button>
            <Link type='button' to="/login">LogIn</Link>
          </button>
      </div>
      </div>
    </div>
  )
}
