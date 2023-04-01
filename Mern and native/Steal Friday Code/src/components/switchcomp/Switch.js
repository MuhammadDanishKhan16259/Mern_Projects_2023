import React, { useState } from "react";
import { View, Switch, Text, StyleSheet } from "react-native";

const Switchcomp = ({ text }) => {
  const [switchValue, setswitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setswitchValue(value);
  };
  return (
    <View
      style={{
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center",
      }}
    >
      <Text style={{}}>{text}</Text>

      <Switch
        trackColor={{ true: "red", false: "grey" }}
        thumbColor={switchValue ? "#f4f3f4" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={switchValue}

        // style={{ marginTop: 5 }}
      />
    </View>
  );
};

export default Switchcomp;
