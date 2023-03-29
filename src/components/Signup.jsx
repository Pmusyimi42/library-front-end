import React from 'react'
import './signup.css'

export default function Signup() {
  return (
  <div className="container">
    <div className="form-box">
        <h1>Sign Up</h1>
        <form>
            <div className="input-group">
                <div className="input-field">
                    <label>Username:</label>
                    <input type="text" placeholder='username'/>
                </div>
                <div className="input-field">
                    <label>Email:</label>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input-field" style={{marginBottom: "20px"}}>
                <label>Password:</label>
                    <input type="password" placeholder='username'/>
                </div>
                {/* <p>Lost password <a href='#'>Click here!</a></p> */}
            </div>
            <div className="btn-field">
                <button type='button'>Sign Up</button>
            </div>
        </form>
    </div>
  </div>
  )
}