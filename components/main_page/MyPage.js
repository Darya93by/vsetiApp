import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { gStyle } from "../../styles/gStyle";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Communities } from "../const/Communities";

export default function MyPage({ route }) {
  const navigation = useNavigation();

  const owner = useSelector((state) => state.accaunt);

  const [dropAbout, setDropAbout] = useState(false);
  const [stat, setStat] = useState(false);

  // переменная для статуса
  let status;
  if (stat == false) {
    status = "offline";
  } else {
    status = "online";
  }

  // переменная для дроп-меню
  let nameDrop;
  if (dropAbout == false) {
    nameDrop = "caretleft";
  } else {
    nameDrop = "caretright";
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("../../assets/bk.jpg")}>
        <View style={styles.header}>
          <FontAwesome
            name="home"
            size={24}
            color="white"
            style={{ paddingTop: 5, paddingLeft: 16 }}
            onPress={() => {
              {
                console.log(owner);

                navigation.navigate("MyPage");
              }
            }}
          />

          <Text style={[styles.name, { paddingRight: 80 }]}>Всети</Text>

          <Ionicons
            name="settings-sharp"
            size={24}
            color="white"
            style={{ paddingTop: 5, paddingRight: 8 }}
          />
        </View>
      </ImageBackground>

      <View style={[styles.avaAndAboutCont]}>
        {/* аваторка */}
        {!dropAbout ? (
          <View
            style={{
              flex: 13,
              height: 310,
              justifyContent: "center",
              height: 310,
            }}
          >
            <ImageBackground source={owner.avatar} style={styles.ava}>
              <View
                style={[
                  styles.header,
                  {
                    height: 35,
                    backgroundColor: "rgba(96, 96, 96, 0.55)",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.name,
                    {
                      paddingLeft: 15,
                      fontFamily: "Avenir-book",
                      fontSize: 18,
                    },
                  ]}
                >
                  {owner.name} {owner.lastname}
                </Text>
                <Text
                  style={[
                    styles.name,
                    {
                      paddingRight: 25,
                      fontSize: 15,
                      color: stat ? "#33FF33" : "#FFB266",
                      fontFamily: "Avenir-book",
                    },
                  ]}
                >
                  ({status})
                </Text>
              </View>
            </ImageBackground>
          </View>
        ) : (
          dropAbout == true
        )}
        {/* конец аваторки */}

        <View style={styles.drop}>
          <TouchableOpacity
            style={{ height: 310 }}
            onPress={() => {
              setDropAbout(!dropAbout);
            }}
          >
            <AntDesign name={nameDrop} size={20} color="white" />
          </TouchableOpacity>
        </View>

        {dropAbout ? (
          <View style={styles.aboutCount}>
            <ImageBackground
              source={owner.avatar}
              style={styles.backImg}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={styles.infoCont}>
                <Text style={[styles.text]}>
                  {" "}
                  День рождения: {owner.birthday}
                </Text>
                <Text style={[styles.text]}> Город: {owner.city}</Text>
                <Text style={[styles.text]}> Семья: </Text>
                <Text style={[styles.text]}> Дети: </Text>
                <Text style={[styles.text]}> Образование: </Text>
                <Text style={[styles.text]}> Сфера деятельности: </Text>
                <Text style={[styles.text]}> Ищу новые знакомства: </Text>
              </View>
            </ImageBackground>
          </View>
        ) : (
          dropAbout == false
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 3,
          // backgroundColor: "#D4EEED",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              console.log(owner.groups);
            }}
          >
            <View style={styles.pageMenu}>
              <Text>Сообщества</Text>
              <Text>({owner.groups.length})</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyFriends");
            }}
          >
            <View style={styles.pageMenu}>
              <Text>Подписки</Text>
              <Text>({owner.friends.length})</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.pageMenu}>
            <Text>Мой блог</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={styles.pageMenu}>
            <Text>Фото</Text>
          </View>
          <View style={styles.pageMenu}>
            <Text>Аудио</Text>
          </View>
          <View style={styles.pageMenu}>
            <Text>Видео</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={styles.pageMenu}>
            <Text>Блог</Text>
          </View>
          <View style={styles.pageMenu}>
            <Text>Новости</Text>
          </View>
          <View style={styles.pageMenu}>
            <Text>Подписчики</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFF",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "rgba(96, 96, 96, 0.8)",
    height: 35,
    textAlignVertical: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 23,
    textAlignVertical: "center",
    color: "white",
    fontFamily: "avenir-heavy",
  },
  text: {
    color: "white",
    fontFamily: "RobotoFlex-Regular",
    fontSize: 15,
    flex: 1,
    textAlignVertical: "center",
  },
  backImg: {
    width: 360,
    height: 310,
    alignItems: "center",
    justifyContent: "center",
  },
  aboutCount: {
    flex: 13,
    backgroundColor: "rgba(163, 163, 163, 0.9)",
    height: 310,
    width: 360,
    alignItems: "center",
  },
  drop: {
    flex: 1,
    paddingTop: 145,
    height: 310,
    backgroundColor: "#A0A0A0",
    borderWidth: 1.5,
    borderColor: "#808080",
    alignItems: "center",
  },
  ava: {
    height: 310,
    width: 365,
    alignSelf: "center",
  },
  avaAndAboutCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoCont: {
    backgroundColor: "rgba(163, 163, 163, 0.9)",
    height: 310,
    width: 360,
  },
  pageMenu: {
    height: 60,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginBottom: 3,
    marginTop: 3,
    borderRadius: 10,
  },
});
