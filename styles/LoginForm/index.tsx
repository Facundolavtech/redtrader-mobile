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
    marginBottom: 40,
  },

  form__input: {
    width: "100%",
    fontSize: 15,
    marginBottom: 20,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: MainTheme.borderOpacity,
    paddingVertical: 10,
  },

  btn__submit: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
    width: "100%",
    backgroundColor: MainTheme.primary,
    marginTop: 20,
    elevation: 2,
  },

  btn__submit__text: {
    fontSize: 17,
    color: "#fff",
  },
});

export default styles;
