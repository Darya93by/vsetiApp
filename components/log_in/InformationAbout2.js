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

  const deleteInterest = (item, itemKey) => {
    setInterests((List) => {
      return [item, ...List];
    });

    setDefInterests((List) => {
      return List.filter((interest) => interest.key != itemKey);
    });
  };

  const deleteDefInterests = (item, itemKey) => {
    setDefInterests((List) => {
      return [item, ...List];
    });

    setInterests((List) => {
      return List.filter((interest) => interest.key != itemKey);
    });
  };

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {/* Шапка начало  */}
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            backgroundColor: "#CCF0D3",
            height: 55,
            textAlignVertical: "center",
            borderRadius: 10,
          }}
        >
          <AntDesign
            name="arrowleft"
            size={30}
            style={{ paddingTop: 15, paddingLeft: 16 }}
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
            marginTop: 10,
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ backgroundColor: "#B9E9C2", borderRadius: 100 }}>
              <Octicons name="check-circle" size={38} color="#24C33D" />
            </Text>
            <Text style={[styles.text, { color: "#24C33D" }]}> Этап 1</Text>
          </View>
          <Text
            style={{
              height: 35,
              textAlignVertical: "center",
              color: "#24C33D",
            }}
          >
            --------
          </Text>
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
              {" "}
              2{" "}
            </Text>
            <Text style={[styles.text, { color: "#24C33D" }]}> Этап 2</Text>
          </View>
          <Text
            style={{
              height: 35,
              textAlignVertical: "center",
              color: "#B9E9C2",
            }}
          >
            --------
          </Text>
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
        <View
          style={{
            marginTop: 5,
            alignSelf: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={[
                styles.text,
                {
                  color: "#00B324",
                  fontSize: 20,
                  fontFamily: "wo-sans-medium",
                },
              ]}
            >
              Интересы
            </Text>
          </View>

          {/* Интересы начало  */}
          <View style={{ marginTop: 0 }}>
            {/*  Выбранные интересы: начало*/}
            <View style={{ height: 150, width: 360 }}>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#00B324",
                    fontSize: 19,
                    paddingBottom: 5,
                    paddingTop: 10,
                    paddingLeft: 10,
                    fontFamily: "wo-sans-medium",
                  },
                ]}
              >
                Меня интересует:
              </Text>
              <FlatList
                data={interests}
                horizontal={false}
                numColumns={2}
                style={{
                  borderWidth: 1,
                  borderColor: "#B9E9C2",
                  borderRadius: 10,
                  paddingLeft: 10,
                  marginBottom: 5,
                }}
                ListEmptyComponent={
                  <Text style={[styles.text, { fontSize: 18 }]}>
                    Поделитесь с сообществом своими предпочтениями.
                  </Text>
                }
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity>
                      <View
                        style={{
                          paddingLeft: 15,
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            { color: "#00B324", height: 28 },
                          ]}
                          key={item.key}
                        >
                          {item.interest}
                          {"  "}
                          <AntDesign
                            name="closecircleo"
                            size={15}
                            color="#00B324"
                            onPress={() => {
                              deleteDefInterests(item, item.key);
                            }}
                          />
                          {"   "}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            {/*  Выбранные интересы: конец*/}

            {/*  Список доступных категорий:начало*/}
            <View style={{ height: 290, width: 360 }}>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#00B324",
                    fontSize: 19,
                    fontFamily: "wo-sans-medium",
                    paddingTop: 10,
                    paddingLeft: 10,
                  },
                ]}
              >
                Доступные категории
              </Text>
              <Text style={[styles.text, { paddingBottom: 10 }]}>
                (нажмите, что-бы выбрать)
              </Text>
              <FlatList
                data={defInterests}
                style={{
                  borderWidth: 1,
                  borderColor: "#B9E9C2",
                  borderRadius: 10,
                  paddingLeft: 10,
                  marginBottom: 5,
                }}
                ListEmptyComponent={
                  <Text style={[styles.text, { fontSize: 18 }]}>
                    Вы выбрали все категории
                  </Text>
                }
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            { color: "#00B324", height: 28, fontSize: 17 },
                          ]}
                          key={item.key}
                          onPress={() => {
                            deleteInterest(item, item.key);
                          }}
                        >
                          {item.interest}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            {/* Продолжить  */}
            <View style={{ marginTop: 10 }}>
              <Text style={[styles.text, { color: "#00B324" }]}>
                {" "}
                Вы можете{" "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    navigation.navigate("InformationAbout3");
                  }}
                >
                  пропустить
                </Text>{" "}
                этот этап.
              </Text>
              <ButtonForReg
                text="Готово"
                onPress={() => {
                  console.log(interests);
                  if (interests.length > 0) {
                    navigation.navigate("InformationAbout3");
                  } else {
                    Alert.alert(
                      'Если вы хотите указать интересы позже нажмите "Пропустить" '
                    );
                  }
                }}
              />
            </View>
            {/* Конец "Продолжить" */}
            {/*  Список доступных категорий: конец*/}
          </View>
          {/* Интересы конец */}
        </View>
      </View>
    </ScrollView>
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
});
