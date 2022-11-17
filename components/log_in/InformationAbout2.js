import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import ButtonForReg from "./ButtonForReg";
import { gStyle } from "../../styles/gStyle";

export default function InformationAbout2() {
  const navigation = useNavigation();

  const [interests, setInterests] = useState([]);

  const [defInterests, setDefInterests] = useState([
    { interest: "Музыка", key: 1 },
    {
      interest: "Фотография",
      key: 2,
    },
    {
      interest: "Спорт",
      key: 3,
    },
    {
      interest: "Творчество",
      key: 4,
    },
    {
      interest: "Компьютерные игры",
      key: 5,
    },
    {
      interest: "Чтение",
      key: 6,
    },
    {
      interest: "Общение",
      key: 7,
    },
    {
      interest: "Саморазвитие",
      key: 8,
    },
    {
      interest: "Литература",
      key: 9,
    },
    {
      interest: "Шоппинг",
      key: 10,
    },
    {
      interest: "Трейдинг",
      key: 11,
    },
    {
      interest: "Путешествия",
      key: 12,
    },
    {
      interest: "Автомобили",
      key: 13,
    },
    {
      interest: "Мотоциклы",
      key: 14,
    },
    {
      interest: "Наука",
      key: 15,
    },
    {
      interest: "Религия",
      key: 16,
    },
    {
      interest: "Кино",
      key: 17,
    },
    { interest: "Искусство", key: 18 },
    {
      interest: "Животные",
      key: 19,
    },
  ]);

  const addInterest = (newInterest) => {
    return setInterests((list) => [newInterest, ...list]);
  };

  const onClik = (item) => {
    let listID = interests.map((value) => value.key);
    listID.includes(item.key)
      ? setInterests((List) => {
          return List.filter((interest) => interest.key != item.key);
        })
      : addInterest(item);
  };
  let listID = interests.map((i) => i.key);

  return (
    <View style={{ flex: 1 }}>
      {/* Шапка начало  */}
      <View style={gStyle.header}>
        <AntDesign
          name="arrowleft"
          size={30}
          style={{ paddingTop: 12, paddingLeft: 16 }}
          color="#00B324"
          onPress={() => navigation.navigate("StartPage")}
        />
        <Text style={gStyle.registration}>Регистрация</Text>
      </View>
      {/* Шапка конец */}

      {/* Этапы начало */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={[styles.namber, { backgroundColor: "#24C33D" }]}>
            <AntDesign name="check" size={30} color="#B9E9C2" />
          </Text>
          <Text style={[styles.text, { color: "#24C33D" }]}> Этап 1</Text>
        </View>
        <Text style={[styles.line, { color: "#24C33D" }]}>--------</Text>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={[
              styles.namber,
              {
                backgroundColor: "#24C33D",
                color: "#B9E9C2",
                borderColor: "#B9E9C2",
              },
            ]}
          >
            2
          </Text>
          <Text style={[styles.text, { color: "#24C33D" }]}> Этап 2</Text>
        </View>
        <Text style={[styles.line, { color: "#B9E9C2" }]}>--------</Text>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={styles.namber}
            onPress={() => navigation.navigate("InformationAbout3")}
          >
            {" "}
            3{" "}
          </Text>
          <Text style={styles.text}> Этап 3</Text>
        </View>
      </View>
      {/* Этапы конец */}
      <View style={{ marginTop: 0, alignSelf: "center" }}>
        <Text style={[styles.text, { color: "#646464", fontSize: 20 }]}>
          Интересы
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          height: 380,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <FlatList
            data={defInterests}
            numColumns={3}
            horizontal={false}
            columnWrapperStyle={{ justifyContent: "space-evenly" }}
            //style={{ alignContent: "center" }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-around",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        marginBottom: 10,
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          onClik(item);
                        }}
                      >
                        <View style={{ fles: 1 }}>
                          <Text
                            style={[
                              styles.buttonForFans,
                              {
                                color: listID.includes(item.key)
                                  ? "rgba(96, 155, 244, 0.75)"
                                  : "rgba(67, 171, 69, 0.75)",
                                borderColor: listID.includes(item.key)
                                  ? "rgba(96, 155, 244, 0.75)"
                                  : "rgba(67, 171, 69, 0.75)",
                              },
                            ]}
                          >
                            {item.interest}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1, paddingVertical: 25 }}>
        <Text
          style={[
            styles.recomendation,
            { marginTop: 10, textDecorationLine: "underline" },
          ]}
          onPress={() => {
            console.log("Шаг пропущен");
          }}
        >
          Пропустить этот шаг
        </Text>
        <ButtonForReg
          text={"Продолжить"}
          onPress={() => navigation.navigate("InformationAbout3")}
        />
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
    color: "#B9E9C2",
    fontFamily: "roboto-medium",
    fontSize: 20,
  },
  text: {
    color: "#B9E9C2",
    fontFamily: "RobotoFlex-Regular",
    fontSize: 15,
  },

  line: {
    height: 35,
    textAlignVertical: "center",
    color: "#24C33D",
  },
  itemText: {
    color: "#646464",
    fontFamily: "RobotoFlex-Regular",
    fontSize: 14,
    paddingLeft: 15,
  },
  buttonForFans: {
    fontFamily: "RobotoFlex-Regular",
    paddingLeft: 10,
    borderRadius: 80,
    borderWidth: 1,
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    paddingRight: 10,
    paddingBottom: 3,
    paddingTop: 3,
  },
  recomendation: {
    fontFamily: "RobotoFlex-Regular",
    fontSize: 14,
    color: "#A8A8A8",
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
  },
});
