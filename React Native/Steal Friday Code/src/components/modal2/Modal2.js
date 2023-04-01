import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
// import Modal from "react-native-modal";
import Modal from "react-native-modal";
// import RadioButtonRN from "radio-buttons-react-native";
import RadioForm from "react-native-simple-radio-button";
import { Button } from "../../components";
const Modall2 = ({ visible, backbtn }) => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const data = [
    {
      label: "New to Old",
      Value: 0,
    },
    {
      label: " Old to New",
      Value: 1,
    },
  ];
  const data2 = [
    {
      label: "Price Low To High",
      Value: 0,
    },
    {
      label: " Price High To Low",
      Value: 1,
    },
  ];
  return (
    <Modal
      onBackButtonPress={backbtn}
      style={{ alignItems: "center" }}
      isVisible={visible}
    >
      <View style={styles.modalview}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Filter
        </Text>
        <View style={{ alignSelf: "center", width: "50%" }}>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, opacity: 0.3, textAlign: "center" }}>
              Conditions
            </Text>
            <View>
              <RadioForm
                radio_props={data}
                onPress={(value) => setValue(value)}
                initial={value}
                buttonColor="black"
                style={styles.radio}
                selectedButtonColor="red"
              />
            </View>
          </View>

          <View
            style={{
              width: 191,
              borderBottomColor: "#707070",
              borderBottomWidth: 1,
              alignItems: "center",
              alignSelf: "center",
              marginTop: 20,
            }}
          ></View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, opacity: 0.3, textAlign: "center" }}>
              Prices
            </Text>
            <View>
              <RadioForm
                radio_props={data2}
                onPress={(value) => setValue2(value)}
                initial={value2}
                buttonColor="black"
                style={[styles.radio, { marginTop: 10 }]}
                selectedButtonColor="red"
              />
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <Button
              title={"Clear"}
              color={"white"}
              back={"#a41716"}
              width={110}
              height={45}
              press={backbtn}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalview: {
    backgroundColor: "white",
    width: 292,
    height: 403,
    borderRadius: 30,
    // alignItems: "center",
  },
  radio: {
    // padding: 10,
    // margin: 10,
    marginTop: 10,
  },
});
export { Modall2 };
// textColor="#030303"
