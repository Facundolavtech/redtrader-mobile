import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Signal from "../components/Signal";
import { AuthContext } from "../context/AuthContext";
import { RootStackParamList } from "../types/RootStackParamsList";
import NewSignalModal from "../components/NewSignalModal";
import deviceStorage from "../services/deviceStorage";
import { GetSignalsService } from "../services/Signals";
import { Ionicons } from "@expo/vector-icons";
import MainTheme from "../theme/main";
import Toast from "react-native-toast-message";
import useNotifications from "../hooks/useNotifications";

const SignalsScreen = () => {
  type AuthScreenProps = StackNavigationProp<
    RootStackParamList,
    "SignalsScreen"
  >;

  const navigation = useNavigation<AuthScreenProps>();
  const [tokenState, setTokenState] = useState<any>(null);
  const [signals, setSignals] = useState<any>(null);
  const [reloadTime, setReloadTime] = useState(0);
  const [loadingSignals, setLoadingSignals] = useState(true);

  useNotifications();

  const {
    auth,
    signOut,
    authState: { userInfo, isLoggedIn },
  }: any = useContext(AuthContext);

  const AuthUser = async () => {
    const token = await deviceStorage.getItem("authToken");
    setTokenState(token);
    auth(token);
  };

  useEffect(() => {
    AuthUser();
  }, []);

  useEffect(() => {
    getSignals();
  }, [tokenState]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate("LoginScreen");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (reloadTime > 0) {
      let reloadCountdown = setInterval(() => {
        setReloadTime(reloadTime - 1);
      }, 1000);
      return () => clearInterval(reloadCountdown);
    }
  }, [reloadTime]);

  const getSignals = async () => {
    if (tokenState && reloadTime === 0) {
      const response: any = await GetSignalsService(tokenState);

      if (response.status === 200) {
        setLoadingSignals(false);
        setSignals(response.data);
        setReloadTime(30);
      } else {
        signOut();
        Toast.show({
          type: "error",
          text1: "Ocurrio un error al cargar las señales",
        });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loadingSignals ? (
        <View style={styles.loading__container}>
          <ActivityIndicator
            animating={loadingSignals}
            size="large"
            color={MainTheme.primary}
          />
        </View>
      ) : (
        <ScrollView>
          <View
            style={{
              width: "100%",
              height: 100,
              position: "absolute",
              paddingLeft: "5%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.reload__btn}
              onPress={getSignals}
              disabled={reloadTime > 0}
            >
              <Ionicons
                name="reload-outline"
                size={40}
                color={reloadTime === 0 ? MainTheme.primary : "#747474"}
              />
            </TouchableOpacity>
            {reloadTime > 0 && (
              <Text style={styles.reloadTime}>{reloadTime}</Text>
            )}
          </View>
          <View
            style={{
              paddingTop: userInfo && userInfo.roles.educator ? 50 : 120,
            }}
          >
            {userInfo && userInfo.roles.educator && <NewSignalModal />}
            {signals && signals.length === 0 && (
              <View
                style={{
                  width: "100%",
                  marginTop: 30,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.no__signals}>
                  Parece que no hay señales por el momento. Activa las
                  notificaciones y te avisaremos cuando manden nuevas
                </Text>
              </View>
            )}
            {signals &&
              signals.length > 0 &&
              signals.map((signal: any) => (
                <Signal key={signal._id} signal={signal} />
              ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default SignalsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },

  loading__container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  no__signals: {
    textAlign: "center",
    fontFamily: "RubikBold",
    fontSize: 20,
    width: "90%",
    color: "#696969",
  },
  reload__btn: {
    height: 50,
    width: 50,
    position: "relative",
    top: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  reloadTime: {
    fontFamily: "RubikRegular",
    fontSize: 20,
    marginTop: 40,
    marginLeft: 5,
    color: "#747474",
  },
});
