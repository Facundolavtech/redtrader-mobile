import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NewSignalForm from "../NewSignalForm";

const NewSignalModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        statusBarTranslucent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ ...styles.centeredView, marginBottom: 0 }}>
          <View style={styles.modalView}>
            <NewSignalForm setModalVisible={setModalVisible} />
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        touchSoundDisabled
        activeOpacity={0.6}
        style={[styles.button, styles.buttonOpen, styles.buttonAbsolute]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ ...styles.textStyle, fontFamily: "RubikMedium" }}>
          Nueva señal +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 50,
  },
  modalView: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowRadius: 4,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 40,
    minWidth: 120,
    elevation: 10,
  },
  buttonOpen: {
    backgroundColor: "#3ec500",
  },
  buttonAbsolute: {
    position: "absolute",
    right: "5%",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default NewSignalModal;
