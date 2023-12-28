import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language",
    ],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question:
      'Which programming language is known as the "mother of all languages"?',
    options: ["C", "Java", "Assembly", "Fortran"],
    correctAnswer: "C",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Counter Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "In JavaScript, what is the DOM?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Design Object Model",
      "Document Oriented Model",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    question: "Which of the following is a JavaScript package manager?",
    options: ["npm", "Python", "RubyGems", "Maven"],
    correctAnswer: "npm",
  },
  {
    question: "What is the main purpose of a version control system like Git?",
    options: [
      "To write code faster",
      "To track changes in code and collaborate with others",
      "To create backups of code",
      "To format code consistently",
    ],
    correctAnswer: "To track changes in code and collaborate with others",
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Application Process Integration",
      "Advanced Process Integration",
    ],
    correctAnswer: "Application Programming Interface",
  },
  {
    question:
      "Which programming language is often used for developing mobile apps?",
    options: ["C++", "Java", "Swift", "Python"],
    correctAnswer: "Swift",
  },
  {
    question: 'What is the purpose of the "if" statement in programming?',
    options: [
      "To declare a variable",
      "To repeat a block of code",
      "To perform conditional execution",
      "To define a function",
    ],
    correctAnswer: "To perform conditional execution",
  },
  {
    question: "What is the file extension for a Python source code file?",
    options: [".py", ".js", ".java", ".html"],
    correctAnswer: ".py",
  },
];

function DemoQuiz() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
 

  const handleAnswer = (selectedOption) => {
    const correctOption = questions[currentQuestion].correctAnswer;

    setSelectedAnswer(selectedOption);
    setCorrectAnswer(correctOption);

    if (selectedOption === correctOption) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCorrectAnswer(null);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    }
  };

  return (
    <div className="bg-gradient-to-b from-colorAccent to-black font-montserrat">
      <div className="h-full min-h-screen flex flex-col items-center justify-center space-y-4 mx-10 ">
        <div className="font-bold text-xl md:text-3xl text-primaryLight py-11">
          Demo Quiz - Very Hard
        </div>

        <div className="font-bold md:text-lg lg:text-xl text-primaryLight">
          {`Question ${currentQuestion + 1}/${questions.length}`}
        </div>
        <div className="md:text-lg lg:text-xl text-primaryLight py-11">
          {questions[currentQuestion].question}
        </div>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`w-full md:w-96 py-2 font-bold md:text-lg lg:text-xl rounded-xl px-5 ${
              option === correctAnswer
                ? "bg-green-800 text-white"
                : option === selectedAnswer
                ? "bg-colorAccent text-white"
                : "bg-primaryLight text-primaryDark"
            }`}
            disabled={selectedAnswer !== null} // Disable the button once an answer is selected
          >
            {option}
          </button>
        ))}
        <div className="w-full flex flex-row justify-end py-5">
          {selectedAnswer !== null && (
            <button
              className=" w-32 py-4 bg-green-800 flex flex-row justify-center rounded-xl items-center space-x-3"
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
    </div>
  );
}

export default DemoQuiz;
