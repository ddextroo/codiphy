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
  }, []); 

  return (
    <nav className={`sticky top-0 p-3 ${isSticky ? 'bg-blue-gray-50 rounded-b-lg' : ''}`}>
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
                isOpen ? "p-10 border border-solid rounded-b-lg border-gray md:p-0 md:border-opacity-0" : "hidden"
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
