import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Logo from "./../../assets/logo.png";


function Nav() {
  const [isOpen, setOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
        console.log(isSticky);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <nav
      className={`sticky top-0 p-5 bg-opacity-0 ${
        isSticky ? "bg-primaryLight shadow-lg rounded-b-lg" : ""
      }`}
    >
      <div className="flex flex-row justify-between space-x-5 md:px-5 ">
        <div className="font-bold flex flex-row items-end justify-end gap-3 mt-2 md:mt-0">
          <img src={Logo} className="w-7 h-7"></img>
          <a href="#hero">Codiphy</a>
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
                isOpen
                  ? "space-y-5 md:space-y-0 p-10 bg-primaryLight shadow-lg rounded-b-lg md:p-0 md:bg-opacity-0 md:shadow-transparent"
                  : "hidden p-0 space-y-0"
              }`}
            >
              <div className="font-semibold cursor-pointer hover:text-colorAccent">
                <a href="#objective">About</a>
              </div>
              <div className="font-semibold cursor-pointer hover:text-colorAccent">
                <a href="#language">Languages</a>
              </div>
              <div className="font-semibold cursor-pointer hover:text-colorAccent">
                <a href="#feature">Features</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
