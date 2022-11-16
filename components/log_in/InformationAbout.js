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
} from "react-native";
import React from "react";
import { Formik } from "formik";
import ButtonForReg from "./ButtonForReg";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { gStyle } from "../../styles/gStyle";

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

  // конец функций для фото с галереи

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <View style={{ paddingBottom: 0 }}>
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
                    <TextInput
                      placeholder="Дата рождения"
                      maxLength={30}
                      style={styles.input}
                      value={props.values.birthday}
                      onChangeText={props.handleChange("birthday")}
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
                        navigation.navigate("InformationAbout2");
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
