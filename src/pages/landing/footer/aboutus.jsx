import { IoCloseCircle } from "react-icons/io5";
import React from "react";
import dexter from "./../../../assets/Members/d.jpg";
import kenny from "./../../../assets/Members/20220807_153551-01.jpeg";
import lj from "./../../../assets/Members/lj.jpg";
import aivy from "./../../../assets/Members/aivyh.jpg";
import jessel from "./../../../assets/Members/jesil.jpg"
import leslie from "./../../../assets/Members/leslie.jpeg"


const About = ({ onClose }) => {
  return (
    <div className="modal-overlay justify-center items-center flex fixed inset-0 z-50 bg-black bg-opacity-50 rounded-xl">
      <div className="modal justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto relative w-auto my-6 mx-auto">
        <div className="modal-content p-5 backdrop-filter divide-y divide-gray space-y-3 bg-primaryLight rounded-xl max-h-full h-full font-poppins overflow-auto overflow-x-hidden ml-20 mr-20 max-w-3xl">
          <div className="flex flex-row justify-between items-center mt-5 mb-7">
            <div className="text-3xl font-semibold">About us</div>
            <IoCloseCircle
              size={25}
              color="gray"
              onClick={onClose}
              className=" cursor-pointer"
            />
          </div>
          <div className="overflow-y-auto h-[30rem] py-5 text-left">
            <div className="text-xl font-semibold text-center">
              About the App
            </div>
            <div className="text-md md:text-lg bg-opacity-0 py-5">
              <div className="mb-3 text-justify px-5">
                Codiphy is a cutting-edge educational platform revolutionizing
                programming learning through AI-generated challenges,
                personalized learning paths, and a vibrant community. The
                platform's dynamic interface ensures a seamless and engaging
                experience, while its AI-driven question formulation tailors
                challenges to individual skill levels. Codiphy fosters a
                supportive community where learners can collaborate, share
                knowledge, and celebrate successes. The personalized learning
                paths cater to each user's unique strengths and preferences,
                allowing for flexible and targeted skill development. In
                essence, Codiphy combines innovative technology with a
                collaborative community to redefine how individuals enhance
                their coding skills, making programming proficiency accessible
                and enjoyable for learners of all levels.
              </div>
              <div className="text-md md:text-lg bg-opacity-0 py-5"></div>
            </div>
            <div className="text-xl font-semibold text-center">Developers</div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-20 gap-2 lg:grid-cols-3 place-items-center mt-10">
              <div className="flex flex-col gap-y-6 justify-start md:justify-center items-center space-x-2 w-full">
                <div
                  className="w-28 h-28 rounded-full"
                  style={{
                    backgroundImage: `url(${dexter})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="text-lg font-medium md:2xl">
                  Dexter G. Inguito
                </div>
                <a
                  href="https://dextrolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-32 py-2 text-md md:text-sm rounded-xl font-medium bg-colorAccent text-primaryLight px-5">
                    View profile
                  </button>
                </a>
              </div>
              <div className="flex flex-col gap-y-6 justify-start md:justify-center items-center space-x-2 w-full">
              <div
                  className="w-28 h-28 rounded-full"
                  style={{
                    backgroundImage: `url(${aivy})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="text-lg font-medium md:2xl">Aivy C. Unabia</div>
                <a
                  href="https://aesthethyve-unabia-portfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-32 py-2 text-md md:text-sm rounded-xl font-medium bg-colorAccent text-primaryLight px-5">
                    View profile
                  </button>
                </a>
              </div>

              <div className="flex flex-col gap-y-6 justify-start md:justify-center items-center space-x-2 w-full">
              <div
                  className="w-28 h-28 rounded-full"
                  style={{
                    backgroundImage: `url(${jessel})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="text-lg font-medium md:2xl">
                  Jessel Ann Piamonte
                </div>
                <a
                  href="https://piamontejess.github.io/jesselann/?fbclid=IwAR1iZG96rcZ83WmrHdvyhTJZjYl4VcpAcgPMfCdRQQqUvvO7spG9mM_RcSY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-32 py-2 text-md md:text-sm rounded-xl font-medium bg-colorAccent text-primaryLight px-5">
                    View profile
                  </button>
                </a>
              </div>

              <div className="flex flex-col gap-y-6 justify-start md:justify-center items-center space-x-2 w-full">
              <div
                  className="w-28 h-28 rounded-full"
                  style={{
                    backgroundImage: `url(${leslie})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                <div className="text-lg font-medium md:2xl">
                  Jane Leslie Fiel
                </div>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <button className="w-32 py-2 text-md md:text-sm rounded-xl font-medium bg-colorAccent text-primaryLight px-5">
                    View profile
                  </button>
                </a>
              </div>
              <div className="flex flex-col gap-y-6 justify-start md:justify-center items-center space-x-2 w-full ">
              <div
                  className="w-28 h-28 rounded-full"
                  style={{
                    backgroundImage: `url(${kenny})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="text-lg font-medium md:2xl">
                  Kenny Jay O. Largo
                </div>
                
                <a
                  href="https://kennyjay-portfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-32 py-2 text-md md:text-sm rounded-xl font-medium bg-colorAccent text-primaryLight px-5">
                    View profile
                  </button>
                </a>
              </div>
              <div className="flex flex-col gap-y-6 justify-start md:justify-center items-center space-x-2 w-full ">
              <div
                  className="w-28 h-28 rounded-full"
                  style={{
                    backgroundImage: `url(${lj})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="text-lg font-medium md:2xl">
                  Lourd Jonas Torrejos
                </div>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <button className="w-32 py-2 text-md md:text-sm rounded-xl font-medium bg-colorAccent text-primaryLight px-5">
                    View profile
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
