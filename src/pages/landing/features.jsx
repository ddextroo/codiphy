import React from "react";
import { MdQuiz } from "react-icons/md";
import { SiStudyverse } from "react-icons/si";
import { SiPivotaltracker } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";


import Image from './../../assets/features/Feature01.png';
import Image1 from './../../assets/features/Feature02.png';
import Image2 from './../../assets/features/Feature03.png';
import Image3 from './../../assets/features/Feature04.png';
import Image4 from './../../assets/features/Feature05.png';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const menuItems = [
  {
    title: "Comprehensive Quizing Platform",
    image: <img src={Image} className=" w-60 h-52 md:w-80 md:h-72" />,
    icon: <MdQuiz size={30} color="red" />,
    description: "Codiphy offers a vast collection of quizzes that cater to different skills levels and programming languages. Our quizzes are designed to challenge you while also providing valuable insights into your programming knowledge.",
  },
  {
    title: "Interactive Learning Experience",
    image: <img src={Image1} className=" w-60 h-52 md:w-80 md:h-72" />,
    icon: <SiStudyverse size={30} color="red" />,
    description: "Our platform offers an interactive learning experience, allowing you to test your programming skills in real-time. You can view your score and progress immediately after completing a quiz, helping you identify areas for improvement.",
  },
  {
    title: "Progress Tracking and Analytics",
    image: <img src={Image2} className=" w-60 h-52 md:w-80 md:h-72" />,
    icon: <SiPivotaltracker size={30} color="red" />,
    description: "Codiphy provides users with comprehensive progress tracking and analytics capabilities. You can monitor your progress over time, identify areas of improvement, and track your overall performance in various programming languages.",
  },
  {
    title: "Secure and Anonymous Quiz Taking",
    image: <img src={Image3} className=" w-60 h-52 md:w-80 md:h-72" />,
    icon: <MdOutlineSecurity size={30} color="red" />,
    description: "Codiphy prioritizes user privacy and security. All quizzes are designed to be secure and anonymous, ensuring that your personal information remains protected while you enjoy a safe and engaging quizzing experience.",
  },
  {
    title: "Responsive Design",
    image: <img src={Image4} className=" w-60 h-52 md:w-80 md:h-72" />,
    icon: <MdDesignServices size={30} color="red" />,
    description: "Codiphy's user-friendly interface is designed to be responsive, ensuring that you can access and navigate the platform seamlessly on various devices, including desktop computers, laptops, tablets, and smartphones.",
  },

];


function features() {

  return (
    <section id="feature" className="px-10 py-5">
      <h2 className="text-colorAccent mb:mt-3 mb-5 md:text-3xl font-bold">Features</h2>
      <div className="shadow-xl border-1 py-24 rounded-xl md:mt-10 md:mb-10 md:ml-40 md:mr-40 p-5 flex flex-col items-center max-w-screen-lg">
        {/* parent */}
        <Splide options={{ type: "loop", lazyLoad: "sequential", autoplay: true, }}>
          {menuItems.map((menu, index) => (
            // eslint-disable-next-line react/jsx-key
            <SplideSlide>
              <div className="grid h-auto lg:grid-cols-2 lg:gap-2 place-items-center">
                <div className="rounded-md md:mt-3 md:ml-3 md:mr-3  md:mb-3 flex flex-col items-center justify-center">
                  <div className="flex flex-col justify-start md:justify-center items-center space-x-2 w-full">
                    <h2 className="text-primaryDark mx-5 text-center font-semibold text-lg md:text-3xl">{menu.title}</h2>
                  </div>
                  <div className="text-primaryDark md:mt-5 md:ml-10 md:mr-5 text-sm md:text-md lg:text-lg md:px-5 text-justify w-screen md:w-auto mt-4 px-14">
                    {menu.description}
                  </div>
                </div>
                <div className="mt-11 h-90 rounded-md md:mt-10  md:mb-10 md:ml-20 md:mr-10 flex items-center justify-center">
                  {menu.image}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>



  );
}

export default features;
