import Preview from "./../../assets/hero_preview.png";
import { Outlet, Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import configParticle from './../../assets/particles.json'

function hero() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <section id="hero">
      <Particles
      id="tsparticles"
      init={particlesInit}
      options={configParticle}
      />
      {/* <div className="flex flex-col justify-end max-h-full md:mt-52 md:h-fit lg:h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl text-primaryDark font-bold mb-5 text-center md:text-3xl">
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
          <div className="text-md text-gray md:text-lg">
            Imagine never having to struggle with creating quizzes again.
            Picture yourself effortlessly diving into dynamic, AI-generated
            challenges that keep your coding skills razor-sharp. Codiphy is not
            just a platform; it is your secret weapon for programming mastery.
          </div>
          <div className="flex flex-row space-x-3 mt-5 mb-5">
            <div className="rounded-lg bg-colorAccent text-primaryLight px-5 py-2 font-semibold cursor-pointer">
              <Link to="/login">Get Started</Link>
            </div>
            <div className="rounded-lg bg-primaryLight text-primaryDark border border-solid border-gray px-5 py-2 font-semibold cursor-pointer hover:bg-gray hover:text-primaryLight">
              <Link to="/demo">Try Demo</Link>
            </div>
          </div>
          <img src={Preview} className="w-auto h-72"></img>
        </div>
        <Outlet />
      </div> */}
    </section>
  );
}

export default hero;
