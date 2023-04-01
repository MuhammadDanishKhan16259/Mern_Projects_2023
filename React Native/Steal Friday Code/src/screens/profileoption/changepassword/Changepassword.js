import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Button, Header, Input, Modall } from "../../../../components";
import { Button, Header, Input, Modall, Input3 } from "../../../components";
const Changepassword = ({ navigation }) => {
  const [visible2, setVisible2] = useState(false);
  const lockimage = require("../../../assets/images/lockicon.png");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center", paddingBottom: 40 }}>
          <Header press3={() => navigation.goBack()} header2={true} />
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "400",
                // alignSelf: "center",
                // fontSize: 22,
                // color: "#000000",
                // fontWeight: "bold",
                // marginTop: 40,
              }}
            >
              Change Password
            </Text>
          </View>

          <View
            style={{
              marginTop: 50,
              width: "80%",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Input
              margin={15}
              image={lockimage}
              placeholder={"Change Password"}
              secureTextEntry={true}
              pass={true}
            />
            <Input
              margin={15}
              image={lockimage}
              placeholder={"New Password"}
              secureTextEntry={true}
              pass={true}
            />
            <Input
              margin={15}
              image={lockimage}
              placeholder={"Confirm Password"}
              type={"number-pad"}
              secureTextEntry={true}
              pass={true}
            />
            {/* <Input margin={35} placeholder={" New Password"} type={"number-pad"} /> */}
            {/* <Input
          margin={35}
          placeholder={" Confrim Password"}
          type={"number-pad"}
        /> */}
          </View>
          <View style={{ marginTop: 50 }}>
            <Button
              press={() => {
                setVisible2(true);
              }}
              color={"white"}
              title={"Update"}
              width={"70%"}
              height={60}
              back={"#a41716"}
              size={22}
            />
            <Modall
              visible={visible2}
              text={"Pasword updated"}
              backbtn={() => navigation.goBack()}
            />
            {/* <Modall
              visible={visible2}
              text={"Payment Processed Successfully"}
              backbtn={() => setVisible2(false)}
            /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Changepassword;
