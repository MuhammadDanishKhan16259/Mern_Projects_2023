import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
// import { Header } from "../../../components";
import { Header, Settingoption } from "../../../components";

const Profilesetting = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          {/* <Header></Header> */}
          <Header press3={() => navigation.goBack()} header2={true} />

          <View style={{ alignItems: "center", marginTop: 30 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Settings</Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <Settingoption
              title={"My Profile"}
              press={() => navigation.navigate("Myprofile")}
            />
            <Settingoption
              title={"Notificatons"}
              press={() => navigation.navigate("Notificationsetting")}
            />
            <Settingoption
              title={"Change Password"}
              press={() => navigation.navigate("Changepassword")}
            />
            <Settingoption
              title={"Terms & Conditions"}
              press={() => navigation.navigate("Termscondition")}
            />
            <Settingoption
              title={"Privacy Policy"}
              press={() => navigation.navigate("Privacypolicy")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profilesetting;

// import { Image, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Header, Settingtext } from "../../../../components";

// const Profilesetting = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ width: "90%", alignSelf: "center" }}>
//         <Header press3={() => navigation.goBack()} header2={true} />

//         <View style={{ alignItems: "center", marginTop: 10 }}>
//           <Text style={{ fontSize: 22, fontWeight: "bold" }}>Settings</Text>
//         </View>
//       </View>
//       <View>
//         <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//           <Settingtext
//             text={"My profiles"}
//             marginTop={30}
//             press={() => navigation.navigate("Profile")}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
//           <Settingtext
//             text={"Notifications"}
//             marginTop={15}
//             press={() => navigation.navigate("Notifications")}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("Changepassword")}>
//           <Settingtext
//             text={"Change Password"}
//             marginTop={15}
//             press={() => navigation.navigate("Changepassword")}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("Termscondition")}>
//           <Settingtext
//             text={"Terms & Conditions"}
//             marginTop={15}
//             press={() => navigation.navigate("Termscondition")}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}>
//           <Settingtext text={"PrivacyPolicy"} marginTop={15} />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Profilesetting;
