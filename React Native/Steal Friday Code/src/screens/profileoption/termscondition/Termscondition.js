import { FlatList, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components";
import { term } from "../../../constant/objects";
// import { term } from "../../../constant";
// import { Header } from "../../../components";
// import { Header } from "../../../components";
// import { term } from "../../../constant";
// import { Header } from "../../../../../components";
// import { term } from "../../../../../constant";

const Termscondition = ({ navigation }) => {
  return (
    // style={{ flex: 1, height: "90%" }}
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        {/* <View
          style={{
            width: "90%",
            alignSelf: "center",
          }}
        > */}

        <Header press3={() => navigation.goBack()} header2={true} />

        <View
          style={{
            width: "90%",
            // height: "100%",
            borderRadius: 20,
            backgroundColor: "white",
            elevation: 10,
            marginTop: 60,
            alignSelf: "center",
            marginBottom: 80,
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "white",
              borderRadius: 20,
              elevation: 10,
              marginTop: 60,
              alignSelf: "center",
              marginBottom: 80,
              paddingBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Terms of service
            </Text>
            <View style={{ width: "90%", alignSelf: "center", marginTop: 15 }}>
              <FlatList
                data={term}
                renderItem={(item) => {
                  return (
                    <>
                      <Text style={{ fontsize: 16, fontWeight: "bold" }}>
                        {item.item.heading}
                      </Text>
                      <Text style={{ fontsize: 12 }}>{item.item.content}</Text>
                    </>
                  );
                }}
              />
            </View>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Termscondition;
