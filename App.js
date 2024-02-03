import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./Screens/IntroScreen";
import MainScreen from "./Screens/MainScreen";

export default function App() {
  const [isloaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  return (
    <View style={styles.container}>
      {isloaded === true ? <MainScreen /> : <IntroScreen />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
