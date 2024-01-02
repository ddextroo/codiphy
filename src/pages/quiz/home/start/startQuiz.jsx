import BasicQuiz from "./../../../../components/basicQuiz";
import AdvanceQuiz from "./../../../../components/advanceQuiz";
import SelectTopic from "./../../../../components/SelectTopic";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import quizBackground from "./../../../../assets/quizBackground.jpg";

function StartQuiz() {
  const location = useLocation();
  const { language, topic, category } = location.state;

  const getTitle = () => {
    return `${language} - ${topic} | ${
      category.charAt(0).toUpperCase() + category.slice(1)
    }`;
  };

  return (
    <div
      className=" font-montserrat h-full min-h-screen"
      style={{
        backgroundImage: `url(${quizBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <Helmet>
        <title>Codiphy :: {getTitle()}</title>
      </Helmet>
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
