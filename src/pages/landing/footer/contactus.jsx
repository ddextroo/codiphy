import React, { useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";



const Contact = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Full Name:', fullName);
    console.log('Message:', message);
  };

  return (
    <div className="modal-overlay justify-center items-center flex fixed inset-0 z-50 bg-black bg-opacity-50 rounded-xl">
      <div className="modal justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto relative w-auto my-6 mx-auto">
        <div className="modal-content p-5 backdrop-filter bg-primaryLight rounded-xl max-h-full h-full font-poppins overflow-auto overflow-x-hidden mt-3 ml-20 mr-20 max-w-3xl">
          <div className="flex flex-row justify-between items-center mt-5 mb-7">
            <div className="text-3xl font-semibold">Contact Us</div>
            <IoCloseCircle size={25} color="gray" onClick={onClose} className=" cursor-pointer" />
          </div>
          {/* Full Name Input */}
          <div className="mb-2">
            <div class="relative mt-3">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <BsPersonFill size={25} color="gray" />
              </div>
              <input 
                type="name" 
                value={fullName}
                onChange={handleFullNameChange}
                className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray rounded-xl bg-gray-50 focus:ring-primaryDark focus:border-primaryDark dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryDark dark:focus:border-primaryDark" 
                placeholder="Name" required></input>
            </div>
          </div>
          {/* Email Input */}
          <div className="mb-3">
            <div class="relative mt-3">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MdEmail size={25} color="gray" />
              </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray rounded-xl bg-gray-50 focus:ring-primaryDark focus:border-primaryDark dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryDark dark:focus:border-primaryDark" 
                  />
              </div>
          </div>
          {/* Message Input */}
          <div className="mb-3">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              onFocus={(e) => (e.target.placeholder = 'Message')}
              onBlur={(e) => (e.target.placeholder = 'Message')}
              placeholder="Message"
              rows="4"
              className="mt-3 p-2 border border-gray rounded-xl bg-gray-50 focus:ring-primaryDark focus:border-primaryDark dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryDark dark:focus:border-primaryDark w-full"
            ></textarea>
          </div>

          {/* Send Message Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-colorAccent text-primaryLight font-semibold px-4 py-2 rounded-md"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
