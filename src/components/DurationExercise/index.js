import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Time: {formatTime(seconds)}</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={() => { setSeconds(0); setRunning(false); }}>Reset</button>
    </div>
  );
}

export default DurationExercise;