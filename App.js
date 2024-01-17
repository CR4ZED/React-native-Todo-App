import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./screens/Home";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20
  }
})

export default App;
