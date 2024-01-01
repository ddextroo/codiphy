import { FaArrowRight } from "react-icons/fa";
import useQuiz from "./../hooks/useQuiz";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import loadingQuiz from "./../assets/loadingQuiz.json";
import { Player } from "@lottiefiles/react-lottie-player";
import Timer from "./timer";
import Claim from "../hooks/useClaim";

const BasicQuiz = ({ title, topic, language }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [jsonData, setJsonData] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

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
    setResetTimer(true);
    setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz completed! Your score: ${score}/${length}`);
      Claim(score, "Advance");
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


  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-center space-y-4 mx-10 ">
      <div className="font-bold text-xl md:text-3xl text-primaryLight py-11 flex flex-col gap-y-5">
        <Timer
          duration={120}
          onFinish={handleNextQuestion}
          resetTimer={resetTimer}
        />
        {title}
      </div>
      <div className="font-bold md:text-lg lg:text-xl text-primaryLight select-none">
        {jsonData && (
          <p>
            Question {currentQuestion + 1}/{dataVar.length}
          </p>
        )}
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
