import React, { useState, useEffect, useCallback } from "react";

function Timer({ duration, onFinish, resetTimer }) {
  const [secondsRemaining, setSecondsRemaining] = useState(duration);

  const reset = useCallback(() => {
    setSecondsRemaining(duration);
  }, [duration]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      if (secondsRemaining <= 0) {
        onFinish();
        clearInterval(intervalId);
        reset();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsRemaining, onFinish, duration, reset]);

  useEffect(() => {
    if (resetTimer) {
      reset();
    }
  }, [resetTimer, reset]);

  return (
    <div className="text-xl font-bold text-center text-primaryLight2">{secondsRemaining}</div>
  );
}

export default Timer;
