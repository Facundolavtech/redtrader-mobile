import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  const [loaded] = useFonts({
    RubikMedium: require("./assets/Fonts/Rubik-Medium.ttf"),
    RubikRegular: require("./assets/Fonts/Rubik-Regular.ttf"),
    RubikBold: require("./assets/Fonts/Rubik-Bold.ttf"),
    RubikLight: require("./assets/Fonts/Rubik-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
