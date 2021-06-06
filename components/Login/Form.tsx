import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { LoginService } from "../../services/Auth";
import styles from "../../styles/LoginForm";
import Toast from "react-native-toast-message";

const Form = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const {
    signIn,
    signInLoading,
    authState: { loading },
  } = useContext(AuthContext);

  const clearForm = () => {
    onChangePassword("");
  };

  const handleSubmit = async () => {
    signInLoading();

    const response: any = await LoginService(email, password);

    if (response.status === 200) {
      signIn(response.token);
    } else {
      clearForm();
      signIn(null);
      Toast.show({ type: "error", text1: response.msg });
    }
  };

  return (
    <View style={styles.login__card}>
      <Image
        style={styles.logo}
        source={{ uri: "https://redtraderacademy.com/assets/img/logo.png" }}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#333"
        value={email}
        onChangeText={onChangeEmail}
        style={{ ...styles.form__input, fontFamily: "RubikLight" }}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#333"
        onChangeText={onChangePassword}
        value={password}
        style={{ ...styles.form__input, fontFamily: "RubikLight" }}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={{ ...styles.btn__submit }}
        activeOpacity={0.7}
      >
        {loading ? (
          <View>
            <ActivityIndicator
              animating={loading}
              size="large"
              color="#ffffff"
            />
          </View>
        ) : (
          <Text
            style={{ ...styles.btn__submit__text, fontFamily: "RubikMedium" }}
          >
            Ingresar
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Form;
