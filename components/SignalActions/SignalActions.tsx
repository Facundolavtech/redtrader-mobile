import React from "react";
import { Text } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DeleteSignalService } from "../../services/Signals";
import Toast from "react-native-toast-message";

const SignalActions = ({ id, token, filterSignal }: any) => {
  const removeSignal = async () => {
    const response = await DeleteSignalService(token, id);

    if (response?.status === 200) {
      filterSignal(id);
      Toast.show({
        type: "success",
        text1: response?.msg,
      });
    } else {
      Toast.show({
        type: "error",
        text1: response?.msg || "Ocurrio un error",
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 10 }}>
        <Text>
          <Ionicons name="create-outline" size={35} color="#0965bb" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={removeSignal}>
        <Text>
          <Ionicons name="trash-outline" size={35} color="#ce1212" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 10,
    top: 70,
  },
});

export default SignalActions;
