import * as React from "react";
import StartPage from "./log_in/StartPage";
import InformationAbout from "./log_in/InformationAbout";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import InformationAbout2 from "./log_in/InformationAbout2";
import InformationAbout3 from "./log_in/InformationAbout3";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartPage"
          component={StartPage}
          options={{
            headerMode: "none",
            navigationOptions: {
              headerVisible: false,
            },
          }}
        />
        <Stack.Screen
          name="InformationAbout"
          component={InformationAbout}
          options={{
            headerMode: "none",
            navigationOptions: {
              headerVisible: false,
            },
          }}
        />
        <Stack.Screen
          name="InformationAbout2"
          component={InformationAbout2}
          options={{
            headerMode: "none",
            navigationOptions: {
              headerVisible: false,
            },
          }}
        />
        <Stack.Screen
          name="InformationAbout3"
          component={InformationAbout3}
          options={{
            headerMode: "none",
            navigationOptions: {
              headerVisible: false,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
