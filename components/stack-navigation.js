import * as React from "react";
import StartPage from "./log_in/StartPage";
import InformationAbout from "./log_in/InformationAbout";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import InformationAbout2 from "./log_in/InformationAbout2";
import InformationAbout3 from "./log_in/InformationAbout3";
import MyPage from "./main_page/MyPage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Prov from "./Prov";
import MyFriends from "./profile/myFriends";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrower() {
  return (
    <Drawer.Navigator
      initialRouteName="MyDrower"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#c6cbef",
          width: 220,
        },
      }}
    >
      <Drawer.Screen
        name="MyPage"
        component={MyPage}
        options={{
          drawerLabel: "Мой профиль",
          headerShown: false,
          navigationOptions: {
            headerVisible: false,
          },
          cardStyle: {
            backgroundColor: "#FFFFFF",
          },
        }}
      />
      <Drawer.Screen
        name="Prov"
        component={Prov}
        options={{
          headerShown: false,
          navigationOptions: {
            headerVisible: false,
          },
          cardStyle: {
            backgroundColor: "#FFFFFF",
          },
        }}
      />
    </Drawer.Navigator>
  );
}

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
            cardStyle: {
              backgroundColor: "#FFFFFF",
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
            cardStyle: {
              backgroundColor: "#FFFFFF",
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
            cardStyle: {
              backgroundColor: "#FFFFFF",
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
            cardStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        />
        <Stack.Screen
          name="MyDrower"
          component={MyDrower}
          options={{
            headerMode: "none",
            navigationOptions: {
              headerVisible: false,
            },
            cardStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        />
        <Stack.Screen
          name="Prov"
          component={Prov}
          options={{
            headerMode: "none",
            navigationOptions: {
              headerVisible: false,
            },
            cardStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        />
        <Stack.Screen
          name="MyFriends"
          component={MyFriends}
          options={{
            headerMode: "none",
            navigationOptions: {
              headerVisible: false,
            },
            cardStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
