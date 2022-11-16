import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import FlatButton from "./FlatButton";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function InformationAbout3() {
  const navigation = useNavigation();

  return (
    <View>
      {/* Шапка начало */}
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          backgroundColor: "#CCF0D3",
          height: 80,
          textAlignVertical: "center",
          borderRadius: 10,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          style={{ paddingTop: 25, paddingLeft: 16 }}
          color="#00B324"
          onPress={() => navigation.navigate("StartPage")}
        />
        <Text
          style={[
            styles.text,
            {
              fontSize: 28,
              textAlignVertical: "center",
              marginLeft: 80,
              color: "#00B324",
              paddingBottom: 5,
            },
          ]}
        >
          Регистрация
        </Text>
      </View>
      {/* Шапка конец */}

      {/* Этапы начало */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ backgroundColor: "#B9E9C2", borderRadius: 100 }}>
            <Octicons name="check-circle" size={38} color="#24C33D" />
          </Text>
          <Text style={[styles.text, { color: "#24C33D" }]}> Этап 1</Text>
        </View>
        <Text
          style={{ height: 35, textAlignVertical: "center", color: "#24C33D" }}
        >
          --------
        </Text>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ backgroundColor: "#B9E9C2", borderRadius: 100 }}>
            <Octicons name="check-circle" size={38} color="#24C33D" />
          </Text>
          <Text style={[styles.text, { color: "#24C33D" }]}> Этап 2</Text>
        </View>
        <Text
          style={{ height: 35, textAlignVertical: "center", color: "#24C33D" }}
        >
          --------
        </Text>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={[
              styles.namber,
              { backgroundColor: "#24C33D", color: "#B9E9C2" },
            ]}
          >
            {" "}
            3{" "}
          </Text>
          <Text style={[styles.text, { color: "#24C33D" }]}> Этап 3</Text>
        </View>
      </View>
      {/* Этапы конец */}
      <View style={{ marginTop: 8, alignSelf: "center" }}>
        <Text style={[styles.text, { color: "#00B324", fontSize: 20 }]}>
          Подписки
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  namber: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#B9E9C2",
    height: 35,
    width: 35,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#CACACA",
    fontFamily: "roboto-medium",
    fontSize: 20,
  },
  text: {
    color: "#B9E9C2",
    fontFamily: "RobotoFlex-Regular",
    fontSize: 15,
  },
});
