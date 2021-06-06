import "react-native-gesture-handler";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "../screens/LoginScreen";
import SignalsScreen from "../screens/SignalsScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  const { authState } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {authState.isLoggedIn ? (
        <>
          <Stack.Screen
            name="SignalsScreen"
            component={SignalsScreen}
            options={{ headerShown: false }}
          />
        </>
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
