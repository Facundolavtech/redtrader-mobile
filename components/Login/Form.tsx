import React, { useContext, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import styles from "../../styles/LoginForm";

const Form = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const { authState, signIn } = useContext(AuthContext);

  return (
    <View style={styles.login__card}>
      <Image
        style={styles.logo}
        source={{ uri: "https://redtraderacademy.com/assets/img/logo.png" }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={onChangeEmail}
        style={{ ...styles.form__input, fontFamily: "RubikLight" }}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={onChangePassword}
        value={password}
        style={{ ...styles.form__input, fontFamily: "RubikRegular" }}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={signIn}
        style={{ ...styles.btn__submit }}
        activeOpacity={0.7}
      >
        <Text
          style={{ ...styles.btn__submit__text, fontFamily: "RubikMedium" }}
        >
          Ingresar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
