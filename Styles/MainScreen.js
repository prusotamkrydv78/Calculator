import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    marginTop: "10%",
  },
  result: {
    elevation: 5,
    backgroundColor: "white",
    width: "90%",
    maxHeight: "35%",
    borderRadius: 5,
    display: "flex",
    padding: 20,
  },
  calculatedNumber: {
    textAlign: "right",
    fontSize: 35,
  },
  keyPad: {
    marginTop: 30,
    minHeight: "65%",
    display: "flex",
    width: "90%",
  },
  columnKeys: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  button: {
    elevation: 5,
    height: 63,
    width: 63,
    backgroundColor: "white",
    margin: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonKey: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
