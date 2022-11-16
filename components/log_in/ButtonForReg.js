import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function ButtonForReg({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 90,
    height: 40,
    paddingVertical: 8,
    width: 180,
    alignSelf: "center",
    marginTop: "7%",
    borderColor: "#B9E9C2",
    backgroundColor: "#CCF0D3",
  },
  buttonText: {
    color: "#00B324",
    fontSize: 16,
    fontFamily: "roboto-medium",
    textAlign: "center",
  },
});
