import React, { useState, useEffect } from "react";

function Timer({ duration, onFinish }) {
  const [secondsRemaining, setSecondsRemaining] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      if (secondsRemaining <= 0) {
        onFinish();
        clearInterval(intervalId);
        setSecondsRemaining(duration);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsRemaining, onFinish, duration]);

  return (
    <div className="text-xl font-bold text-center text-primaryLight2">{secondsRemaining}</div>
  );
}

export default Timer;
