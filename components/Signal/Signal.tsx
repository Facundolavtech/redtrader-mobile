import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../context/AuthContext";
import MainTheme from "../../theme/main";
import SignalActions from "../SignalActions";
import TimeAgo from "react-native-timeago";
import moment from "moment";
import "moment/locale/es-mx";
moment.locale("es-mx");

interface SignalData {
  instrument: string;
  operation_type: { value: string; label: string };
  market: { value: string; label: string };
  execution_type: { value: string; label: string };
  entry_point: string;
  stop_loss: string;
  take_profit: string;
  notes: string;
}

type SignalType = {
  _id: any;
  data: SignalData;
  createdAt: any;
};

interface SignalsProps {
  signal: SignalType;
  token: any;
  filterSignal: any;
}

const Signal = ({
  signal: { data, createdAt, _id },
  token,
  filterSignal,
}: SignalsProps) => {
  const {
    authState: { userInfo },
  }: any = useContext(AuthContext);

  const {
    instrument,
    operation_type,
    market,
    execution_type,
    entry_point,
    stop_loss,
    take_profit,
    notes,
  } = data;

  const { value }: any = operation_type;

  return (
    <View style={styles.signal__card}>
      <View
        style={{
          ...styles.card__header,
          backgroundColor: value === "sell" ? MainTheme.primary : "#25c705",
        }}
      >
        <Text style={{ ...styles.signal__pair, fontFamily: "RubikMedium" }}>
          {instrument}
        </Text>
        <Text
          style={{ ...styles.signal__type_text, fontFamily: "RubikMedium" }}
        >
          {operation_type.label}
        </Text>
      </View>
      <View style={styles.timeago__container}>
        <Ionicons name="time-outline" size={30} color="#585858" />
        <Text style={styles.timeago__time}>
          <TimeAgo time={createdAt} />
        </Text>
      </View>
      <View style={styles.space__between}>
        <Text style={{ ...styles.signal__market, fontFamily: "RubikMedium" }}>
          {market.label}
        </Text>
        <Text
          style={{
            ...styles.signal__execution_type,
            fontFamily: "RubikMedium",
          }}
        >
          {execution_type.label}
        </Text>
      </View>

      <View style={styles.signal__value_container}>
        <Text
          style={{ ...styles.entry__point_title, fontFamily: "RubikRegular" }}
        >
          Punto de entrada:{" "}
          <Text style={styles.entry__point}>{entry_point}</Text>
        </Text>
      </View>
      <View style={styles.signal__value_container}>
        <Text style={{ ...styles.stoploss__title, fontFamily: "RubikRegular" }}>
          Stop Loss: <Text style={styles.stoploss}>{stop_loss}</Text>
        </Text>
      </View>
      <View style={styles.signal__value_container}>
        <Text
          style={{ ...styles.takeprofit__title, fontFamily: "RubikRegular" }}
        >
          Take Profit: <Text style={styles.takeprofit}>{take_profit}</Text>
        </Text>
      </View>
      {notes !== null && notes !== "" && (
        <View style={styles.notes__container}>
          <Text style={styles.notes__title}>Notas adicionales</Text>
          <Text style={styles.notes__body}>
            <Text>{notes}</Text>
          </Text>
        </View>
      )}
      {userInfo && userInfo.roles.includes("educator") && (
        <SignalActions id={_id} token={token} filterSignal={filterSignal} />
      )}
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

  timeago__container: {
    width: "90%",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  timeago__time: {
    fontSize: 18,
    color: "#585858",
    marginLeft: 10,
  },

  space__between: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginVertical: 30,
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
    fontSize: 25,
    marginBottom: 10,
  },

  signal__execution_type: {
    fontSize: 15,
    color: "#565656",
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

  notes__container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  notes__title: {
    width: "100%",
    fontSize: 20,
    fontFamily: "RubikMedium",
    color: "#333333",
    marginBottom: 10,
    borderBottomColor: MainTheme.borderOpacity,
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 10,
  },

  notes__body: {
    fontSize: 18,
    fontFamily: "RubikRegular",
    color: "#424242",
  },
});
