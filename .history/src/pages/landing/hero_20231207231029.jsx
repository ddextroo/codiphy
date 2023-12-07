import React from "react";
import Preview from './../../assets/hero_preview.png'

function hero() {
  return (
    <div className="min-h-screen flex flex-col justify-end">
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl text-primaryDark font-bold mb-5 text-center">
          Unleash the Power of AI-Generated Programming Quizzes with Codiphy!
        </div>
        <div className="text-ls text-gray">
          Imagine never having to struggle with creating quizzes again. Picture
          yourself effortlessly diving into dynamic, AI-generated challenges
          that keep your coding skills razor-sharp. Codiphy is not just a
          platform; it's your secret weapon for programming mastery.
        </div>
        <div className="flex flex-row space-x-3 mt-5">
          <div className="rounded-lg bg-colorAccent text-primaryLight px-5 py-2 font-semibold cursor-pointer">
            Get Started
          </div>
          <div className="rounded-lg bg-primaryLight text-primaryDark border border-solid border-gray px-5 py-2 font-semibold cursor-pointer">
            Try Demo
          </div>
        </div>
        <img src={Preview} className="w-auto h-96"></img>
      </div>
    </div>
  );
}

export default hero;
