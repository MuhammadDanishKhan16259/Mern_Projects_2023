import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Input2, Modall } from "../../../components";
import { Button } from "../../../components";
const Payment = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ width: 0 }}
          >
            <Image
              source={require("../../../assets/images/leftarrow.png")}
              style={{
                width: 24,
                height: 24,
                marginTop: 40,
              }}
            />
          </TouchableOpacity>

          <View style={styles.topview}>
            <Text style={styles.head1}>Payment Method</Text>
            <Text style={styles.head2}>
              Subscription Fee $19.99/month and it will auto re-subscribed. You
              can turn off auto re-subscription from setting
            </Text>
          </View>
          <View style={styles.middleview}>
            <Input2 label={"Name on Card"} placeholder={"Name"} width={"90%"} />
            <Input2
              label={"Card Number"}
              placeholder={"xxxx xxxx xxxx xxxx"}
              margin={40}
              width={"90%"}
              pass={true}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "110%",
                alignSelf: "center",
              }}
            >
              <Input2
                type={"phone-pad"}
                placeholder={"xx/xx"}
                label={"Expiry Date"}
                margin={40}
                width={"30%"}
              />
              <Input2
                placeholder={"xxx"}
                type={"phone-pad"}
                label={"CVV"}
                margin={40}
                width={"30%"}
              />
            </View>
            {/* <Text style={styles.text}>Name on Card</Text> */}
          </View>

          <View style={styles.bottomview}>
            <Button
              press={() => setVisible(true)}
              color={"white"}
              title={"Pay Now"}
              width={"55%"}
              height={55}
              back={"#a41716"}
              size={22}
            />
            <Modall
              visible={visible}
              svisible={() => setVisible(false)}
              backbtn={() => setVisible(false)}
              presss={() => {
                setVisible2(true), setVisible(false);
              }}
              show={true}
              text={"Are you sure, you want to proceed with payment?"}
              // show={false}
            />

            <Modall
              visible={visible2}
              text={"Payment Processed Successfully"}
              backbtn={() => setVisible2(false)}
            />
            <Text style={styles.or}>- OR -</Text>
            <Button
              press={() => navigation.navigate("Mydrawer", { screen: "Homes" })}
              back={"white"}
              width={"55%"}
              height={55}
              title={"Pay Pal"}
              // style={styles.btn3}
              color={"black"}
              size={22}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  topview: {
    alignItems: "center",
    marginTop: 5,
    // textAlign: "center",
    // alignSelf: "center",
  },
  head1: {
    fontSize: 25,
    fontWeight: "bold",
  },
  head2: {
    // alignItems: "center",
    textAlign: "center",
    fontSize: 14,
    width: "80%",
    fontWeight: "bold",
    lineHeight: 17,
    marginTop: 20,
    opacity: 0.7,
  },
  middleview: {
    marginTop: 30,
    // alignSelf: "center",
  },
  or: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600%",
    opacity: 0.3,
    // marginTop: 20,
    marginVertical: 10,
  },
  bottomview: {
    marginTop: 40,
    paddingBottom: 20,
  },
  // btn: {
  //   marginBottom: 10,
  // },
});
export default Payment;
