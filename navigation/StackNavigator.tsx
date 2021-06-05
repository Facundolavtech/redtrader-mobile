import React, { useContext, useState } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignalsScreen from "../screens/SignalsScreen";
import { AuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();

function StackNavigator() {
  const { authState } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {authState.isLoggedIn ? (
        <Stack.Screen
          name="SignalsScreen"
          component={SignalsScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

export default StackNavigator;
