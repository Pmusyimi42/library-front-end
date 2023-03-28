import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <div className="container footer__container">
        <article>
            <a to='/' className='logo'>
                <h4>Wordline</h4>
            </a>
            <div className="footer__socials">
                <a href="https://facebook.com" target="_blank" rel='noreferrer noopener'>
                     <BsFacebook/>
                </a>
                <a href="https://twitter.com" target="_blank" rel='noreferrer noopener'>
                     <BsTwitter/>
                </a>
                <a href="https://instagram.com" target="_blank" rel='noreferrer noopener'>
                     <BsInstagram/>
                </a>
            </div>
        </article>
        <article>
            <h4></h4>
            <a to='#home'>Home</a>
            <a to='#about'>About us</a>
            <a to='#contanct'>Contact us</a>
        </article>
        <article>
            <h4>💫 Welcome to Wordline 💫</h4>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, quaerat.</h4>
        </article>
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