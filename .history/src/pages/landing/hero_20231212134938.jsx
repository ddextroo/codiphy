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
      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        "particles": {
            "number": {
                "value": 10,
                "density": {
                    "enable": false,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "star",
                "options": {
                    "sides": 5
                }
            },
            "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["grab"]
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "#111",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
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
