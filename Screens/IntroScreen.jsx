import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import intoroLogo from "../assets/Images/intoroLogo.png";
const IntroScreen = () => {
  return (
    <View style={[styles.main, styles.display]}>
      <View style={styles.display}>
        <Image
          source={intoroLogo}
          style={{ height: 80, width: 80, margin: 20 }}
        />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  display: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F8F4EC",
  },
});

export default IntroScreen;
