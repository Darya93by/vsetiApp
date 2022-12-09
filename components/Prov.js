import { StyleSheet, View, Text, StatusBar } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";

export default function Prov() {
  const userProf = useSelector((state) => state.accaunt.name);
  console.log(userProf);
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <Text style={{ alignSelf: "center" }}> {userProf}</Text>
    </View>
  );
}
