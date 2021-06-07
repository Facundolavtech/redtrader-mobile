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
import LoginFormValidations from "../../utils/Validations/LoginForm";
import ErrorMsg from "../ErrorMsg";
import { AuthContextProps } from "../../types/AuthContext";

const Form = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [errorState, setErrorState] = useState<any>(null);

  const {
    signIn,
    signInLoading,
    authState: { loading },
  } = useContext<AuthContextProps>(AuthContext);

  const clearForm = () => {
    onChangePassword("");
  };

  const validateForm = () => {
    const errors = LoginFormValidations({ email, password });

    if (Object.keys(errors).length > 0) {
      setErrorState(errors);
      return;
    }
  };

  const handleSubmit = async () => {
    const errors = LoginFormValidations({ email, password });

    if (Object.keys(errors).length > 0) {
      setErrorState(errors);
      return;
    }

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
        onChange={validateForm}
        onChangeText={onChangeEmail}
        style={{ ...styles.form__input, fontFamily: "RubikLight" }}
        keyboardType="email-address"
      />
      {errorState && errorState.email && <ErrorMsg field={errorState.email} />}
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#333"
        onChangeText={onChangePassword}
        onChange={validateForm}
        value={password}
        style={{ ...styles.form__input, fontFamily: "RubikLight" }}
        secureTextEntry
      />
      {errorState && errorState.password && (
        <ErrorMsg field={errorState.password} />
      )}
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
