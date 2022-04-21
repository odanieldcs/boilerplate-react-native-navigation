import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeScreen,
  ProfileScreen,
  AboutScreen,
  SignInScreen,
  SignUpScreen,
  ForgotScreen,
  WelcomeScreen,
  TabAScreen,
  TabBScreen,
  TabCScreen,
} from "../screens/index";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      options={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CarSearch"
        component={DrawerNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CarInfo"
        component={TabNavigationCar}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      {/* <Drawer.Screen name="CarSearch" component={CarSearchStack} /> */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

function TabNavigationCar() {
  return (
    <Tab.Navigator
      initialRouteName="TabA"
      options={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="TabA" component={TabAScreen} />
      <Tab.Screen name="TabB" component={TabBScreen} />
      <Tab.Screen name="TabC" component={TabCScreen} />
    </Tab.Navigator>
  );
}
