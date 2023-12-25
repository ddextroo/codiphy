import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import  forgotpassAnimate from './../../assets/forgotpass.json'
import { Link, Outlet } from 'react-router-dom';


function forgot_password() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const inputBorderStyle = (value) => {
    return value ? 'border-black' : 'border-gray';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //to handle forgot password, sending email, etc.
    console.log('Email to send verification:', email);
    setEmailSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-montserrat">
      {/* Left side */}
      <div className="flex-1 bg-primaryLight flex flex-col justify-center items-center p-8">
        <div className="text-2xl font-bold mb-4 md:text-5xl">Forgot Password</div>
        <div className="text-gray mb-4">
          {emailSent ? (<div>A verification link has been sent to <strong>{email}</strong>. Please check your email.</div>):
          ('Enter your email to reset your password')}
        </div>
        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-sm">
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-medium mb-2 flex flex-row justify-start">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputBorderStyle(email)}`}
              placeholder="juandelacruz@example.com"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-colorAccent hover:bg-red-900 text-primaryLight font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
          >
            Reset Password
          </button>
        </form>
        <div className="text-gray mt-4 text-sm">
          Remembered your password? <span className='text-colorAccent font-bold cursor-pointer'><Link to="/login">Login here</Link></span>
        </div>
      </div>

       {/* Right side */}
       <div className="flex-1 hidden lg:flex md:items-center md:justify-center bg-gradient-to-b from-colorAccent to-black">
        <div className="text-center ">
          <Player
            src={forgotpassAnimate}     
            className="player w-[23rem]"
            loop
            autoplay
          />
          <div className="text-primaryLight text-2xl font-bold mb-2 mt-10">Codiphy</div>
          <div className="text-primaryLight">Code Made Simple, Now Enhance with AI</div>
        </div>
      </div>
    </div>
  );
}

export default forgot_password;


