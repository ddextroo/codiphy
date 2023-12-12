import { RiJavascriptFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

function languages() {
  return (
    <div className="mt-10 md:min-h-screen lg:mt-0">
      <div className="mt-10 text-colorAccent font-bold text-1xl md:text-3xl mb-10">
        Supported Programming Languages
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-5 place-items-center">
        <div className="flex flex-row justify-center items-center space-x-2">
          <RiJavascriptFill size={70} color="gray" />
          <div className="text-lg font-medium md:2xl">Javascript</div>
        </div>

        <div className="flex flex-row justify-center items-center space-x-2">
        <SiCplusplus style={{ fontSize: '50%', color: 'gray' }} />
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
