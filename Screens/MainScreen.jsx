import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import styles from "../Styles/MainScreen";
// import ColumnKeys from "../Components/ColumnKeys";
const MainScreen = () => {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.result}>
        <Text style={styles.calculatedNumber}>354</Text>
      </ScrollView>
      <View style={styles.keyPad}>
        <View style={styles.columnKeys}>
          <Pressable>
            <View style={[styles.button, { backgroundColor: "orange" }]}>
              <Text style={styles.buttonKey}>AC </Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.button}>
              <Text style={styles.buttonKey}>()</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={[styles.button, { backgroundColor: "white" }]}>
              <Text style={styles.buttonKey}>%</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.button, { backgroundColor: "white" }]}>
              <Text style={styles.buttonKey}>/</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.columnKeys}>
          <Pressable>
            <View style={[styles.button]}>
              <Text style={styles.buttonKey}>7 </Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.button}>
              <Text style={styles.buttonKey}>8</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={[styles.button, { backgroundColor: "white" }]}>
              <Text style={styles.buttonKey}>9</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.button, { backgroundColor: "white" }]}>
              <Text style={styles.buttonKey}>*</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.columnKeys}>
          <Pressable>
            <View style={[styles.button]}>
              <Text style={styles.buttonKey}>4 </Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.button}>
              <Text style={styles.buttonKey}>5</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={[styles.button, { backgroundColor: "white" }]}>
              <Text style={styles.buttonKey}>6</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.button, { backgroundColor: "white" }]}>
              <Text style={styles.buttonKey}>-</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.columnKeys}>
          <Pressable>
            <View style={[styles.button]}>
              <Text style={styles.buttonKey}>1 </Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.button}>
              <Text style={styles.buttonKey}>2</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={[styles.button, { backgroundColor: "white" }]}>
              <Text style={styles.buttonKey}>3</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.button, { backgroundColor: "white" }]}>
              <Text style={styles.buttonKey}>+</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.columnKeys}>
          <Pressable>
            <View style={[styles.button]}>
              <Text style={styles.buttonKey}>0 </Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.button}>
              <Text style={styles.buttonKey}>.</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={[styles.button, { backgroundColor: "white" }]}>
              <Text style={styles.buttonKey}> {"<"} </Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.button, { backgroundColor: "lightgreen" }]}>
              <Text style={styles.buttonKey}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
