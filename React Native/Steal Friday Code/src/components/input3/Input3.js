import React from "react";
import { Text, TextInput, View, StyleSheet, Image } from "react-native";
const Input3 = ({ type, placeholder, image, image2 }) => {
  // require("../../assets/images/user1.png")
  return (
    <View style={styles.inputview2}>
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "90%" }}
      >
        <Image style={{ marginLeft: 5 }} source={image} />

        <TextInput
          keyboardType={type}
          placeholder={placeholder}
          style={styles.input2}
        />
      </View>
      <Image
        source={require("../../assets/images/edit.png")}
        // source={image2}
        style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputview2: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    height: 52,
    borderBottomColor: "#BCBCBC",
    borderBottomWidth: 1,
    marginTop: 20,
    paddingTop: 20,
    justifyContent: "space-between",

    // flexDirection: "row",
    // borderBottomColor: "black",
    // borderBottomWidth: 1,
    // height: 40,
    // width: "90%",
    // justifyContent: "space-between",
    // alignSelf: "center",
    // fontSize: 17,
    // fontWeight: "600",
  },
  input2: {
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
    width: "100%",
    // width: "75%",
    // marginHorizontal: 15,
  },
  // main: {
  //   textAlign: "center",
  //   marginTop: 40,
  //   alignSelf: "center",
  // },
});
export { Input3 };
