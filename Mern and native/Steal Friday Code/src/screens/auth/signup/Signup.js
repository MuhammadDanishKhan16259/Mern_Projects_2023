import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from "../../../components";
import Checkbox from "expo-checkbox";
const Signup = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const userimage = require("../../../assets/images/user.png");
  const phoneimage = require("../../../assets/images/phone.png");
  const emailimage = require("../../../assets/images/emailicon.png");
  const lockimage = require("../../../assets/images/lockicon.png");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View style={styles.topView}>
            <Image
              source={require("../../../assets/images/logo2.png")}
              style={styles.logoimage}
            />
            <Text style={styles.logotext}>Sign Up</Text>
          </View>
          <View style={styles.middleView}>
            <Input margin={15} image={userimage} placeholder={"Name"} />
            <Input
              margin={15}
              image={phoneimage}
              placeholder={"Phone Number"}
              type={"number-pad"}
            />
            <Input
              margin={15}
              image={emailimage}
              placeholder={"Email Address"}
              type={"email-address"}
            />
            <Input
              margin={15}
              image={lockimage}
              placeholder={"Password"}
              secureTextEntry={true}
              pass={true}
            />
            <Input
              margin={15}
              image={lockimage}
              placeholder={"Confrim Password"}
              secureTextEntry={true}
              pass={true}
            />

            <View style={styles.check}>
              <View style={{ flexDirection: "row" }}>
                <Checkbox
                  style={{ marginRight: 10, padding: -10 }}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "#CD1C1B" : undefined}
                />
                <Text style={{ fontSize: 12 }}>I agree with</Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#CD1C1B",
                    paddingHorizontal: 5,
                  }}
                >
                  Terms of Services
                </Text>
                <Text style={{ fontSize: 12 }}>&</Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#CD1C1B",
                    paddingHorizontal: 5,
                  }}
                >
                  Privacy Policy
                </Text>
              </View>
            </View>

            <View style={styles.bottomview}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#CD1C1B",
                  marginBottom: 10,
                }}
              >
                Subscription Charges $19.9
              </Text>
              <Button
                press={() => {
                  navigation.navigate("Payment");
                }}
                size={18}
                width={"55%"}
                height={55}
                title={"Proceed to pay"}
                color={"white"}
                back={"#a41716"}
              />
              {/* <Text style={styles.or}>OR</Text> */}
              <View style={styles.signup}>
                <Text style={{ fontSize: 12 }}>Already have an account? </Text>
                <Text
                  onPress={() => navigation.navigate("Login")}
                  style={{ color: "#CD1C1B", fontWeight: "600", fontSize: 12 }}
                >
                  Login
                </Text>
              </View>

              <View style={styles.contact}>
                <Text style={{ fontSize: 13 }}>Having Trouble Siging In? </Text>
                <Text
                  style={{ color: "#CD1C1B", fontWeight: "600", fontSize: 13 }}
                >
                  Contact Us
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  topView: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 5,
  },
  logoimage: {
    width: 200,
    height: 51,
  },
  logotext: {
    fontSize: 34,
    fontWeight: "900",
    marginTop: 10,
  },
  check: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    alignSelf: "center",
  },
  bottomview: {
    marginTop: 15,
    alignItems: "center",
  },
  or: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600%",
    opacity: 0.3,
    marginTop: 20,
  },
  signup: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
  },
  contact: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
});
export default Signup;
