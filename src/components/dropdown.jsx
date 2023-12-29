// Dropdown.js
import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

const Dropdown = ({ label, options, selectedValue, onSelect, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    toggleDropdown();
  };

  return (
    <div className="relative w-full ">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 relative">
        <button
          onClick={toggleDropdown}
          type="button"
          className="bg-transparent w-full border border-gray border-1 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring focus:border-colorAccent sm:text-sm flex items-center relative"
        >
          <span className="inset-y-0 left-0 flex items-center pl-2 pointer-events-none mr-2">
            {icon}
          </span>
          <span className="block truncate">{selectedValue}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <FaChevronCircleDown size={15} color="gray" />
          </span>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-full max-w-[32rem] rounded-md shadow-lg bg-white ring-1 ring-gray ring-opacity-5 z-10 overflow-y-auto h-56 overflow-x-auto duration-300">
            <div className="py-1">
              {options.map((option) => (
                <div
                  key={option}
                  className="cursor-pointer flex items-center gap-x-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleSelect(option)}
                >
                  <div>
                    {option === "JavaScript" ? (
                      <RiJavascriptFill size={25} opacity={0.7} color="red" />
                    ) : option === "CPlusPlus" ? (
                      <SiCplusplus size={25} opacity={0.7} color="red" />
                    ) : option === "Java" ? (
                      <LiaJava size={25} opacity={0.7} color="red" />
                    ) : option === "Python" ? (
                      <FaPython size={25} opacity={0.7} color="red" />
                    ) : option === "CSharp" ? (
                      <SiCsharp size={25} opacity={0.7} color="red" />
                    ) : (
                      icon
                    )}
                  </div>
                  <span className="whitespace-wrap text-left overflow-hidden ">
                    {option}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
