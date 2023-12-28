import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiDiscordFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import Privacy from "./footer/privacy";
import About from "./footer/aboutus";
import Contact from "./footer/contactus";
import { useState } from "react";

function Footer() {
  const [showPrivacy, setshowPrivacy] = useState(false);
  const [showAbout, setshowAbout] = useState(false);
  const [showContact, setshowContact] = useState(false);

  const openPrivacy = () => {
    setshowPrivacy(true);
  };

  const closePrivacy = () => {
    setshowPrivacy(false);
  };
  const openAbout = () => {
    setshowAbout(true);
  };

  const closeAbout = () => {
    setshowAbout(false);
  };
  const openContact = () => {
    setshowContact(true);
  };

  const closeContact = () => {
    setshowContact(false);
  };
  return (
    <div className="bg-primaryLight rounded-xl">
      <div className="flex flex-row justify-center space-x-5">
        <RiFacebookCircleFill size={30} color="gray" />
        <RiDiscordFill size={30} color="gray" />
        <RiInstagramFill size={30} color="gray" />
      </div>
      <div className="flex flex-row justify-center space-x-5 mt-3">
        <div className="text-md font-medium underline text-gray cursor-pointer"  onClick={openAbout}>
          About
        </div>
        <button className="text-md font-medium underline text-gray cursor-pointer" onClick={openPrivacy}>
          Privacy Policy
        </button>
        <div className="text-md font-medium underline text-gray cursor-pointer" onClick={openContact}>
          Contact Us
        </div>
      </div>
      <div className="text-gray text-sm my-3">
        @Codiphy 2023 All right reserved
      </div>
      <div className="text-gray text-sm my-3">Crafted By: BSIT 2-2</div>
      {showPrivacy && <Privacy onClose={closePrivacy} />}
      {showAbout && <About onClose={closeAbout} />}
      {showContact && <Contact onClose={closeContact} />}
    </div>
  );
}

export default Footer;
