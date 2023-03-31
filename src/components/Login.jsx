import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  function handleChange(e){
    const key = e.target.name
    const value = e.target.value
    // console.log(key, value)
    setFormData({...formData, [key]:value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://127.0.0.1:3000/login',{
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
        // console.log(formData)
        navigate("/home")
      }
    })
    
    }
  
  
  return (
    <div className='flex justify-center px-12 py-12 bg-purple-200 h-[90vh]' >
      <div className=" flex justify-center align-content: center py-12">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChange={handleChange}/>
          </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="password" >
          Password
        </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*****"   onChange={handleChange}/>
      </div>
        <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full " onClick={handleSubmit}>
          SignIn
        </button>
      </div>
      </form>
    </div>
  </div>
  )
}

export default Login