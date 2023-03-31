import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' }) 
  const [error, setError] = useState()
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'password') {
      setFormData({ ...formData, password: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }
  
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://127.0.0.1:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password
            }),
        });
        const data = await response.json();
        if (response.ok) {
            const id = data.user?.id;
            if (id) {
                sessionStorage.setItem('user_id', id);
                navigate('/home');
            } else {
                throw new Error('User ID not found');
            }
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        console.error(error);
        setError(error.message);
    }
  };
  
  
  return (
    <div className='flex justify-center px-12 py-12 bg-purple-200 h-[90vh]' >
      <div className=" flex justify-center align-content: center py-12">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>
            SignIn
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
