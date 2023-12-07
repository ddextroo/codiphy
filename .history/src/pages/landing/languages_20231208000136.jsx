import React from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

function languages() {
  return (
    <div className="min-h-screen">
      <div className="text-xl text-colorAccent font-bold mb-10 sm:text-3xl">
        Supported Programming Languages
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-5 place-items-center">
        <div className="flex flex-row justify-center items-center space-x-2">
          <RiJavascriptFill size={70} color="gray" />
          <div className="text-lg font-medium md:2xl">Javascript</div>
        </div>

        <div className="flex flex-row justify-center items-center space-x-2">
          <SiCplusplus size={70} color="gray" />
          <div className="text-lg font-medium md:2xl">C++</div>
        </div>

        <div className="flex flex-row justify-center items-center space-x-2">
          <LiaJava size={70} color="gray" />
          <div className="text-lg font-medium md:2xl">Java</div>
        </div>

        <div className="flex flex-row justify-center items-center space-x-2">
          <FaPython size={70} color="gray" />
          <div className="text-lg font-medium md:2xl">Python</div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2">
          <SiCsharp size={70} color="gray" />
          <div className="text-lg font-medium md:2xl">C#</div>
        </div>
      </div>
    </div>
  );
}

export default languages;
