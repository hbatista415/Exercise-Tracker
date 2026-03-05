import React, { useState } from "react";

function RunningExercise() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  return (
    <div>
      <h2>Running Exercise</h2>
      <p>Time: {time}</p>

      <button onClick={() => setTime(time + 1)}>
        Increase Time
      </button>

      <button onClick={recordLap}>
        Record Lap
      </button>

      <h3>Laps</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap}</li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;