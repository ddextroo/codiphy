import { RiJavascriptFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

function languages() {
  return (
    <div id="language" className="mt-10 max-h-full md:mt-52 md:h-fit lg:h-screen lg:mt-0">
      <div className="mt-10 text-colorAccent text-xl font-bold text-center md:text-3xl mb-10">
        Supported Programming Languages
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-5 place-items-center sm:mx-5">
        <div className="flex flex-row justify-start md:justify-center items-center space-x-2 w-full">
          <RiJavascriptFill size={50} color="gray" />
          <div className="text-lg font-medium md:2xl">Javascript</div>
        </div>

        <div className="flex flex-row justify-start md:justify-center items-center space-x-2 w-full">
          <SiCplusplus size={50} color="gray" />
          <div className="text-lg font-medium md:2xl">C++</div>
        </div>

        <div className="flex flex-row justify-start md:justify-center items-center space-x-2 w-full">
          <LiaJava size={50} color="gray" />
          <div className="text-lg font-medium md:2xl">Java</div>
        </div>

        <div className="flex flex-row justify-start md:justify-center items-center space-x-2 w-full">
          <FaPython size={50} color="gray" />
          <div className="text-lg font-medium md:2xl">Python</div>
        </div>
        <div className="flex flex-row justify-center md:justify-center  items-center space-x-2 w-96 bg-blue-gray-500">
          <SiCsharp size={50} color="gray" />
          <div className="text-lg font-medium md:2xl">C#</div>
        </div>
      </div>
    </div>
  );
}

export default languages;
