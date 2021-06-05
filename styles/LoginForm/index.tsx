import { StyleSheet } from "react-native";
import MainTheme from "../../theme/main";

const styles = StyleSheet.create({
  login__card: {
    width: "90%",
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  logo: {
    width: 120,
    height: 120,
    margin: "auto",
    marginBottom: 50,
  },

  form__input: {
    width: "100%",
    fontSize: 15,
    marginBottom: 30,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: MainTheme.borderOpacity,
    paddingVertical: 10,
    paddingLeft: 15,
  },

  btn__submit: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "red",
    marginTop: 20,
  },

  btn__submit__text: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "500",
  },
});

export default styles;
