import React, { useState } from "react";
import BasicQuiz from "./../../../../components/basicQuiz";
import AdvanceQuiz from "./../../../../components/advanceQuiz";
import SelectTopic from './../../../../components/SelectTopic'

function StartQuiz() {
  // Assuming you have a state to track the user's choice (basic or advance)
  const [quizType, setQuizType] = useState("advance"); // Defaulting to basic

  // Function to handle the user's choice
  // const handleQuizTypeChange = (type) => {
  //   setQuizType(type);
  // };

  // Example data (replace with your actual data)
  const topic = "Functions, Filter, and Map";
  const language = "Python";

  const getTitle = () => {
    return `${language} - ${topic} | ${quizType.charAt(0).toUpperCase() + quizType.slice(1)}`;
  };

  return (
    <div className="bg-gradient-to-b from-colorAccent to-black font-montserrat h-full min-h-screen">
      {quizType === 'basic' && (
        <BasicQuiz title={getTitle()} topic={topic} language={language} />
      )}
      {quizType === 'advance' && (
        <AdvanceQuiz title={getTitle()} topic={topic} language={language} />
      )}
      {quizType === null && (
        <SelectTopic/>
      )}

      {/* Example: Buttons to switch between basic and advance quizzes */}
      {/* <div>
        <button onClick={() => handleQuizTypeChange("basic")}>
          Basic Quiz
        </button>
        <button onClick={() => handleQuizTypeChange("advance")}>
          Advance Quiz
        </button>
      </div> */}
    </div>
  );
}

export default StartQuiz;
