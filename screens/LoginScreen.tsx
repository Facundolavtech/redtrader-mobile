import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Form from "../components/Login/Form";
import { RootStackParamList } from "../types/RootStackParamsList";

const LoginScreen = () => {
  type AuthScreenProps = StackNavigationProp<RootStackParamList, "Login">;

  const navigation = useNavigation<AuthScreenProps>();

  console.log(navigation);

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
