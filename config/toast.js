import React from "react";
import { BaseToast } from "react-native-toast-message";
import MainTheme from "../theme/main";

const toastConfig = {
  success: ({ text1, ...rest }) => (
    <BaseToast
      {...rest}
      style={{
        borderLeftColor: "#4fd312",
        width: "90%",
        marginTop: 30,
        borderRadius: 0,
      }}
      text1NumberOfLines={0}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 14,
        fontFamily: "RubikRegular",
        fontWeight: "400",
      }}
      text1={text1}
    />
  ),
  error: ({ text1, ...rest }) => (
    <BaseToast
      {...rest}
      style={{
        borderLeftColor: MainTheme.primary,
        width: "90%",
        marginTop: 30,
        borderRadius: 0,
      }}
      text1NumberOfLines={0}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 14,
        fontFamily: "RubikRegular",
        fontWeight: "400",
      }}
      text1={text1}
    />
  ),
};

export default toastConfig;
