import React from "react";

function hero() {
  return (
    <div className="min-h-max">
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl text-primaryDark font-bold mb-5 text-center">
          Unleash the Power of AI-Generated Programming Quizzes with Codiphy!
        </div>
        <div className="text-sm text-gray">
          Imagine never having to struggle with creating quizzes again. Picture
          yourself effortlessly diving into dynamic, AI-generated challenges
          that keep your coding skills razor-sharp. Codiphy is not just a
          platform; it's your secret weapon for programming mastery.
        </div>
        <div className="flex flex-row space-x-3 mt-5">
          <div className="rounded-lg bg-colorAccent text-primaryLight px-5 py-2 font-semibold cursor-pointer">
            Get Started
          </div>
          <div className="rounded-lg bg-primaryLight text-primaryDark border border-solid px-5 py-2 font-semibold cursor-pointer">
            Try Demo
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
