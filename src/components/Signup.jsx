import React from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Signup() {
    const [formData, setFormData] = useState({ email: '', username:'', password: '' })
    const navigate = useNavigate()

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        // console.log(key, value)
        setFormData({...formData, [key]:value})
      }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://127.0.0.1:3000/signin',{
          method: 'POST',
          headers: {
            "Content type": "application/json",
          },
          body: JSON.stringify(
            formData
          ),
        })
        .then ((response) => {
          if (response.ok) {
            navigate("/home")
          }
        })
        
        }
      
  return (
  <div className="container">
    <div className="form-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-field">
                    <label>Username:</label>
                    <input type="text" placeholder='username' onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label>Email:</label>
                    <input type="email" placeholder='Email' onChange={handleChange}/>
                </div>
                <div className="input-field" style={{marginBottom: "20px"}}>
                <label>Password:</label>
                    <input type="password" placeholder='password' onChange={handleChange}/>
                </div>
                {/* <p>Lost password <a href='#'>Click here!</a></p> */}
            </div>
            <div className="btn-field">
                <button type='button' onClick={handleSubmit}>Sign Up</button>
            </div>
        </form>
    </div>
  </div>
  )
}