import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { gStyle } from "../../styles/gStyle";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function MyPage({ route }) {
  const { aboutMe } = route?.params || {};
  const navigation = useNavigation();

  return (
    <View>
      <View style={gStyle.header}>
        <AntDesign
          name="arrowleft"
          size={30}
          style={{ paddingTop: 12, paddingLeft: 16 }}
          color="#00B324"
          onPress={() => navigation.goBack()}
        />
        <Text style={gStyle.registration}>
          {aboutMe.name} {aboutMe.lastname}
        </Text>
      </View>

      {/* аваторка */}
      <Image source={aboutMe.avatar} style={{ borderRadius: 10 }} />
      {/* конец аваторки */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFF",
  },
});
