import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Running Laps", type: "repetition" },
     { name: "Running Exercise", type: "running" },
  ];

  const renderExercise = () => {
    if (!selectedExercise) return <p>Select an exercise to start</p>;

    switch (selectedExercise.type) {
      case "repetition":
        return <RepetitionExercise name={selectedExercise.name} />;
      case "duration":
        return <DurationExercise name={selectedExercise.name} />;
      case "running":
        return <RunningExercise name={selectedExercise.name} />;
      default:
        return <p>Unknown Exercise</p>;
    }
  };

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>
      {!selectedExercise && (
        <div>
          {exercises.map((ex, index) => (
            <button key={index} onClick={() => setSelectedExercise(ex)}>
              {ex.name}
            </button>
          ))}
        </div>
      )}
      <div>{renderExercise()}</div>
    </div>
  );
}



export default App;
/*
References:

1. https://reactjs.org/docs/components-and-props.html
2. https://reactjs.org/docs/state-and-lifecycle.html
3.https://reactjs.org/docs/handling-events.html
4. https://developer.mozilla.org/en-US/docs/Web/API/setInterval
5.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
   
*/