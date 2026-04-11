import React from "react";
import { View, FlatList } from "react-native";
import { Button } from "@rneui/themed";

export default function Home({ navigation }) {

  const exercises = [
    { id: "1", name: "Push Ups", type: "repetition", suggested: "2" },
    { id: "2", name: "Plank", type: "duration", suggested: "4" },
    { id: "3", name: "Running Laps", type: "repetition", suggested: "2" },
    { id: "4", name: "Running Exercise", type: "running", suggested: "1" }
  ];

  const renderItem = ({ item }) => {
    let screen;

    if (item.type === "repetition") screen = "Repetition";
    else if (item.type === "duration") screen = "Duration";
    else if (item.type === "running") screen = "Running";

    return (
      <Button
        title={item.name}
        onPress={() => {
          navigation.push(screen, { exercise: item, exercises });
        }}
        containerStyle={{ margin: 10 }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}