import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function StartQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Fetch questions from the API
    const fetchQuestions = async () => {
      try {
        const response = await axios.post(import.meta.env.VITE_API_URL, {
          topic: "Python - Conditions and Loops",
          language: "python",
          items: 10,
          type: "basic",
        });
        const { quiz } = response.data;
        console.log(quiz);
        setQuestions(quiz);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);
  const handleAnswer = (selectedOption) => {
    const correctOption = questions.quiz[currentQuestion].answer;

    setSelectedAnswer(selectedOption);

    if (selectedOption === correctOption) {
      setScore(score + 1);
    }
  };

  const correctOption = questions.quiz[currentQuestion].answer;

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz completed! Your score: ${score}/${questions.quiz.length}`);
    }
  };

  if (questions.length === 0) {
    // Render a loading state while fetching questions
    return <p>Loading...</p>;
  }

  // Assuming this code is in your component
  return (
    <div className="bg-gradient-to-b from-colorAccent to-black font-montserrat">
      <div className="h-full min-h-screen flex flex-col items-center justify-center space-y-4 mx-10 ">
        <div className="font-bold text-xl md:text-3xl text-primaryLight py-11">
          History Quiz - Very Hard
        </div>

        <div className="font-bold md:text-lg lg:text-xl text-primaryLight">
          {`Question ${currentQuestion + 1}/${questions.quiz.length}`}
        </div>
        <div className="md:text-lg lg:text-xl text-primaryLight py-11">
          {questions.quiz[currentQuestion].question}
        </div>
        <ul className="list-none p-0">
          {Object.entries(questions.quiz[currentQuestion].options).map(
            ([optionKey, optionValue]) => (
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
            )
          )}
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
              {/* Assuming you have the appropriate icon component */}
              <FaArrowRight color="white" size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StartQuiz;
