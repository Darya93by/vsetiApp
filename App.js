import { StyleSheet, View } from "react-native";
import * as React from "react";
import StartPage from "./components/log_in/StartPage";
import * as Font from "expo-font";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import MainStack from "./components/stack-navigation";
import "react-native-gesture-handler";

export default function App() {
  const [font, setFont] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "RobotoFlex-Regular": require("./assets/fonts/RobotoFlex-Regular.ttf"),
          "Avenir-book": require("./assets/fonts/avenir_book.ttf"),
          "roboto-medium": require("./assets/fonts/roboto_medium.ttf"),
          "avenir-heavy": require("./assets/fonts/avenir_heavy.ttf"),
          "wo-sans-bold": require("./assets/fonts/wo_sans_bold.ttf"),
          "wo-sans-medium": require("./assets/fonts/wo_sans_medium.ttf"),
          "wo-sans-regular": require("./assets/fonts/wo_sans_regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFont(true);
      }
    }

    prepare();
  }, []);

  const appPage = useCallback(async () => {
    if (font) {
      await SplashScreen.hideAsync();
    }
  }, [font]);

  if (!font) {
    return null;
  }

  return (
    <View onLayout={appPage} style={styles.container}>
      <MainStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
