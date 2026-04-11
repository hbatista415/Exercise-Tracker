import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@rneui/themed';

export default function DurationExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const suggestedExercise = exercises.find(
    (e) => e.id === exercise.suggested
  );

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <View>
      <Text>{exercise.name}</Text>
      <Text>Time: {time}s</Text>

      <Button title="Start" onPress={() => setRunning(true)} />
      <Button title="Stop" onPress={() => setRunning(false)} />

      <Button
        title="Reset"
        onPress={() => {
          setTime(0);
          setRunning(false);
        }}
      />

      <Button
        title="Suggested Exercise"
        onPress={() => {
          navigation.push(
            suggestedExercise.type === 'repetition'
              ? 'Repetition'
              : 'Duration',
            { exercise: suggestedExercise, exercises }
          );
        }}
      />

      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}