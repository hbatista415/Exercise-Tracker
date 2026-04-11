import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@rneui/themed';

export default function RepetitionExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;

  const [count, setCount] = useState(0);

  const suggestedExercise = exercises.find(
    (e) => e.id === exercise.suggested
  );

  return (
    <View>
      <Text>{exercise.name}</Text>
      <Text>Count: {count}</Text>

      <Button title="Add Rep" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />

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