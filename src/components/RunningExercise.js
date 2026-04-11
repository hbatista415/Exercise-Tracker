import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";

export default function RunningExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;

  const [laps, setLaps] = useState(0);

  const suggestedExercise = exercises.find(
    (e) => e.id === exercise.suggested
  );

  return (
    <View>
      <Text>{exercise.name}</Text>
      <Text>Laps: {laps}</Text>

      <Button title="Add Lap" onPress={() => setLaps(laps + 1)} />
      <Button title="Reset" onPress={() => setLaps(0)} />

      <Button
        title="Suggested Exercise"
        onPress={() => {
          let screen;

          if (suggestedExercise.type === "repetition") screen = "Repetition";
          else if (suggestedExercise.type === "duration") screen = "Duration";
          else if (suggestedExercise.type === "running") screen = "Running";

          navigation.push(screen, {
            exercise: suggestedExercise,
            exercises
          });
        }}
      />

      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}