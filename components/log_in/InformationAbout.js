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
  ImageBackground,
  StatusBar,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import { Formik } from "formik";
import ButtonForReg from "./ButtonForReg";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { gStyle } from "../../styles/gStyle";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function InformationAbout() {
  const navigation = useNavigation();

  const [opasityPlus, setOpsity] = useState("rgba(163, 163, 163, 0.57)");

  // Получить фото  с галереи

  const [selectedImage, setSelectedImage] = useState(null);
  let userImage;
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    userImage = { uri: selectedImage.localUri };
  } else userImage = require("../../assets/man.png");

  const [aboutMe, setAboutMe] = useState({});
  const addMyInfo = (myName, myLastName, myAvatar, myBirthday, myCity) => {
    setAboutMe({
      key: Math.random().toString(36),
      name: myName,
      lastname: myLastName,
      avatar: myAvatar,
      birthday: myBirthday,
      city: myCity,
    });
  };

  // конец функций для фото с галереи

  // Для выбора даты
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const [defDate, setDefDate] = useState("Дата рождения");

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    let dateBirth =
      date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
    setDefDate(dateBirth);

    hideDatePicker();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}
    >
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
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
                <Text
                  style={[
                    styles.namber,
                    { backgroundColor: "#24C33D", color: "#B9E9C2" },
                  ]}
                >
                  1
                </Text>
                <Text style={[styles.text, { color: "#24C33D" }]}> Этап 1</Text>
              </View>
              <Text style={styles.line}>--------</Text>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text
                  style={styles.namber}
                  onPress={() => {
                    navigation.navigate("InformationAbout2");
                  }}
                >
                  {" "}
                  2{" "}
                </Text>
                <Text style={styles.text}> Этап 2</Text>
              </View>
              <Text style={styles.line}>--------</Text>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={styles.namber}> 3 </Text>
                <Text style={styles.text}> Этап 3</Text>
              </View>
            </View>
            {/* Этапы конец */}

            <View
              style={{ marginTop: 5, alignSelf: "center", marginBottom: 20 }}
            >
              <Text style={[styles.text, { color: "#646464", fontSize: 20 }]}>
                Информация
              </Text>
            </View>

            {/* Форма заполнения этапа 1 */}
            <Formik
              initialValues={{
                name: "",
                lastname: "",
                birthday: "",
                city: "",
              }}
              onSubmit={(values, action) => {
                Alert.alert(
                  values.name +
                    " " +
                    values.lastname +
                    " " +
                    "рождён(на)" +
                    values.birthday +
                    "," +
                    " " +
                    values.city
                );
                addMyInfo(
                  values.name,
                  values.lastname,
                  userImage,
                  defDate,
                  values.city
                );
                console.log(aboutMe);
                navigation.navigate("InformationAbout2", {
                  aboutMe: aboutMe,
                });
              }}
            >
              {(props) => (
                <View>
                  <View
                    style={{
                      height: 200,
                      width: 200,
                      alignSelf: "center",
                      textAlignVertical: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <ImageBackground
                      source={userImage}
                      style={{
                        width: 200,
                        height: 200,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      imageStyle={{ borderRadius: 10 }}
                    >
                      <Text
                        style={{
                          fontSize: 50,
                          color: "white",
                          textAlign: "center",
                          backgroundColor: opasityPlus,
                          borderRadius: 100,
                          height: 70,
                          width: 70,
                          justifyContent: "center",
                          paddingBottom: 8,
                          borderColor: "white",
                          borderWidth: 1,
                        }}
                        onPress={() => openImagePickerAsync()}
                        onPressIn={() => setOpsity("rgba(163, 163, 163, 0.8)")}
                        onPressOut={() =>
                          setOpsity("rgba(163, 163, 163, 0.57)")
                        }
                      >
                        +
                      </Text>
                    </ImageBackground>
                  </View>
                  <View>
                    <TextInput
                      placeholder="Имя"
                      maxLength={30}
                      value={props.values.name}
                      style={styles.input}
                      onChangeText={props.handleChange("name")}
                    />

                    <TextInput
                      placeholder="Фамилия"
                      maxLength={30}
                      style={styles.input}
                      value={props.values.lastname}
                      onChangeText={props.handleChange("lastname")}
                    />
                    <View style={{ textAlign: "center" }}>
                      <Text
                        style={[
                          styles.input,
                          {
                            textAlignVertical: "center",
                            color:
                              defDate == "Дата рождения"
                                ? "#A8A8A8"
                                : "#3C3C3C",
                          },
                        ]}
                        onPress={showDatePicker}
                      >
                        {defDate}
                      </Text>
                    </View>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      maximumDate={new Date(2015, 0, 1)}
                      minimumDate={new Date(1940, 0, 1)}
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />
                    <TextInput
                      placeholder="Город"
                      maxLength={30}
                      style={styles.input}
                      value={props.values.city}
                      onChangeText={props.handleChange("city")}
                    />
                  </View>
                  <View>
                    <ButtonForReg
                      text="Продолжить"
                      onPress={() => {
                        props.handleSubmit();
                      }}
                    />
                  </View>
                </View>
              )}
            </Formik>
            {/* Конец формы заполнения этапа 1 */}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
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
  input: {
    alignSelf: "center",
    width: 265,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CACACA",
    marginBottom: "3%",
    color: "#3C3C3C",
    backgroundColor: "#F2F2F2",
    borderStyle: "solid",
    paddingLeft: 14,
    paddingRight: 14,
  },
  line: {
    height: 35,
    textAlignVertical: "center",
    color: "#B9E9C2",
  },
});
