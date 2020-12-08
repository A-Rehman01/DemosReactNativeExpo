import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import Navigation from "./src/config/Navigation";
export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE0F8",
    alignItems: "center",
    // paddingTop: 20,
  },
  main1: {
    alignItems: "center",
    marginTop: 30,
    flex: 1,
    width: "100%",
    backgroundColor: "red",
  },
  main2: {
    flex: 6,
    width: "100%",
    backgroundColor: "green",
    alignItems: "center",
  },
  main3: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "yellow",
  },
  boxes: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "flex-end",
  },
  items: {
    backgroundColor: "white",
    width: 120,
    height: 100,
    marginTop: 10,
  },
  carImage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  inpputtext: {
    borderColor: "black",
    borderWidth: 1,
    width: 300,
    padding: 5,
    height: 40,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: "#00BFFF",
    padding: 10,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 20,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 23,
  },
});
