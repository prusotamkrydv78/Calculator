import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../Styles/MainScreen";

const ColumnKeys = ({ key1, key2, key3, key4 }) => {
  return (
    <View style={styles.columnKeys}>
      <Pressable>
        <View style={styles.button}>
          <Text style={styles.buttonKey}>{key1}</Text>
        </View>
      </Pressable>

      <Pressable>
        <View style={styles.button}>
          <Text style={styles.buttonKey}>{key2}</Text>
        </View>
      </Pressable>

      <Pressable>
        <View style={styles.button}>
          <Text style={styles.buttonKey}>{key3}</Text>
        </View>
      </Pressable>

      <Pressable>
        <View style={styles.button}>
          <Text style={styles.buttonKey}>{key4}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ColumnKeys;
