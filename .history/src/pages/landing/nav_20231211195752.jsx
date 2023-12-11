import { useState } from "react";
import Hamburger from "hamburger-react";
import Logo from "./../../assets/logo.png";

function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <div className="flex flex-row justify-between space-x-5 ">
        <div className="font-bold flex flex-row items-end justify-end gap-3 ">
          <img src={Logo} className="w-7 h-7"></img>
          Codiphy
        </div>
        <div className="items-center flex flex-row absolute right-10">
          <div className="">
            <div className="block md:hidden">
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
              className={`justify-center flex-col md:flex md:flex-row md:space-x-5 md:w-full ${
                isOpen ? "p-20 border border-solid rounded-xl" : "hidden"
              }`}
            >
              <div className="font-semibold cursor-pointer hover:text-colorAccent">
                About
              </div>
              <div className="font-semibold cursor-pointer hover:text-colorAccent">
                Languages
              </div>
              <div className="font-semibold cursor-pointer hover:text-colorAccent">
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
