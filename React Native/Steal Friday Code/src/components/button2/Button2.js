import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
const Button2 = () => {
  return (
    <View
      style={{
        width: 58,
        height: 51,
        backgroundColor: "#a41716",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }}
    >
      <Image
        source={require("../../assets/images/cart2.png")}
        style={{ height: 26, width: 30 }}
      />
    </View>
  );
};

// style={{ width: 58, height: 51, backgroundColor: "red", }}
// const style = StyleSheet.create({});

export { Button2 };
