import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";
import { RootStackParamList } from "../types/RootStackParamsList";

const SignalsScreen = () => {
  type AuthScreenProps = StackNavigationProp<RootStackParamList, "Login">;

  const navigation = useNavigation<AuthScreenProps>();

  const { authState } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          Señales Screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignalsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
