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
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { gStyle } from "../../styles/gStyle";
import ButtonForReg from "./ButtonForReg";

export default function InformationAbout3() {
  // Сервер:
  //
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function prepare() {
  //     const response = await fetch("https://  ")
  //       .then((res) => res.json())
  //       .then((res) => res.data);
  //     setData(response);
  //   }
  //   prepare();
  // });
  //
  // Допустим, data будет записана следующим образом:

  const [data, setData] = useState([
    [
      {
        name: "Alex",
        lastname: "Jonson",
        id: 1,
        avatar: require("../../assets/yongMan.jpg"),
        fans: 100467,
        stateOfSubscription: addCumirStyle,
      },
      {
        name: "July",
        lastname: "Albrus",
        id: 2,
        avatar: require("../../assets/gerl1.jpeg"),
        fans: 86790,
        stateOfSubscription: addCumirStyle,
      },
      {
        name: "Kate",
        lastname: "Pirson",
        id: 3,
        avatar: require("../../assets/gerl2.jpg"),
        fans: 55388,
        stateOfSubscription: addCumirStyle,
      },
      {
        name: "Elizabet",
        lastname: "Ford",
        id: 4,
        avatar: require("../../assets/gerl3.jpeg"),
        fans: 38903,
        stateOfSubscription: addCumirStyle,
      },
      {
        name: "Penny",
        lastname: "Scott",
        id: 5,
        avatar: require("../../assets/gerl4.jpeg"),
        fans: 31400,
        stateOfSubscription: addCumirStyle,
      },
    ],
    [
      {
        communitie: "Vseti for android",
        category: "Technologies",
        id: 1,
        icon: require("../../assets/icon_11.png"),
        stateOfSubscription: addCumirStyle,
      },
      {
        communitie: "Rock",
        category: "Music",
        id: 2,
        icon: require("../../assets/rock.jpeg"),
        stateOfSubscription: addCumirStyle,
      },
      {
        communitie: "Photography",
        category: "Photo",
        id: 3,
        icon: require("../../assets/photo.jpg"),
        stateOfSubscription: addCumirStyle,
      },
      {
        communitie: "Dogs",
        category: "Animal",
        id: 4,
        icon: require("../../assets/dog.jpg"),
        stateOfSubscription: addCumirStyle,
      },
      {
        communitie: "Horror",
        category: "Films",
        id: 5,
        icon: require("../../assets/horror.jpeg"),
        stateOfSubscription: addCumirStyle,
      },
    ],
  ]);

  //

  const addCumirStyle = {
    text: "Подписаться",
    colors: StyleSheet.create({
      add: {
        color: "rgba(67, 171, 69, 0.75)",
        fontFamily: "RobotoFlex-Regular",
        paddingLeft: 5,
        borderRadius: 80,
        borderColor: "rgba(67, 171, 69, 0.75)",
        borderWidth: 1,
        fontSize: 11,
        textAlign: "center",
      },
    }),
  };
  const deleteCumirStyle = {
    text: "Вы подписаны",
    colors: StyleSheet.create({
      delete: {
        color: "rgba(96, 155, 244, 0.75)",
        fontFamily: "RobotoFlex-Regular",
        paddingLeft: 5,
        borderRadius: 80,
        borderColor: "rgba(96, 155, 244, 0.75)",
        borderWidth: 1,
        fontSize: 11,
        textAlign: "center",
      },
    }),
  };

  const navigation = useNavigation();

  const [peoples, setPeoples] = useState([]);
  const addPeople = (item) => {
    return setPeoples((list) => [item, ...list]);
  };

  const [communities, setCommunities] = useState([]);
  const addCommunities = (item) => {
    return setCommunities((list) => [item, ...list]);
  };

  const myCumir = (item, value) => {
    if (peoples.includes(item.id)) {
      item.stateOfSubscription = addCumirStyle;
      return setPeoples((list) => {
        return list.filter((value) => value.id != item.id);
      });
    } else {
      item.stateOfSubscription = deleteCumirStyle;
      addPeople(item);
    }
  };

  return (
    <View>
      {/* Шапка начало */}
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
          marginTop: 15,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={[styles.namber, { backgroundColor: "#24C33D" }]}>
            <AntDesign name="check" size={30} color="#B9E9C2" />
          </Text>
          <Text style={[styles.text, { color: "#24C33D" }]}> Этап 1</Text>
        </View>
        <Text style={styles.line}>--------</Text>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={[styles.namber, { backgroundColor: "#24C33D" }]}>
            <AntDesign name="check" size={30} color="#B9E9C2" />
          </Text>
          <Text style={[styles.text, { color: "#24C33D" }]}> Этап 2</Text>
        </View>
        <Text style={styles.line}>--------</Text>
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
      <View style={{ marginTop: 0, alignSelf: "center" }}>
        <Text style={[styles.text, { color: "#646464", fontSize: 20 }]}>
          Подписки
        </Text>
      </View>
      <View>
        <Text style={styles.recomendation}>
          Подпишитесь на людей или сообщества в соответствии с вашими интересами
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          height: 380,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={[styles.recomendation, { fontSize: 16, marginBottom: 15 }]}
            >
              Люди
            </Text>
            <FlatList
              data={data[0]}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <View style={{ flex: 1, paddingLeft: 5 }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          marginBottom: 15,
                        }}
                      >
                        <View style={{ flex: 1 }}>
                          <Image source={item.avatar} style={styles.image} />
                        </View>
                        <View style={{ flex: 2.5, flexDirection: "column" }}>
                          <View style={{ flex: 1 }}>
                            <Text style={styles.itemText}>
                              {item.name} {item.lastname}
                            </Text>
                          </View>
                          <View style={{ flex: 1 }}>
                            <Text
                              style={[
                                styles.recomendation,
                                { fontSize: 10, textAlign: "left" },
                              ]}
                            >
                              {item.fans} подписчиков
                            </Text>
                          </View>
                          <View
                            style={{ fles: 1, width: 100, paddingLeft: 15 }}
                          >
                            <Text
                              style={styles.buttonForFans}
                              onPress={() => {}}
                            >
                              Подписаться
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={[styles.recomendation, { fontSize: 16, marginBottom: 15 }]}
            >
              Сообщества
            </Text>
            <FlatList
              data={data[1]}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <View style={{ flex: 1, paddingLeft: 5 }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          marginBottom: 15,
                        }}
                      >
                        <View style={{ flex: 1 }}>
                          <Image source={item.icon} style={styles.image} />
                        </View>
                        <View style={{ flex: 2.5, flexDirection: "column" }}>
                          <View style={{ flex: 1 }}>
                            <Text style={styles.itemText}>
                              {item.communitie}
                            </Text>
                          </View>
                          <View style={{ flex: 1 }}>
                            <Text
                              style={[
                                styles.recomendation,
                                { fontSize: 10, textAlign: "left" },
                              ]}
                            >
                              {item.category}
                            </Text>
                          </View>
                          <View
                            style={{ fles: 1, width: 100, paddingLeft: 15 }}
                          >
                            <Text style={styles.buttonForFans}>
                              Подписаться
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
      <View>
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
          onPress={() => console.log("finish")}
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
    color: "#CACACA",
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
  recomendation: {
    fontFamily: "RobotoFlex-Regular",
    fontSize: 14,
    color: "#A8A8A8",
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
  },
  image: {
    width: 50,
    height: 50,
    alignContent: "center",
    borderRadius: 100,
    alignSelf: "center",
  },

  itemText: {
    color: "#646464",
    fontFamily: "RobotoFlex-Regular",
    fontSize: 14,
    paddingLeft: 15,
  },
  buttonForFans: {
    color: "rgba(67, 171, 69, 0.75)",
    fontFamily: "RobotoFlex-Regular",
    paddingLeft: 5,
    borderRadius: 80,
    borderColor: "rgba(67, 171, 69, 0.75)",
    borderWidth: 1,
    fontSize: 11,
    textAlign: "center",
  },
});
