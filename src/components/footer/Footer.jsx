import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <div className="footer__container">
        <ul>
            <li to='/' className='logo'>
                <h4>Wordline</h4>
            </li>
            <div className="footer__socials">
                <li href="https://facebook.com" target="_blank" rel='noreferrer noopener'>
                     <BsFacebook/>
                </li>
                <li href="https://twitter.com" target="_blank" rel='noreferrer noopener'>
                     <BsTwitter/>
                </li>
                <li href="https://instagram.com" target="_blank" rel='noreferrer noopener'>
                     <BsInstagram/>
                </li>
            </div>
        
            {/* <h4></h4> */}
            <li to='#home'>Home</li>
            <li to='#about'>About us</li>
            <li to='#contanct'>Contact us</li>
        </ul>
        {/* <ul>
            <h4>💫 Welcome to Wordline 💫</h4>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, quaerat.</h4>
        </ul> */}
    </div>
    <div className="footer__copyright">
        <small>
            2023 WORDLINE &copy; copyright ©  all rights reserved
        </small>
    </div>
    </footer>
  )
}

export default Footer