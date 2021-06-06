import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Form from "../components/Login/Form";

const LoginScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Form />
      </View>
    </SafeAreaProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "RubikBold",
  },
});
