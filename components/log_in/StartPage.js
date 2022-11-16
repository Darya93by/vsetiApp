import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import FlatButton from "./FlatButton";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

export default function StartPage({ navigation }) {
  const logo = require("../../assets/icon_11.png");

  const [isChecked, setChecked] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        behavior="padding"
        enabled={false}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View
            style={{
              paddingTop: 60,
              paddingBottom: 10,
              paddingLeft: 15,
            }}
          >
            <View style={styles.logo}>
              <View>
                <Image
                  source={logo}
                  style={{
                    height: 60,
                    width: 60,
                    left: 31,
                    borderRadius: 100,
                    marginBottom: 10,
                  }}
                />
              </View>
              <View>
                <Text style={styles.text}>Вход Всети</Text>
              </View>
            </View>
          </View>
          <View style={styles.form}>
            <Formik
              initialValues={{
                telephone: "",
                password: "",
              }}
              onSubmit={(values, action) => {
                Alert.alert(values.telephone + " " + values.password);
              }}
            >
              {(props) => (
                <View>
                  <TextInput
                    placeholder="Телефон или почта"
                    maxLength={12}
                    value={props.values.name}
                    style={styles.input}
                    onChangeText={props.handleChange("telephone")}
                  />

                  <TextInput
                    placeholder="Пароль"
                    secureTextEntry={true}
                    maxLength={13}
                    style={styles.input}
                    value={props.values.password}
                    onChangeText={props.handleChange("password")}
                  />

                  <View style={styles.section}>
                    <Checkbox
                      style={styles.checkbox}
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? "#24C33D" : undefined}
                    />
                    <Text style={styles.paragraph}> Запомнить меня</Text>
                  </View>
                  <FlatButton
                    text="Войти"
                    onPress={() => {
                      props.handleSubmit();
                    }}
                  />
                </View>
              )}
            </Formik>
            <View>
              <Text
                style={[
                  styles.paragraph,
                  { alignSelf: "center", marginTop: 30 },
                ]}
              >
                Войти через социальные сети
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  width: 232.5,
                }}
              >
                <Image
                  style={styles.image}
                  source={require("../../assets/discord-logo.png")}
                />
                <Image
                  style={styles.image}
                  source={require("../../assets/VK_logo.png")}
                />
                <Image
                  style={styles.image}
                  source={require("../../assets/Facebook-Logo.png")}
                />
                <Image
                  style={styles.image}
                  source={require("../../assets/mailru.png")}
                />
              </View>
              <View>
                <Text
                  style={[
                    styles.paragraph,
                    { alignSelf: "center", marginTop: 30, marginBottom: 25 },
                  ]}
                >
                  или
                </Text>
              </View>
              <FlatButton
                text="Регистрация"
                onPress={() => {
                  navigation.navigate("InformationAbout");
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
    gap: 25,
    top: 0,
  },
  logo: {
    width: 130,
    height: 100,
    alignContent: "center",
  },
  text: {
    fontFamily: "wo-sans-bold",
    fontSize: 22,
    lineHeight: 30,
    color: "#3C3C3C",
    flexGrow: 0,
  },
  form: { paddingTop: 10 },
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
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderColor: "#CACACA",
    borderRadius: 5,
  },
  paragraph: {
    fontSize: 14,
    fontFamily: "roboto-medium",
    color: "#A8A8A8",
    lineHeight: 16.41,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginLeft: 15,
    marginTop: 15,
  },
});
