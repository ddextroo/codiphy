import { useContext, useState, useEffect } from "react";
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
import profile from "./../../assets/profile.png";

import basic from "./../../assets/svg/basic.svg";
import advance from "./../../assets/svg/advance.svg";

import badge1 from "./../../assets/badges/badge1.jpg";
import badge2 from "./../../assets/badges/badge2.jpg";
import badge3 from "./../../assets/badges/badge3.jpg";
import badge4 from "./../../assets/badges/badge4.jpg";
import badge5 from "./../../assets/badges/badge5.jpg";
import badge6 from "./../../assets/badges/badge6.jpg";

import Dropdown from "./../../components/dropdown";
import Categories from "./../../model/categories";
import { MdTopic } from "react-icons/md";
import points from "./../../assets/points.png";
import { db, auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

const Dashboard = ({ open }) => {
  const { user, authIsReady } = useContext(AuthContext);
  const [data, setData] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snapshot = await getDoc(doc(db, "users", user.uid));
        setData(snapshot.data());
      }
    });
  }, []);

  const banners = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
  const [selectedTopic, setSelectedTopic] = useState(
    "Introduction to Javascript"
  );

  const languageOptions = Object.keys(Categories);

  useEffect(() => {
    if (selectedLanguage && Categories[selectedLanguage].topics.length > 0) {
      setSelectedTopic(Categories[selectedLanguage].topics[0]);
    }
  }, [selectedLanguage]);

  const displayText = (language) => {
    switch (language) {
      case "CPlusPlus":
        return "C++";
      case "CSharp":
        return "C#";
      default:
        return language;
    }
  };

  return authIsReady ? (
    <div className="font-montserrat duration-300">
      {user ? (
        <div>
          <div
            style={{
              gridTemplateColumns: open ? "repeat(2, 1fr)" : "",
            }}
            className={`grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-2 px-10 md:px-20 pt-20 gap-5`}
          >
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
            <div
              className={`w-full lg:w-full h-56 shadow-xl bg-primaryLight2 rounded-xl grid grid-cols-2 place-content-center pr-11`}
            >
              <div className="flex flex-col justify-center items-center relative">
                <img
                  src={
                    data.points <= 10
                      ? badge1
                      : data.points <= 50
                      ? badge2
                      : data.points <= 100
                      ? badge3
                      : data.points <= 200
                      ? badge4
                      : data.points <= 500
                      ? badge5
                      : data.points <= 1000
                      ? badge6
                      : badge1
                  }
                  className={`w-[8rem] h-[8rem] lg:w-[9rem] lg:h-[9rem] ${
                    open ? "hidden md:block" : ""
                  }`}
                />
                <div className="font-medium absolute text-sm bottom-2 text-primaryDark">
                  {data.points <= 10
                    ? "Novice Coder"
                    : data.points <= 50
                    ? "Code Explorer"
                    : data.points <= 100
                    ? "Scripting Enthusiast"
                    : data.points <= 200
                    ? "Coding Maestro"
                    : data.points <= 500
                    ? "Algorithm Ace"
                    : data.points <= 1000
                    ? "Programming Prodigy"
                    : "Novice Coder"}
                </div>
              </div>
              <div className="h-40 ml-5  text-primaryDark flex flex-col items-start justify-center space-y-3">
                <div className="text-2xl md:text-lg lg:text-2xl font-bold">
                  {data.username ? data.username : user.displayName}
                </div>
                <div className="font-medium text-md: lg:text-xl flex flex-row items-center">
                  <img src={points} className="-ml-2 mr-2 w-10 h-10" />
                  <div>{data ? data.points : 0}</div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="shadow-xl mr-4 rounded-xl bg-primaryLight2">
                    <FaCheckCircle size={25} color="green" />
                  </div>
                  <div className="flex flex-row items-start sm:flex-col">
                    <div className="text-md md:text-lg lg:text-xl font-medium text-primaryDark text-left">
                      {data ? data.correctAnswers : 0}
                    </div>
                    {/* <div className="text-sm font-medium text-gray md:-mt-1 ml-2 sm:ml-0">
                      Correct Answers
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-11  mt-3 justify-center col-span-3 col-start-1 col-end-4 ">
                <div className="text-sm text-gray">
                  {data ? data.points : 0}
                </div>
                <div className="w-full bg-colorAccent h-2 rounded-xl relative">
                  <div
                    style={{
                      width: `${
                        data
                          ? ((data.points > 1000 ? 1000 : data) / 1000) * 100
                          : 0
                      }%`,
                    }}
                    className="absolute h-2 duration-200 bg-green-600 rounded-xl rounded-e-lg animate-pulse"
                  ></div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="text-sm text-gray mr-4">1000</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-full h-56 shadow-xl bg-primaryLight2 rounded-xl flex flex-col items-start p-5">
              <div className="font-bold text-lg md:text-xl text-primaryDark">
                Start quiz
              </div>
              <Dropdown
                label="Select Language"
                icon={Categories[selectedLanguage].icon}
                options={languageOptions}
                selectedValue={selectedLanguage}
                onSelect={(value) => setSelectedLanguage(value)}
              />
              <div className="h-2"></div>
              {selectedLanguage && (
                <Dropdown
                  label="Select Topic"
                  icon={
                    <MdTopic
                      size={25}
                      opacity={0.7}
                      color="red"
                      className="mr-2"
                    />
                  }
                  options={Categories[selectedLanguage].topics}
                  selectedValue={selectedTopic}
                  onSelect={(value) => setSelectedTopic(value)}
                />
              )}
            </div>
          </div>
          <div className="flex justify-start px-5 md:px-10 lg:px-20 py-5 font-bold text-primaryDark text-2xl">
            Select Challenge
          </div>
          <div className="px-5 md:px-10 lg:px-20 flex flex-col md:flex-row justify-center md:space-x-10 lg:space-x-11">
            {["Basic", "Advance"].map((category, index) => (
              <div
                key={index}
                className="group h-80 w-full md:w-[21rem] lg:w-[25rem] shadow-xl bg-primaryLight2 rounded-xl p-7 flex flex-col justify-center items-center cursor-pointer mb-5 md:mb-0 hover:bg-colorAccent duration-300"
              >
                <Link
                  to={"/quiz/start"}
                  state={{
                    language: displayText(selectedLanguage),
                    topic: selectedTopic,
                    category: category,
                  }}
                >
                  <div className="w-full flex justify-center">
                    <img
                      src={index === 0 ? basic : advance}
                      className="w-44 h-44"
                      alt={`category-${index}`}
                    />
                  </div>
                  <div className="font-bold text-2xl text-primaryDark group-hover:text-primaryLight">
                    {category}
                  </div>
                  <div className="font-medium text-sm mt-2 group-hover:text-primaryLight2 text-gray">
                    {index === 0
                      ? "Dive into fundamental concepts and build a solid foundation for your coding prowess. Perfect for beginners!"
                      : "Ready for a challenge? Elevate your skills with advanced topics and take your programming journey to new heights!"}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  ) : (
    <h1>Making your auth ready, please wait for a moment</h1>
  );
};

export default Dashboard;
