import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MainTheme from "../../theme/main";
import NewSignalFormValidations from "../../utils/Validations/NewSignalForm";
import ErrorMsg from "../ErrorMsg";
import { ScrollView } from "react-native-gesture-handler";
import { CreateSignalService } from "../../services/Signals";
import deviceStorage from "../../services/deviceStorage";
import Toast from "react-native-toast-message";
import { SendToAllService } from "../../services/Notifications";

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
    operation_type: {
      label: "Tipo de operacion",
      value: null,
      color: "#5f5f5f",
    },
  };
  const [errorState, setErrorState] = useState<any>({});

  const [instrument, setInstrument] = useState("");
  const [operation_type, setOperationType] = useState({
    label: placeholder_list.operation_type.label,
    value: null,
  });
  const [market, setMarket] = useState({
    label: placeholder_list.markets.label,
    value: null,
  });
  const [execution_type, setExecutionType] = useState({
    label: placeholder_list.execution_type.label,
    value: null,
  });
  const [entry_point, setEntryPoint] = useState("");
  const [stop_loss, setStopLoss] = useState("");
  const [take_profit, setTakeProfit] = useState("");
  const [notes, setNotes] = useState("");

  const operation_type_items: any = [
    {
      label: placeholder_list.operation_type.label,
      value: placeholder_list.operation_type.value,
    },
    { label: "Compra", value: "buy" },
    { label: "Venta", value: "sell" },
  ];
  const markets_items: any = [
    {
      label: placeholder_list.markets.label,
      value: placeholder_list.markets.value,
    },
    { label: "Forex", value: "forex" },
    { label: "Criptomonedas", value: "critomonedas" },
    { label: "Acciones", value: "acciones" },
  ];
  const execution_type_items: any = [
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

  const validateForm = () => {
    const errors = NewSignalFormValidations({
      instrument,
      market,
      operation_type,
      execution_type,
      entry_point,
      stop_loss,
      take_profit,
    });

    setErrorState(errors);
    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      return;
    } else {
      const data = {
        instrument: instrument.toUpperCase(),
        market,
        operation_type,
        execution_type,
        entry_point,
        stop_loss,
        take_profit,
      };

      const token: any = await deviceStorage.getItem("authToken");

      const response: any = await CreateSignalService(data, token);

      if (response.status === 200) {
        Toast.show({ type: "success", text1: response.msg });
        await SendToAllService(token, market.label);
        setModalVisible(false);
      }
    }
  };

  return (
    <View style={{ ...styles.newsignal__form }}>
      <ScrollView>
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
          value={instrument}
          onChange={validateForm}
          onChangeText={setInstrument}
        />
        {errorState && errorState.instrument && (
          <ErrorMsg field={errorState.instrument} />
        )}
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          placeholder={placeholder_list.operation_type}
          style={pickerSelectStyles}
          onValueChange={(value, index) => {
            validateForm(),
              setOperationType({
                ...operation_type,
                label: operation_type_items[index].label,
                value: operation_type_items[index].value,
              });
          }}
          items={[
            { label: "Compra", value: "buy" },
            { label: "Venta", value: "sell" },
          ]}
        />
        {errorState && errorState.operationType && (
          <ErrorMsg field={errorState.operation_type} />
        )}
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          placeholder={placeholder_list.markets}
          style={pickerSelectStyles}
          onValueChange={(value, index) => {
            validateForm(),
              setMarket({
                ...market,
                label: markets_items[index].label,
                value: markets_items[index].value,
              });
          }}
          items={[
            { label: "Forex", value: "forex" },
            { label: "Criptomonedas", value: "critomonedas" },
            { label: "Acciones", value: "acciones" },
          ]}
        />
        {errorState && errorState.market && (
          <ErrorMsg field={errorState.market} />
        )}
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          placeholder={placeholder_list.execution_type}
          style={pickerSelectStyles}
          onValueChange={(value, index) => {
            validateForm(),
              setExecutionType({
                ...execution_type,
                label: execution_type_items[index].label,
                value: execution_type_items[index].value,
              });
          }}
          items={[
            { label: "Ejecucion por mercado", value: "market" },
            { label: "Sell Limit", value: "sell_limit" },
            { label: "Buy Limit", value: "buy_limit" },
            { label: "Sell Stop", value: "sell_stop" },
            { label: "Buy Stop", value: "buy_stop" },
          ]}
        />
        {errorState && errorState.executionType && (
          <ErrorMsg field={errorState.execution_type} />
        )}
        <Text style={styles.parameters__title}>Parametros</Text>
        <TextInput
          value={entry_point}
          onChangeText={setEntryPoint}
          onChange={validateForm}
          placeholder="Punto de entrada"
          style={{ ...styles.textinput }}
        />
        {errorState && errorState.entryPoint && (
          <ErrorMsg field={errorState.entry_point} />
        )}
        <TextInput
          value={stop_loss}
          onChangeText={setStopLoss}
          onChange={validateForm}
          placeholder="Stop Loss"
          style={{ ...styles.textinput, ...styles.stoploss }}
        />
        {errorState && errorState.stopLoss && (
          <ErrorMsg field={errorState.stop_loss} />
        )}
        <TextInput
          value={take_profit}
          onChangeText={setTakeProfit}
          onChange={validateForm}
          placeholder="Take Profit"
          style={{ ...styles.textinput, ...styles.takeprofit }}
        />
        {errorState && errorState.takeProfit && (
          <ErrorMsg field={errorState.take_profit} />
        )}
        <TextInput
          value={notes}
          onChangeText={setNotes}
          placeholder="Notas adicionales (Opcional)"
          style={{ ...styles.textinput }}
        />
        <TouchableOpacity
          style={{ ...styles.btn__submit }}
          activeOpacity={0.6}
          onPress={handleSubmit}
        >
          <Text style={styles.btn__submit_text}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginBottom: 15,
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
    marginBottom: 15,
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
