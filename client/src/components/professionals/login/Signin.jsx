import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { proLogin,proEmail} from '../../../Redux/proAuth.js'
import proAxios from '../../../Axios/proAxios.js'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const backgroundImageUrl = "/images/model-house-project-blueprints.jpg"; // Path to your image
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length === 0) {
      return showErrorMessage('Please enter email');
    } else if (password.length === 0) {
      return showErrorMessage('Please enter password');
    }

    proAxios.post('/login', { email, password })
      .then((res) => {
        const result = res.data.userSignUp;
        console.log(result.token);
        if (result.status === true) {
          const token = result.token;
          console.log(token,'=================================================');
          dispatch(proLogin({ token: token }));
          dispatch(proEmail({email:email}))
          navigate('/professional/home');
        } else {
          showErrorMessage(result.message);
        }
      })
      .catch((res) => {
        showErrorMessage('User not found');
      });
  };

  const showToastMessage = () => {
    toast.success("Success!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000
    });
  };

  const showErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000
    });
  };

  return (
    <div  
      className="bg-cover bg-center bg-fixed h-screen flex justify-between items-center overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="ml-[4rem] p-8 rounded-lg shadow-lg backdrop-blur-2xl bg-opacity-30 bg-white w-3/5 md:w-2/5 lg:w-[23%]">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Login to GuildHub</h1>
        <form method='POST' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email" id='email' name='email' onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email address" />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password" id='password' name='password' onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" />
            <a className="text-gray-600 hover:text-gray-800" href="/professional/register">new user?  sign up</a>
          </div>
          <div>
          <ToastContainer /> {/* ToastContainer for showing success message */}
          </div>
   
          <div className="mb-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit">
              Login
            </button>
          </div>
        </form>
      </div>


      {/* <div className=" "> */}

      <div className="flex flex-col items-center mb-64 mr-56 justify-center h-screen relative ">
        <div className="text-center text-black text-opacity-80 text-5xl font-semibold leading-[21px] mb-8 md:mb-12">
          India's Largest <br /> <br></br> Home Community
        </div>
        <div className="text-center text-black text-opacity-80 text-xl font-bold leading-[21px] md:flex md:justify-center md:space-x-6">
          <div className="mb-2 md:mb-0">Find Design</div>
          <div className="mb-2 md:mb-0">Find Professionals</div>
          <div className="mb-2 md:mb-0">Ask Queries</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-yellow-400 mt-8 md:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
      </div>

     </div>
  )
}

export default Signin;
