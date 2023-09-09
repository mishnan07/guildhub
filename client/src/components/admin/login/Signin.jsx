import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {  useDispatch } from 'react-redux';
import { adminLogin } from '../../../Redux/AdminAuth.js';
import adminAxios from '../../../Axios/adminAxios.js';


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {

	const backgroundImageUrl = "/images/model-house-project-blueprints.jpg"; // Path to your image
  
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errMsg,setErrMsg] = useState('')

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
             
const isValidEmail= (email)=> {
  // Basic email format validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
console.log(isValidEmail);

    if (email.trim().length === 0) {
      return showErrorMessage('Please enter email');
    } else if (!isValidEmail(email)) {
      return showErrorMessage('Please enter a valid email');
    } else if (password.length === 0) {
      return showErrorMessage('Please enter password');
    } else if (password.length < 6) {
      return showErrorMessage('Password should be at least 6 characters');
    }

 
        try {
          const response = await adminAxios.post('/login', { email, password });
          const { token, check } = response.data;
      console.log(token,'kkkkkkkkkkkk++++++');
          if (check) {
            dispatch(adminLogin({ token:token}));
            navigate('/admin/home');
          } else {
            showErrorMessage('Unauthorized login');
          }
        } catch (error) {
          console.log('Error:', error);
          showErrorMessage('An error occurred during login');
        }
      };
      
      const showErrorMessage = (message) => {
        toast.error(message, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 1000
        });
      };

  return (
    <>
 

		<div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
		
	
            <div className="h-screen flex justify-center items-center">
			<div className="bg-purple-100 mx-4 p-8 rounded shadow-md w-full md:w-1/5 lg:w-1/6">
                    <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
                    <form   method='POST' onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email" id='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email address" />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="password" id='password' name='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" />
                            <a className="text-gray-600 hover:text-gray-800" href="#">Forgot your password?</a>
                        </div>
                        <div className="mb-6">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Login
                            </button>
                        </div>
                        <div>
                        <ToastContainer /> {/* ToastContainer for showing success message */}
                        </div>
                    </form>
                </div>
            </div>
        </div>

		
    
    </>
  )
}

export default Signin
