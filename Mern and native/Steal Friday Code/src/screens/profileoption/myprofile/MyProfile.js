import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Button, Header, Input3 } from "../../../components";
// import { Button, Header, Input3 } from "../../../../components";
const Myprofile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
          <Header press3={() => navigation.goBack()} header2={true} />
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../../assets/images/camera.png")}
              style={{
                width: 60,
                height: 60,
                position: "relative",
                top: 55,
                zIndex: 1,
                right: -60,

                // position: "absolute",
                // right: -35,
                // width: 120,
                // height: 120,
              }}
            />
            <Image
              source={require("../../../assets/images/profile2.png")}
              style={{ width: 137, height: 137 }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Input3
              placeholder={"JANE"}
              // placeholder={"First Name"}
              image={require("../../../assets/images/user.png")}
              // image2={require("../../../../assets/images/edit.png")}
              // marginVertical={9}
              // marginHorizontal={150}
            />

            <Input3
              placeholder={"SMITH"}
              // placeholder={"Last Name"}
              image={require("../../../assets/images/user.png")}
              // image2={require("../../../../assets/images/edit.png")}
            />

            <Input3
              type={"email-address"}
              placeholder={"johnsmith@gmail.com"}
              image={require("../../../assets/images/emailicon.png")}
              // image2={require("../../../../assets/images/edit.png")}
            />

            <Input3
              type={"phone-pad"}
              placeholder={"+1463839738093"}
              image={require("../../../assets/images/phone.png")}
              // image2={require("../../../../assets/images/edit.png")}
            />

            <View style={{ marginTop: 45 }}>
              <Button
                //  press={() => setVisible(true)}
                press={() => {}}
                color={"white"}
                title={"Update"}
                width={"55%"}
                height={55}
                back={"#a41716"}
                size={22}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  // main: {
  //   textAlign: "center",
  //   marginTop: 40,
  //   alignSelf: "center",
  // },
});

export default Myprofile;
