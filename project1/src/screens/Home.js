import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Home</Text>

      <Button
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("About", {
            itemId: 1,
            email: "arehmana377@gmail.com",
          });
        }}
        title="Go to About..."
      />
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
