import BasicQuiz from "./../../../../components/basicQuiz";
import AdvanceQuiz from "./../../../../components/advanceQuiz";
import SelectTopic from "./../../../../components/SelectTopic";
import { useLocation } from "react-router-dom";

function StartQuiz() {
  const location = useLocation();
  const { language, topic, category } = location.state;

  const getTitle = () => {
    return `${language} - ${topic} | ${
      category.charAt(0).toUpperCase() + category.slice(1)
    }`;
  };

  return (
    <div className="bg-gradient-to-b from-colorAccent to-black font-montserrat h-full min-h-screen">
      {category === "Basic" && (
        <BasicQuiz title={getTitle()} topic={topic} language={language} />
      )}
      {category === "Advance" && (
        <AdvanceQuiz title={getTitle()} topic={topic} language={language} />
      )}
      {category === null && <SelectTopic />}
    </div>
  );
}

export default StartQuiz;
