import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Form from "../components/Login/Form";
import { AuthContext } from "../context/AuthContext";
import deviceStorage from "../services/deviceStorage";
import MainTheme from "../theme/main";

const LoginScreen = () => {
  const [loading, setLoading] = useState(true);
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    deviceStorage
      .getItem("authToken")
      .then((token: any) => {
        signIn(token);
        if (!token) {
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {!loading ? (
          <Form />
        ) : (
          <View style={styles.loading__container}>
            <ActivityIndicator
              animating={loading}
              size="large"
              color={MainTheme.primary}
            />
          </View>
        )}
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
  loading__container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
