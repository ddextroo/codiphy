import { useState } from "react";
import Hamburger from "hamburger-react";
import Logo from "./../../assets/logo.png";

function nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row justify-between space-x-5">
        <div className="font-bold flex flex-row items-end justify-end">
          <img src={Logo} className="w-7 h-7"></img>
          Codiphy
        </div>
        <div className="hi  dden justify-center space-x-5 md:flex md:flex-row items-end">
          <div className="font-medium cursor-pointer hover:text-colorAccent">
            About
          </div>
          <div className="font-medium cursor-pointer hover:text-colorAccent">
            Languages
          </div>
          <div className="font-medium cursor-pointer hover:text-colorAccent">
            Features
          </div>
        </div>
        <div>
          <Hamburger
            size={20}
            color="#3a3a3a"
            toggled={isOpen}
            toggle={setOpen}
            easing="ease-in"
          />
        </div>
      </div>
    </div>
  );
}

export default nav;
