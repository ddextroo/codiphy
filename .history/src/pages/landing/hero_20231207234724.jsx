import React from "react";
import Preview from "./../../assets/hero_preview.png";
import { Outlet, Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';


function hero() {
  return (
    <div className="min-h-screen max-h-full flex flex-col justify-end ">
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl text-primaryDark font-bold mb-5 text-center">
          Unleash the Power of AI-Generated Programming Quizzes with Codiphy!
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "We produce food for Mice",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "We produce food for Hamsters",
              1000,
              "We produce food for Guinea Pigs",
              1000,
              "We produce food for Chinchillas",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2rem", display: "inline-block" }}
            repeat={Infinity}
           className="text-colorAccent"/>
        </div>
        <div className="text-ls text-gray">
          Imagine never having to struggle with creating quizzes again. Picture
          yourself effortlessly diving into dynamic, AI-generated challenges
          that keep your coding skills razor-sharp. Codiphy is not just a
          platform; it's your secret weapon for programming mastery.
        </div>
        <div className="flex flex-row space-x-3 mt-5 mb-5">
          <div className="rounded-lg bg-colorAccent text-primaryLight px-5 py-2 font-semibold cursor-pointer">
            <Link to="/login">Get Started</Link>
          </div>
          <div className="rounded-lg bg-primaryLight text-primaryDark border border-solid border-gray px-5 py-2 font-semibold cursor-pointer hover:bg-colorAccent hover:text-primaryLight">
            <Link to="/demo">Try Demo</Link>
          </div>
        </div>
        <img src={Preview} className="w-auto h-72"></img>
      </div>
      <Outlet />
    </div>
  );
}

export default hero;
