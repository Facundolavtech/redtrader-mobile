import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainTheme from "../../theme/main";

interface SignalsProps {
  sell?: Boolean;
}

const Signal = ({ sell }: SignalsProps) => {
  return (
    <View style={styles.signal__card}>
      <View
        style={{
          ...styles.card__header,
          backgroundColor: sell ? MainTheme.primary : "#25c705",
        }}
      >
        <Text style={{ ...styles.signal__pair, fontFamily: "RubikMedium" }}>
          AUD/JPY
        </Text>
        <Text
          style={{ ...styles.signal__type_text, fontFamily: "RubikMedium" }}
        >
          {sell ? "VENTA" : "COMPRA"}
        </Text>
      </View>
      <View style={styles.space__between}>
        <Text style={{ ...styles.signal__market, fontFamily: "RubikMedium" }}>
          Forex
        </Text>
        <Text
          style={{
            ...styles.signal__execution_type,
            fontFamily: "RubikMedium",
          }}
        >
          Ejecucion por mercado
        </Text>
      </View>
      <View style={styles.signal__value_container}>
        <Text
          style={{ ...styles.entry__point_title, fontFamily: "RubikRegular" }}
        >
          Punto de entrada: <Text style={styles.entry__point}>1.2558</Text>
        </Text>
      </View>
      <View style={styles.signal__value_container}>
        <Text style={{ ...styles.stoploss__title, fontFamily: "RubikRegular" }}>
          Stop Loss: <Text style={styles.stoploss}>1.5880</Text>
        </Text>
      </View>
      <View style={styles.signal__value_container}>
        <Text
          style={{ ...styles.takeprofit__title, fontFamily: "RubikRegular" }}
        >
          Take Profit: <Text style={styles.takeprofit}>1.1550</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signal;

const styles = StyleSheet.create({
  signal__card: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    minHeight: 250,
    backgroundColor: "#fff",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 20,
    elevation: 3,
  },

  space__between: {
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
    marginBottom: 40,
  },

  card__header: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  signal__pair: {
    color: "#fff",
    fontSize: 15,
  },
  signal__type_text: {
    color: "#fff",
    fontSize: 15,
  },

  signal__market: {
    color: MainTheme.paragraphs,
    fontSize: 20,
    marginRight: 30,
  },

  signal__execution_type: {
    fontSize: 15,
  },

  signal__value_container: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  entry__point_title: {
    width: "100%",
    color: "#858585",
    fontSize: 17,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: MainTheme.borderOpacity,
  },
  entry__point: {
    color: "#333",
    fontSize: 17,
  },
  stoploss__title: {
    width: "100%",
    color: "#858585",
    fontSize: 17,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: MainTheme.borderOpacity,
  },
  stoploss: {
    color: "#b62424",
    fontSize: 17,
  },

  takeprofit__title: {
    width: "100%",
    color: "#858585",
    fontSize: 17,
  },
  takeprofit: {
    color: "#10c019",
    fontSize: 17,
  },
});
