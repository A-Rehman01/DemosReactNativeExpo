import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function About({ route, navigation }) {
  const { itemId, email } = route.params;
  console.log(itemId);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>About</Text>
      <Text>{email}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
