import { FaArrowRight } from "react-icons/fa";
import useQuiz from "./../hooks/useQuiz";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import loadingQuiz from "./../assets/loadingQuiz.json";
import { Player } from "@lottiefiles/react-lottie-player";

const BasicQuiz = ({ title, topic, language }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [jsonData, setJsonData] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

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
          setJsonData(parsedData);
          setDataFetched(true);
        }
      } catch (error) {
        // console.error("Error fetching or parsing data:", error);
        // setError(error);
      }
    };

    fetchData();
  }, [response, loading, dataFetched]);

  const handleReload = () => {
    setDataFetched(false);
    setError(null);
  };

  if (loading || !jsonData) {
    return (
      <div className="h-full min-h-screen flex flex-col items-center justify-center space-y-4 mx-10 ">
        <Player
          src={loadingQuiz}
          className="player w-96 h-96"
          loop
          autoplay
        />
        <div className="font-bold text-xl md:text-3xl text-primaryLight py-11">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full min-h-screen flex flex-col items-center justify-center space-y-4 mx-10 ">
        <div className="font-bold text-xl md:text-3xl text-primaryLight py-11">
          Error fetching data. Please try again.
        </div>
        <button
          className="bg-colorAccent text-primaryLight p-2 w-32 rounded-xl font-bold"
          onClick={handleReload}
        >
          Reload
        </button>
      </div>
    );
  }

  const handleAnswer = () => {
    const correctOption = jsonData.questions[currentQuestion].answer;

    if (formData.answer === correctOption) {
      setScore(score + 1);
      setIsAnswerCorrect(true); // Set the state to true if the answer is correct
    } else {
      setIsAnswerCorrect(false); // Set the state to false if the answer is incorrect
    }

    setSelectedAnswer(formData.answer);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerCorrect(false); // Reset the correct answer state
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < jsonData.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(
        `Quiz completed! Your score: ${score}/${jsonData.questions.length}`
      );
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
      <div className="font-bold text-xl md:text-3xl text-primaryLight py-11">
        {title}
      </div>
      <div className="font-bold md:text-lg lg:text-xl text-primaryLight">
        {`Question ${currentQuestion + 1}/${jsonData.questions.length}`}
      </div>
      <div className="md:text-lg lg:text-xl text-primaryLight py-11">
        {jsonData.questions[currentQuestion].question}
      </div>
      <SyntaxHighlighter language={language} style={dark} className="select-none">
        {jsonData.questions[currentQuestion].code}
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
