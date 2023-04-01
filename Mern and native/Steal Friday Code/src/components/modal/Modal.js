import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Lottie from "lottie-react-native";

import { Button } from "../../components";

const Modall = ({ visible, backbtn, svisible, show, text, presss }) => {
  return (
    <Modal
      onBackButtonPress={backbtn}
      style={{ alignItems: "center" }}
      isVisible={visible}
    >
      <View style={styles.modalview}>
        <View style={styles.topview}>
          {show ? (
            <>
              <MaterialIcons name="error-outline" size={70} />
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
              >
                Notice
              </Text>
            </>
          ) : (
            <Lottie
              style={{
                width: 120,
                height: 120,
                marginBottom: -10,
              }}
              autoPlay
              source={require("../../assets/lottie/lf30_editor_mlmghdi1.json")}
            />
          )}
        </View>
        <Text style={{ fontSize: 18, textAlign: "center" }}>{text}</Text>
        <View style={styles.btn}>
          {show ? (
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Button
                press={svisible}
                title={"No"}
                color={"black"}
                back={"white"}
                width={110}
                border={2}
                height={45}
                marginRight={10}
              />
              <Button
                title={"Yes"}
                press={presss}
                color={"white"}
                back={"#a41716"}
                width={110}
                height={45}
              />
            </View>
          ) : (
            <Button
              // press={presss}
              press={backbtn}
              title={"Close"}
              color={"white"}
              back={"#a41716"}
              width={110}
              height={45}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalview: {
    backgroundColor: "white",
    width: 250,
    height: 250,
    borderRadius: 30,
    // alignItems: "center",
  },
  topview: {
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
});
export { Modall };
