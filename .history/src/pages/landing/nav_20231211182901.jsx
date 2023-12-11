import { useState } from "react";
import Hamburger from "hamburger-react";
import Logo from "./../../assets/logo.png";

function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <div className="flex flex-row justify-between space-x-5 bg-blue-gray-500">
        <div className="font-bold flex flex-row items-end justify-end gap-3">
          <img src={Logo} className="w-7 h-7"></img>
          Codiphy
        </div>
        <div className="items-center flex flex-row  bg-colorAccent md:w-full">
          <div className="justify-center flex flex-row space-x-5 bg-amber-500">
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
          <div className=" bg-deep-orange-600 visible md:invisible">
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
        </div>
      </div>
    </nav>
  );
}

export default Nav;
