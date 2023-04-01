import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
// import { AppState, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
// import MyStack from "./src/Navigation/Mystack";
import MyStack from "./src/navigation/Mystack";
const App = () => {
  return (
    <SafeAreaProvider>
      <MyStack />
    </SafeAreaProvider>
  );
};
export default App;
