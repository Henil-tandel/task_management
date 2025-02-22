import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context/UserContext'


const RegisterPage = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ name, setName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const navigate = useNavigate()



  const { user, setUser } = useContext(UserContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      name: name,
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/register`, newUser,{withCredentials:true})

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/tasks')
    }


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#fff] px-4 py-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} required className="w-full p-2 border rounded-lg" />
          <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full p-2 border rounded-lg" />
          <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="w-full p-2 border rounded-lg" />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">Register</button>
        </form>
        <p className="mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
      </div>
    </div>
  );
};

export default RegisterPage;
