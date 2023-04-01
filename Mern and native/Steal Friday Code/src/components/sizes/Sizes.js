import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const Sizes = ({ back, color, text, border }) => {
  return (
    <View
      style={{
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: back,
        alignItems: "center",
        marginLeft: 5,
        borderColor: border,
        borderWidth: 1,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 15, color: color, fontWeight: "bold" }}>
        {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export { Sizes };
