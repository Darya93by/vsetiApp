import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function FlatButton({ text, onPress }) {
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
    borderRadius: 10,
    height: 40,
    paddingVertical: 8,

    backgroundColor: "#24C33D",
    width: 265,
    alignSelf: "center",
    marginTop: "7%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "roboto-medium",
    textAlign: "center",
  },
});
