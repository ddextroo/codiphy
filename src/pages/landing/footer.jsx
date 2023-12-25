import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiDiscordFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import Privacy from "./footer/privacy";
import { useState } from "react";

function footer() {
  const [showPrivacy, setshowPrivacy] = useState(false);
//goods na, kamo nalang bahala sa contents ana. kibaw namos design tong sample naa sa generator
// adto nalang mo edit sa privacy
// ako nani i off?
  const openPrivacy = () => {
    setshowPrivacy(true);
  };

  const closePrivacy = () => {
    setshowPrivacy(false);
  };
  return (
    <div className="bg-primaryLight rounded-xl">
      <div className="flex flex-row justify-center space-x-5">
        <RiFacebookCircleFill size={30} color="gray" />
        <RiDiscordFill size={30} color="gray" />
        <RiInstagramFill size={30} color="gray" />
      </div>
      <div className="flex flex-row justify-center space-x-5 mt-3">
        <div className="text-md font-medium underline text-gray cursor-pointer">
          About
        </div>
        <button className="text-md font-medium underline text-gray cursor-pointer" onClick={openPrivacy}>
          Privacy Policy
        </button>
        <div className="text-md font-medium underline text-gray cursor-pointer">
          Contact Us
        </div>
      </div>
      <div className="text-gray text-sm my-3">
        @Codiphy 2023 All right reserved
      </div>
      <div className="text-gray text-sm my-3">Crafted By: DEV</div>
      {showPrivacy && <Privacy onClose={closePrivacy} />}
    </div>
  );
}

export default footer;
