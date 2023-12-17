import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa6";
import { Player } from '@lottiefiles/react-lottie-player';
import signupAnimate from './../../assets/signup.json'
import { Outlet, Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const inputBorderStyle = (value) => {
    return value ? 'border-black' : 'border-gray';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //form submission here
    console.log('Form submitted:', formData);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-montserrat">
      {/* Left side */}
      <div className="flex-1 bg-primaryLight flex flex-col justify-center items-center p-8">
        <div className="text-2xl font-bold mb-4 md:text-5xl">Welcome back</div>
        <div className="text-gray mb-4">Log in to continue using Codiphy</div>
        <button className="p-3 flex items-center bg-black text-primaryLight mb-4 rounded-lg mb-4x">

          <FaGithub size={25} className='mr-3' />
          Login with GitHub
        </button>
        <div className='flex flex-row justify-center items-center space-x-3 mb-4'>
          <div className='w-16 h-0.5 bg-gray rounded-xl'></div>
          <div className='text-gray'>or continue with</div>
          <div className='w-16 h-0.5 bg-gray rounded-xl'></div>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-medium mb-2 flex flex-row justify-start">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="juandelacruz@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="text-sm font-medium mb-2 flex flex-row justify-start">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded-lg w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-colorAccent hover:bg-red-900 text-primaryLight font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
          >
            Login
          </button>
        </form>
        <div className='w-full max-w-sm flex flex-row justify-end'>
          <div className="text-black mt-4 text-sm font-medium cursor-pointe">Forgot Password?</div>
        </div>
        <div className="text-gray mt-10 text-sm">Don't have an account? <span className='text-colorAccent font-bold cursor-pointer'><Link to='/signup'>Signup here</Link></span></div>
      </div>

      {/* Right side */}
      <div className="flex-1 hidden bg-colorAccent lg:flex md:items-center md:justify-center">
        <div className="text-center">
          <Player
            src={signupAnimate}
            className="player w-auto h-auto"
            loop
            autoplay
          />
          <div className="mt-0 text-primaryLight text-2xl font-bold mb-2">Codiphy</div>
          <div className="text-primaryLight">Code Made Simple, Now Enhance with AI</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
