import { useEffect, useState } from "react";
import axios from "axios";

const useQuiz = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post(import.meta.env.VITE_API_URL, {
          topic: "Python - Conditions and Loops",
          language: "python",
          items: 10,
          type: "basic",
        });
        
        setResponse(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return { response, loading, error };
};

export default useQuiz;
