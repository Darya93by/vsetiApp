import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { gStyle } from "../../styles/gStyle";
import ButtonForReg from "./ButtonForReg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFriends } from "../../redux/store/accauntSlice";
import { addGroup } from "../../redux/store/accauntSlice";
import { Peoples } from "../const/Peoples";
import { Communities } from "../const/Communities";

export default function InformationAbout3({ route }) {
  const owner = useSelector((state) => state.accaunt);
  const dispatch = useDispatch();
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

  const [dataPeople, setDataPeople] = useState(Peoples.slice(0, 5));
  const [dataCommunitie, setDataCommunitie] = useState(Communities.slice(0, 5));

  //

  const navigation = useNavigation();

  const [peoples, setPeoples] = useState([]);
  const addPeople = (item) => {
    return setPeoples((list) => [{ ...item }, ...list]);
  };

  const [communities, setCommunities] = useState([]);
  const addCommunities = (item) => {
    return setCommunities((list) => [item, ...list]);
  };

  const myCumir = (item) => {
    let listID = peoples.map((value) => value.id);
    listID.includes(item.id)
      ? setPeoples((list) => {
          return list.filter((peoples) => peoples.id != item.id);
        })
      : addPeople(item);
  };
  const myGroups = (item) => {
    let listID = communities.map((communitie) => communitie.id);
    listID.includes(item.id)
      ? setCommunities((list) => {
          return list.filter((communitie) => communitie.id != item.id);
        })
      : addCommunities(item);
  };
  let listID = peoples.map((people) => people.id);
  let listCom = communities.map((value) => value.id);

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
              data={dataPeople}
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
                          <TouchableOpacity
                            onPress={() => {
                              myCumir(item);
                            }}
                          >
                            <View
                              style={{ fles: 1, width: 100, paddingLeft: 15 }}
                            >
                              <Text
                                style={[
                                  styles.buttonForFans,
                                  {
                                    color: listID.includes(item.id)
                                      ? "rgba(96, 155, 244, 0.75)"
                                      : "rgba(67, 171, 69, 0.75)",
                                    borderColor: listID.includes(item.id)
                                      ? "rgba(96, 155, 244, 0.75)"
                                      : "rgba(67, 171, 69, 0.75)",
                                  },
                                ]}
                              >
                                {listID.includes(item.id)
                                  ? "Вы подписаны"
                                  : "Подписаться"}
                              </Text>
                            </View>
                          </TouchableOpacity>
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
              data={dataCommunitie}
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
                          <TouchableOpacity
                            onPress={() => {
                              !item.check;
                              return myGroups(item);
                            }}
                          >
                            <View
                              style={{ fles: 1, width: 100, paddingLeft: 15 }}
                            >
                              <Text
                                style={[
                                  styles.buttonForFans,
                                  {
                                    color: listCom.includes(item.id)
                                      ? "rgba(96, 155, 244, 0.75)"
                                      : "rgba(67, 171, 69, 0.75)",
                                    borderColor: listCom.includes(item.id)
                                      ? "rgba(96, 155, 244, 0.75)"
                                      : "rgba(67, 171, 69, 0.75)",
                                  },
                                ]}
                              >
                                {listCom.includes(item.id)
                                  ? "Вы подписаны"
                                  : "Подписаться"}
                              </Text>
                            </View>
                          </TouchableOpacity>
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
          onPress={() => {
            dispatch(
              addFriends({
                friends: peoples,
              })
            );
            dispatch(
              addGroup({
                groups: communities,
              })
            );
            navigation.navigate("MyDrower", {
              screen: "MyPage",
            });
            console.log(owner);
          }}
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
    fontFamily: "RobotoFlex-Regular",
    paddingLeft: 5,
    borderRadius: 80,
    borderWidth: 1,
    fontSize: 11,
    textAlign: "center",
    marginTop: 5,
  },
});
