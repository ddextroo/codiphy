import { FaArrowRight } from "react-icons/fa";
import useQuiz from "./../hooks/useQuiz";
import { useState, useEffect } from "react";
import loadingQuiz from "./../assets/loadingQuiz.json";
import { Player } from "@lottiefiles/react-lottie-player";
import Claim from "../hooks/useClaim";
import Timer from "./timer";

const BasicQuiz = ({ title, topic, language }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [jsonData, setJsonData] = useState("");
  const [dataFetched, setDataFetched] = useState(false);

  const { response, loading } = useQuiz({
    topic: topic,
    language: language,
    type: "basic",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!dataFetched && !loading && response && response.response) {
          const parsedData = JSON.parse(response.response);
          console.log(parsedData);
          setJsonData(parsedData);
          setDataFetched(true);
        }
      } catch (error) {
        // Handle error if needed
        // console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, [response]); //

  if (loading || !jsonData) {
    return (
      <div className="h-full min-h-screen flex flex-col items-center justify-center space-y-4 mx-10 ">
        <Player src={loadingQuiz} className="player w-96 h-96" loop autoplay />
        <div className="font-bold text-xl md:text-3xl text-primaryLight py-11">
          Loading...
        </div>
      </div>
    );
  }

  const dataVar = jsonData.quiz?.questions
    ? jsonData.quiz.questions
    : jsonData.questions
    ? jsonData.questions
    : jsonData.quiz
    ? jsonData.quiz
    : "";
  const questionChoices = dataVar[currentQuestion].options
    ? dataVar[currentQuestion].options
    : dataVar[currentQuestion].choices
    ? dataVar[currentQuestion].choices
    : {};

  const handleAnswer = (selectedOption) => {
    const correctOption = dataVar[currentQuestion]?.answer;
    setSelectedAnswer(selectedOption);

    if (selectedOption === correctOption) {
      setScore(score + 1);
    }
    setTimeout(() => {
      handleNextQuestion();
    }, 2500);
  };

  const correctOption = dataVar[currentQuestion]?.answer;

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;

    const quizLength = dataVar.length;

    if (nextQuestion < quizLength) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz completed! Your score: ${score}/${quizLength}`);
      Claim(score, "Basic");
    }
  };

  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-center space-y-4 mx-10 ">
      <div className="font-bold text-xl md:text-3xl text-primaryLight py-11 flex flex-col gap-y-5">
        <Timer duration={30} onFinish={handleNextQuestion} />
        {title}
      </div>
      <div className="font-bold md:text-lg lg:text-xl text-primaryLight">
        {jsonData && (
          <p>
            Question {currentQuestion + 1}/{dataVar.length}
          </p>
        )}
      </div>
      <div className="md:text-lg lg:text-xl text-primaryLight py-11 select-none">
        <div>{dataVar[currentQuestion].question}</div>
      </div>

      <ul className="list-none p-0">
        {Object.entries(questionChoices).map(([optionKey, optionValue]) => (
          <li key={optionKey}>
            <button
              onClick={() => handleAnswer(optionKey)}
              className={`w-full md:w-96 py-2 font-bold md:text-lg lg:text-xl rounded-xl px-5 mt-3 ${
                optionKey === selectedAnswer
                  ? optionKey === correctOption
                    ? "bg-green-800 text-white"
                    : "bg-colorAccent text-white"
                  : "bg-primaryLight text-primaryDark"
              }`}
              disabled={selectedAnswer !== null}
            >
              {`${optionKey}. ${optionValue}`}
            </button>
          </li>
        ))}
      </ul>

      <div className="w-full flex flex-row justify-end py-5">
        {selectedAnswer !== null && (
          <button
            className="w-32 py-4 bg-green-800 flex flex-row justify-center rounded-xl items-center space-x-3"
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            <div className="text-primaryLight text-md md:text-lg font-bold">
              Next
            </div>
            <FaArrowRight color="white" size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default BasicQuiz;
