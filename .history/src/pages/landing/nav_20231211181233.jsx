import { useState } from "react";
import Hamburger from "hamburger-react";
import Logo from "./../../assets/logo.png";

function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <div className="flex flex-row justify-between space-x-5">
        <div className="visible items-center md:invisible">
          
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
    </nav>
  );
}

export default Nav;
