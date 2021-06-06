import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Signal from "../components/Signal";
import { AuthContext } from "../context/AuthContext";
import { RootStackParamList } from "../types/RootStackParamsList";
import NewSignalModal from "../components/NewSignalModal";
import deviceStorage from "../services/deviceStorage";

const SignalsScreen = () => {
  type AuthScreenProps = StackNavigationProp<
    RootStackParamList,
    "SignalsScreen"
  >;

  const navigation = useNavigation<AuthScreenProps>();

  const {
    auth,
    authState: { userInfo, isLoggedIn },
  }: any = useContext(AuthContext);

  const AuthUser = async () => {
    const token = await deviceStorage.getItem("authToken");
    auth(token);
  };

  useEffect(() => {
    AuthUser();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate("LoginScreen");
    }
  }, [isLoggedIn]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ paddingTop: 50 }}>
          {userInfo && userInfo.roles.educator && <NewSignalModal />}
          <Signal />
          <Signal sell />
          <Signal sell />
          <Signal />
          <Signal sell />
          <Signal />
          <Signal sell />
          <Signal />
          <Signal sell />
          <Signal />
          <Signal sell />
          <Signal />
          <Signal sell />
          <Signal />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignalsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
});
