
import React, { useState } from 'react';
import Navbar from './Navbar';
import './signup.css';
import { useNavigate } from 'react-router';

export default function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState();
  const navigate = useNavigate();

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/login');
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <>
    <div>
    <Navbar />
    </div>
    <div className="form-backgroud">
    <div className="form-container">
        <div className="form-box">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3" style={{ width: '80%', marginLeft: '30px' }}>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3" style={{ width: '80%', marginLeft: '30px' }}>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3" style={{ width: '80%', marginLeft: '30px' }}>
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="btn-field">
              <button type="submit">Submit</button>

            </div>
          </form>
          {error && <div className='error'>{error}</div>}
        </div>
      </div>
    </div>
    </>
  );
}
