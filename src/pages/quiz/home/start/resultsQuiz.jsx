import Claim from "./../../../../hooks/useClaim";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useState } from "react";

const ResultQuiz = ({ type, score, length, topic }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  return (
    <div className="min-h-screen">
      <Confetti width={screenWidth} height={screenHeight} />
      <div className="flex flex-col items-center h-screen justify-center gap-y-5">
        <div className="text-primaryLight font-bold text-3xl flex flex-col gap-y-10">
          <div>{topic}</div>
          Congratulations
        </div>
        <div className=" w-auto h-auto p-20 rounded-full bg-colorAccent">
          <div className=" text-6xl text-primaryLight font-bold">
            {score}/{length}
          </div>
        </div>
        <button
          className="py-3 px-10 w-auto bg-colorAccent text-primaryLight font-bold rounded-xl"
          onClick={() => Claim(score, type)}
        >
          <Link to="/quiz">Claim Reward</Link>
        </button>
      </div>
    </div>
  );
};

export default ResultQuiz;
