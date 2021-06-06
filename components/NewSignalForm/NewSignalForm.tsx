import React from "react";
import RNPickerSelect from "react-native-picker-select";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MainTheme from "../../theme/main";

interface NewSignalFormProps {
  setModalVisible: Function;
}

const NewSignalForm = ({ setModalVisible }: NewSignalFormProps) => {
  const placeholder_list = {
    markets: {
      label: "Selecciona el mercado",
      value: null,
      color: "#5f5f5f",
    },
    execution_type: {
      label: "Tipo de Ejecucion",
      value: null,
      color: "#5f5f5f",
    },
    signal_type: {
      label: "Tipo de operacion",
      value: null,
      color: "#5f5f5f",
    },
  };

  const execution_type_items = [
    {
      label: placeholder_list.execution_type.label,
      value: placeholder_list.execution_type.value,
    },
    { label: "Ejecucion por mercado", value: "market" },
    { label: "Sell Limit", value: "sell_limit" },
    { label: "Buy Limit", value: "buy_limit" },
    { label: "Sell Stop", value: "sell_stop" },
    { label: "Buy Stop", value: "buy_stop" },
  ];

  return (
    <View style={styles.newsignal__form}>
      <View style={styles.form__title_container}>
        <Text style={styles.form__title}>Nueva señal</Text>
        <TouchableOpacity
          style={styles.form__btn_close}
          onPress={() => setModalVisible(false)}
        >
          <Text style={{ color: "#fff", fontFamily: "RubikMedium" }}>✖</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Instrumento: Ej... AUD/NZD"
        style={{ ...styles.textinput }}
      />
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        placeholder={placeholder_list.signal_type}
        style={pickerSelectStyles}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Compra", value: "buy" },
          { label: "Venta", value: "sell" },
        ]}
      />
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        placeholder={placeholder_list.markets}
        style={pickerSelectStyles}
        onValueChange={(value) => console.log()}
        items={[
          { label: "Forex", value: "forex" },
          { label: "Criptomonedas", value: "critomonedas" },
          { label: "Acciones", value: "acciones" },
        ]}
      />
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        placeholder={placeholder_list.execution_type}
        style={pickerSelectStyles}
        onValueChange={(value, index) =>
          console.log(execution_type_items[index])
        }
        items={[
          { label: "Ejecucion por mercado", value: "market" },
          { label: "Sell Limit", value: "sell_limit" },
          { label: "Buy Limit", value: "buy_limit" },
          { label: "Sell Stop", value: "sell_stop" },
          { label: "Buy Stop", value: "buy_stop" },
        ]}
      />
      <Text style={styles.parameters__title}>Parametros</Text>
      <TextInput
        placeholder="Punto de entrada"
        style={{ ...styles.textinput }}
      />
      <TextInput
        placeholder="Stop Loss"
        style={{ ...styles.textinput, ...styles.stoploss }}
      />
      <TextInput
        placeholder="Take Profit"
        style={{ ...styles.textinput, ...styles.takeprofit }}
      />
      <TouchableOpacity style={{ ...styles.btn__submit }} activeOpacity={0.6}>
        <Text style={styles.btn__submit_text}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    width: "100%",
    fontSize: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(51, 51, 51, 0.205)",
    color: "#565656",
    fontFamily: "RubikRegular",
    marginBottom: 20,
    paddingRight: 30,
  },
});

const styles = StyleSheet.create({
  newsignal__form: {
    width: "80%",
    margin: "auto",
  },
  form__title_container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 45,
  },
  form__title: {
    fontSize: 18,
    color: MainTheme.primary,
    fontFamily: "RubikMedium",
  },
  form__btn_close: {
    borderRadius: 100,
    backgroundColor: MainTheme.primary,
    height: 35,
    width: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    marginBottom: 20,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(51, 51, 51, 0.205)",
    color: "#292929",
    fontFamily: "RubikRegular",
    paddingBottom: 10,
  },
  parameters__title: {
    fontFamily: "RubikMedium",
    marginBottom: 20,
    marginTop: 20,
    fontSize: 20,
    color: MainTheme.paragraphs,
  },
  stoploss: {
    color: "#eb1c1c",
  },
  takeprofit: {
    color: "#239600",
  },
  btn__submit: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#239600",
    paddingVertical: 17,
    borderRadius: 10,
  },
  btn__submit_text: {
    color: "#fff",
    fontFamily: "RubikMedium",
    fontSize: 18,
  },
});

export default NewSignalForm;
