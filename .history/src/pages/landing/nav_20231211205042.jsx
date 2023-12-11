import { useState } from "react";
import Hamburger from "hamburger-react";
import Logo from "./../../assets/logo.png";

function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="sticky top-0">
      <div className="flex flex-row justify-between space-x-5 md:px-5 ">
        <div className="font-bold flex flex-row items-end justify-end gap-3 mt-2 md:mt-0">
          <img src={Logo} className="w-7 h-7"></img>
          Codiphy
        </div>
        <div className="flex flex-row absolute right-0 md:right-10 md:w-full md:justify-center md:relative ">
          <div className="">
            <div className="block right-2 absolute md:hidden">
              <Hamburger
                size={20}
                color="#3a3a3a"
                toggled={isOpen}
                toggle={setOpen}
                easing="ease-in"
                onToggle={(toggled) => {
                  if (toggled) {
                    // open a menu
                    console.log("open");
                  } else {
                    // close a menu
                    console.log("close");
                  }
                }}
              />
            </div>
            <div
              className={`justify-center flex-col  md:flex md:flex-row md:space-x-5 md:mt-2 md:w-full ${
                isOpen ? "p-10 bg-colorAccent border border-solid rounded-b-lg border-gray md:p-0 md:border-opacity-0" : "hidden"
              }`}
            >
              <div className="font-semibold cursor-pointer hover:text-primaryLight">
                About
              </div>
              <div className="font-semibold cursor-pointer hover:text-primaryLight">
                Languages
              </div>
              <div className="font-semibold cursor-pointer hover:text-primaryLight">
                Features
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
