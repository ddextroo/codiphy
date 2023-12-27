import { useState } from "react";
import axios from "axios";

const useQuiz = ({ topic, language, type }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuestions = async () => {
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, {
        topic,
        language,
        items: 30,
        type,
      });
      setResponse(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  fetchQuestions();

  return { response, loading, error };
};

export default useQuiz;
