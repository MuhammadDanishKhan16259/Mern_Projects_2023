import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import React from "react";

const Settingoption = ({ title, press }) => {
  return (
    <TouchableOpacity onPress={press} style={styles.settingop}>
      <View style={{}}>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </View>
      <View style={{}}>
        <Image
          source={require("../../assets/images/rightarrow.png")}
          style={{ width: 14, height: 24 }}
        />
      </View>
    </TouchableOpacity>
    // <View
    //   style={{
    //     backgroundColor: "white",
    //     borderRadius: 15,
    //     marginTop: marginTop,
    //     width: "90%",
    //     height: 60,
    //     alignSelf: "center",

    //     justifyContent: "space-around",
    //     flexDirection: "row",
    //   }}
    // >
    //   <Text style={styles.txt}>{text}</Text>
    //   {/* <View
    //     style={{
    //       // alignItems: "center",
    //       // alignSelf: "center",
    //       justifyContent: "center",
    //     }}
    //   > */}
    //   <TouchableOpacity onPress={press}>
    //     <Image
    //       source={require("../../assets/images/rightarrow.png")}
    //       style={{
    //         // alignItems: "center",
    //         // alignSelf: "center",
    //         // justifyContent: "center",
    //         alignSelf: "center",
    //         right: 15,
    //         marginTop: 15,
    //         // marginBottom: 25,
    //         // justifyContent: "space-evenly",
    //       }}
    //     />
    //   </TouchableOpacity>
    //   {/* </View> */}
    // </View>
  );
};
const styles = StyleSheet.create({
  settingop: {
    width: "100%",
    height: 57,
    backgroundColor: "#fff",
    elevation: 10,
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,

    // main: {
    //   // marginTop: marginTop,
    //   backgroundColor: "white",
    //   borderRadius: 15,
    //   // width: "90%",
    //   // height: "18%",
    //   width: "90%",
    //   height: 60,
    //   // marginRight: "13%",
    //   alignSelf: "center",
    //   justifyContent: "center",
    //   // alignItems: "center",
    //   paddingLeft: 20,
    //   flexDirection: "row",
    //   // width: "90%",
    //   // height: "18%",
    // },
    // txt: {
    // marginTop:10,
    // flex: 1,
    // left: 20,
    // marginTop: marginTop,
    // marginTop: 20,
    // justifyContent: "center",
    // alignSelf: "center",
    // textAlign: "center",
    // alignItems: "center",

    // backgroundColor: "white",
  },
});
export { Settingoption };
