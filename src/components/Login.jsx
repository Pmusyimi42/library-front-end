import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from './Navbar'
// import { useHistory } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' }) 
  const [error, setError] = useState()
  const navigate = useNavigate()
  // const history = useHistory()

  function handleChange (e) {
    const key = e.target.name
    const value = e.target.value
    setFormData({ ...formData, [key]: value })
  }
  console.log(formData);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: formData.email, 
        password: formData.password
      }),
    });
    const data = await response.json();
    if (response.ok) {
      navigate('/home')
      alert('')
    } else {
      setError(data.error);
    }
  };
  
  return (
    <>
    <Navbar/>
    <div className='flex justify-center px-12 py-12 bg-white-400 h-[90vh]' >
      <div className=" flex justify-center align-content: center py-12">
        <form className="bg-violet-400 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" placeholder="Email" onChange={handleChange}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded   py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="*****" onChange={handleChange}/>
          </div>
          <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLogin}>
            SignIn
          </button>
          {error && (
            <div className="text-red-500 text-sm mt-2">
               {error}
            </div>
          )}
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login