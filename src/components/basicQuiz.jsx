import { FaArrowRight } from "react-icons/fa";
import useQuiz from "./../hooks/useQuiz";
import { useState, useEffect } from "react";
import loadingQuiz from "./../assets/loadingQuiz.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { ToastContainer, toast } from "react-toastify";
import ResultsQuiz from "../pages/quiz/home/start/resultsQuiz";

const BasicQuiz = ({ title, topic, language }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [jsonData, setJsonData] = useState("");
  const [dataFetched, setDataFetched] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(30);
  const [completed, setCompleted] = useState(false);

  const { response, loading } = useQuiz({
    topic: topic,
    language: language,
    type: "basic",
  });

  const success = () =>
    toast.success("🎉 Congratulations! Your answer is correct.", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastId: "success",
    });

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining((prevSeconds) => Math.max(0, prevSeconds - 1));

      if (secondsRemaining < 1) {
        setSecondsRemaining(30);
        handleNextQuestion();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsRemaining]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!dataFetched && !loading && response && response.response) {
          const parsedData = JSON.parse(response.response);
          // console.log(parsedData);
          setJsonData(parsedData);
          setDataFetched(true);
        }
      } catch (error) {
        // Handle error if needed
        // console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, [response]);

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
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setSecondsRemaining(30);
    setTimeout(() => {
      handleNextQuestion();
    }, 3000);
  };

  const correctOption = dataVar[currentQuestion]?.answer;

  const handleNextQuestion = () => {
    setIsAnswerCorrect(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;

    const quizLength = dataVar.length;
    if (nextQuestion < quizLength) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCompleted(true);
    }
  };

  return completed ? (
    <div className="min-h-screen">
      <ResultsQuiz type={"Basic"} score={score} length={dataVar.length} topic={topic} />
    </div>
  ) : (
    <div className="h-full min-h-screen flex flex-col items-center justify-center space-y-4 mx-10 ">
      <div className="font-bold text-xl md:text-3xl text-primaryLight py-11 flex flex-col gap-y-5">
        <div>{secondsRemaining}</div>
        {title}
      </div>

      <div className="md:text-lg lg:text-xl text-primaryLight py-11 select-none">
        <div>{dataVar[currentQuestion].question}</div>
      </div>

      <ul className="list-none p-0">
        {Object.entries(
          questionChoices || {
            a: dataVar[currentQuestion].a,
            b: dataVar[currentQuestion].b,
            c: dataVar[currentQuestion].c,
            d: dataVar[currentQuestion].d,
          }
        ).map(([optionKey, optionValue]) => (
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
        <div className="font-bold md:text-lg lg:text-xl text-primaryLight w-full">
          {jsonData && (
            <div className="flex items-center space-x-2 mt-3 justify-center w-full ml-3 duration-300">
              <div className="text-sm text-primaryLight2">
                {jsonData ? currentQuestion + 1 : 0}
              </div>
              <div className="w-full bg-blue-gray-900  h-2 rounded-xl relative">
                <div
                  style={{
                    width: `${
                      jsonData
                        ? ((currentQuestion + 1) / dataVar.length) * 100
                        : 0
                    }%`,
                  }}
                  className="absolute h-2 duration-200 bg-colorAccent brightness-100 rounded-xl rounded-e-lg"
                ></div>
              </div>
              <div className="flex flex-row items-center">
                <div className="text-sm text-primaryLight2 mr-4">
                  {dataVar.length}
                </div>
              </div>
            </div>
          )}
        </div>
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

      {isAnswerCorrect && success() && (
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      )}
    </div>
  );
};

export default BasicQuiz;
