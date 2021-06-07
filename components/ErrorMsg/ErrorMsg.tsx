import React from "react";
import { StyleSheet, Text } from "react-native";
import MainTheme from "../../theme/main";

const ErrorMsg = ({ field }: any) => {
  return <Text style={styles.errorText}>{field}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 20,
    color: MainTheme.primary,
    fontSize: 15,
    fontFamily: "RubikRegular",
  },
});

export default ErrorMsg;
