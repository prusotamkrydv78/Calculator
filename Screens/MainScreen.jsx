import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import styles from "../Styles/MainScreen";
import ColumnKeys from "../Components/ColumnKeys";
const MainScreen = () => {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.result}>
        <Text style={styles.calculatedNumber}>354</Text>
      </ScrollView>
      <View style={styles.keyPad}>
        <ColumnKeys key1="AC" key2="()" key3={"%"} key4={"/"} />
        <ColumnKeys key1="7" key2="8" key3={"9"} key4={"*"} />
        <ColumnKeys key1="4" key2="5" key3={"6"} key4={"-"} />
        <ColumnKeys key1="1" key2="2" key3={"3"} key4={"+"} />
        <ColumnKeys key1="0" key2="." key3={"<"} key4={"="} />
      </View>
    </View>
  );
};

export default MainScreen;