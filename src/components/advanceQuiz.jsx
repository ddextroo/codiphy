import { FaArrowRight } from "react-icons/fa";
import useQuiz from "./../hooks/useQuiz";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import loadingQuiz from "./../assets/loadingQuiz.json";
import { Player } from "@lottiefiles/react-lottie-player";
import ResultsQuiz from "../pages/quiz/home/start/resultsQuiz";

const BasicQuiz = ({ title, topic, language }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [jsonData, setJsonData] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(120);
  const [completed, setCompleted] = useState(false);

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

  const [formData, setFormData] = useState({
    answer: "",
  });

  const { response, loading } = useQuiz({
    topic: topic,
    language: language,
    type: "advance",
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
  }, [response]); // Only run when the 'response' changes

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

  const dataVar = jsonData.questions
    ? jsonData.questions
    : jsonData.quiz
    ? jsonData.quiz
    : "";

  const handleAnswer = () => {
    const correctOption = dataVar[currentQuestion]?.answer;

    if (formData.answer === correctOption) {
      setScore(score + 1);
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }

    setSelectedAnswer(formData.answer);
    setSecondsRemaining(120);

    setTimeout(() => {
      handleNextQuestion();
    }, 3000);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerCorrect(false); // Reset the correct answer state
    const nextQuestion = currentQuestion + 1;
    const length = dataVar.length;
    if (nextQuestion < length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCompleted(true);
      // alert(`Quiz completed! Your score: ${score}/${length}`);
    }
    setFormData({
      answer: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswer();
  };

  return completed ? (
    <div className="min-h-screen">
      <ResultsQuiz
        type={"Advance"}
        score={score}
        length={dataVar.length}
        topic={topic}
      />
    </div>
  ) : (
    <div className="h-full min-h-screen flex flex-col items-center justify-center space-y-4 mx-10 ">
      <div className="font-bold text-xl md:text-3xl text-primaryLight py-11 flex flex-col gap-y-5">
        <div>{secondsRemaining}</div>
        {title}
      </div>

      <div className="md:text-lg lg:text-xl text-primaryLight py-11">
        {dataVar[currentQuestion]?.question}
      </div>
      <SyntaxHighlighter
        language={language}
        style={dark}
        className="select-none"
      >
        {dataVar[currentQuestion]?.code}
      </SyntaxHighlighter>
      <div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="answer"
              className="text-sm font-medium mb-2 flex flex-row justify-start text-primaryLight"
            >
              Answer
            </label>
            <textarea
              type="answer"
              rows="4"
              id="answer"
              className={`border rounded-lg w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline `}
              placeholder="Output"
              value={formData.answer}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-colorAccent hover:bg-red-900 text-primaryLight font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            onClick={handleAnswer}
            disabled={selectedAnswer !== null}
          >
            Submit
          </button>
        </form>
        <div className="font-bold md:text-lg lg:text-xl text-primaryLight">
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
      </div>
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
