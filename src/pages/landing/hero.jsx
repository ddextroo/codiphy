import Preview from "./../../assets/hero_preview.png";
import { Outlet, Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../../firebase/config";
import { useState, useEffect } from "react";
function Hero() {
  const [authh, setAuthh] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthh(true);
      } else {
        setAuthh(false);
      }
    });
  }, [authh]);
  return (
    <section id="hero" className="bg-opacity-0 px-16 py-5 ">
      <div className="flex flex-col justify-end ">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl text-primaryDark font-bold mb-5 mt-20 text-center md:text-3xl">
            Unleash the Power of AI-Generated Programming Quizzes with
            Codiphy!&nbsp;&nbsp;-&nbsp;&nbsp;
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Code Made Simple",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Now Enhanced with AI",
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
              className="text-colorAccent"
            />
          </div>
          <div className="text-md text-gray md:text-lg bg-opacity-0">
            Imagine never having to struggle with creating quizzes again.
            Picture yourself effortlessly diving into dynamic, AI-generated
            challenges that keep your coding skills razor-sharp. Codiphy is not
            just a platform; it is your secret weapon for programming mastery.
          </div>
          <div className="flex flex-row space-x-3 mt-5 mb-5">
            {!authh ? (
              <Link to="/login">
                <button className="rounded-lg bg-colorAccent text-primaryLight px-5 py-2 font-semibold cursor-pointer">
                  Get Started
                </button>
              </Link>
            ) : (
              <Link to="/quiz">
                <button className="rounded-lg bg-colorAccent text-primaryLight px-5 py-2 font-semibold cursor-pointer">
                  Dashboard
                </button>
              </Link>
            )}
            <Link to="/demo">
              <button className="rounded-lg bg-primaryLight text-primaryDark border border-solid border-gray px-5 py-2 font-semibold cursor-pointer hover:bg-gray hover:bg-opacity-5 hover:text-primaryDark bg-transparent">
                Try Demo
              </button>
            </Link>
          </div>
          <img src={Preview} className="w-auto h-72"></img>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export default Hero;
