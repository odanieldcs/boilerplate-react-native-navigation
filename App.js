import React from "react";
import { MainNavigation } from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="auto" />
      <MainNavigation />
    </NavigationContainer>
  );
}
