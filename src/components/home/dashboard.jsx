import { useContext } from "react";
import { AuthContext } from "../../routes/mainRoutes";
import { Navigate, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import img1 from "./../../assets/banners/1.png";
import img2 from "./../../assets/banners/2.png";
import img3 from "./../../assets/banners/3.png";
import img4 from "./../../assets/banners/4.png";
import img5 from "./../../assets/banners/5.png";

import { RiJavascriptFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

import { FaChevronCircleDown } from "react-icons/fa";
import { MdTopic } from "react-icons/md";

import basic from "./../../assets/svg/basic.svg";
import advance from "./../../assets/svg/advance.svg";

const Dashboard = () => {
  const { user, authIsReady } = useContext(AuthContext);

  const banners = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
  ];

  const challenges = [
    {
      type: <RiJavascriptFill size={25} color="gray" />,
      title: "Javascript",
      subtitle:
        "Dive into fundamental concepts and build a solid foundation for your coding prowess. Perfect for beginners!",
    },
    {
      type: <MdTopic size={25} color="gray" />,
      title: "AJAX and Fetch API",
      subtitle:
        "Learn about AJAX and Fetch API to enhance your web development skills.",
    },
    // Add more challenges as needed
  ];

  return authIsReady ? (
    <div className="font-montserrat">
      {user ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 px-20 pt-20 gap-5">
            <div className="w-full h-56 shadow-xl bg-colorAccent rounded-xl">
              <Splide
                options={{
                  type: "loop",
                  lazyLoad: "sequential",
                  autoplay: true,
                }}
              >
                {banners.map((menu, index) => (
                  <SplideSlide key={index}>
                    <img
                      src={menu.src}
                      className="w-full rounded-xl h-56"
                      alt={`banner-${index}`}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="w-full lg:w-full h-56 shadow-xl bg-primaryLight2 rounded-xl flex items-center sm:p-3">
              <img
                src={user.photoURL}
                className="w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] lg:w-[9rem] lg:h-[9rem] bg-gradient-to-b from-colorAccent to-black rounded-full "
              />
              <div className="h-40 ml-5  text-primaryDark flex flex-col items-start space-y-3">
                <div className="text-md md:text-lg lg:text-2xl font-bold">{user.displayName}</div>
                <div className="font-medium text-md: lg:text-xl">10 points</div>
                <div className="flex items-center space-x-2">
                  <div className="text-sm text-gray">10</div>
                  <div className=" w-16 md:w-24 lg:w-32 bg-gradient-to-r from-colorAccent from-10% via-light-green-800 via-30% to-green-800 h-2 rounded-xl"></div>
                  <div className="text-sm text-gray">100 points</div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="shadow-xl mr-4 rounded-xl bg-primaryLight2">
                    <FaCheckCircle size={20} color="green" />
                  </div>
                  <div className="flex flex-row sm:flex-col">
                    <div className="text-md md:text-lg lg:text-xl font-bold text-primaryDark text-left">
                      7
                    </div>
                    <div className="text-sm font-medium text-gray -mt-1">
                      Correct Answers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-full h-56 shadow-xl bg-primaryLight2 rounded-xl flex flex-col items-start p-5">
              <div className="font-bold text-lg md:text-xl text-primaryDark">
                Start quiz
              </div>
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="w-full text-md md:text-lg border border-1 border-gray border-solid rounded-xl p-2 cursor-pointer flex items-center justify-between mt-5"
                >
                  {challenge.type}
                  <div className="text-sm font-medium text-primaryDark">
                    {challenge.title}
                  </div>
                  <FaChevronCircleDown size={20} color="gray" />
                </div>
              ))}
            </div>
          </div>
           <div className="flex justify-start px-5 md:px-10 lg:px-20 py-5 font-bold text-primaryDark text-2xl">
            Select Challenge
          </div>
          <div className="px-5 md:px-10 lg:px-20 flex flex-col md:flex-row justify-center md:space-x-10 lg:space-x-11">
            {["Basic", "Advance"].map((category, index) => (
              <div
                key={index}
                className="h-80 w-full md:w-[21rem] lg:w-[25rem] shadow-xl bg-primaryLight2 rounded-xl p-7 flex flex-col justify-center items-center cursor-pointer mb-5 md:mb-0"
              >
                <img
                  src={index === 0 ? basic : advance}
                  className="w-44 h-44"
                  alt={`category-${index}`}
                />
                <div className="font-bold text-2xl text-primaryDark">
                  {category}
                </div>
                <div className="font-medium text-sm mt-2 text-gray">
                  {index === 0
                    ? "Dive into fundamental concepts and build a solid foundation for your coding prowess. Perfect for beginners!"
                    : "Ready for a challenge? Elevate your skills with advanced topics and take your programming journey to new heights!"}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  ) : (
    <h1>Making your auth ready, please wait for a moment</h1>
  );
};

export default Dashboard;
