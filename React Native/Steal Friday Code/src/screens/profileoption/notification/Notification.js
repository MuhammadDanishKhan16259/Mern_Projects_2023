// import React from "react";
// import { ScrollView, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Header, Settingtext } from "../../../../components";
// // import Notificationtext from "../../../../components/notificationtext/Notificationtext";
// import Switchcomp from "../../../../components/switchcomp/Switch";

// const Notifications = ({ navigation }) => {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View style={{ width: "90%", alignSelf: "center" }}>
//           <Header press3={() => navigation.goBack()} header2={true} />
//         </View>
//         <View>
//           <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
//             <Text
//               style={{ fontSize: 24, color: "#000000", fontWeight: "bold" }}
//             >
//               New Deal
//             </Text>
//           </View>
//           <View style={{ marginTop: 7 }}>
//             <Switchcomp text={"In App Notifications"} />
//           </View>
//           <View style={{ marginTop: 5 }}>
//             <Switchcomp text={"Push Notifications"} />
//           </View>
//           <View style={{ marginTop: 5 }}>
//             <Switchcomp text={"Email Notifications"} />
//           </View>
//           <View style={{ paddingHorizontal: 20, marginTop: 7 }}>
//             <Text
//               style={{ fontSize: 24, color: "#000000", fontWeight: "bold" }}
//             >
//               Order Status Update
//             </Text>
//           </View>
//           <View style={{ marginTop: 6 }}>
//             <Switchcomp text={"In App Notifications"} />
//           </View>
//           <View style={{ marginTop: 5 }}>
//             <Switchcomp text={"Push Notifications"} />
//           </View>
//           <View style={{ marginTop: 5 }}>
//             <Switchcomp text={"Email Notifications"} />
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Notifications;
// MK
// import React from "react";
// import { View, SafeAreaView, ScrollView, Text, FlatList } from "react-native";
// import { Notificationtbn } from "../../../components/notificationbtn/Notificationtbn";
// import { Header, Notificationtbn } from "../../../components";
// import { noti1, noti2 } from "../../../constant/objects";
// import { noti1, noti2 } from "../../../constant";
// import { noti1, noti2 } from "../../../constant/objects";

// const Notification = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
//       <ScrollView>
//         <View style={{ width: "90%", alignSelf: "center" }}>
//           <Header press3={() => navigation.goBack()} header2={true} />
//           <View style={{ width: "90%", alignSelf: "center", marginTop: 60 }}>
//             <View>
//               <Text
//                 style={{ fontSize: 26, fontWeight: "bold", marginBottom: 15 }}
//               >
//                 New Deal
//               </Text>
//               <FlatList
//                 data={noti1}
//                 renderItem={(item) => {
//                   return (
//                     // <Notificationtbn/>
//                     <Notificationtbn
//                       title={item.item.title}
//                       stat={item.item.stat}
//                     />
//                   );
//                 }}
//               />
//             </View>

//             <View>
//               <Text
//                 style={{
//                   fontSize: 26,
//                   fontWeight: "bold",
//                   marginBottom: 15,
//                   marginTop: 30,
//                 }}
//               >
//                 Order Status Update
//               </Text>
//               <FlatList
//                 data={noti2}
//                 renderItem={(item) => {
//                   return (
//                     <Notificationtbn
//                       title={item.item.title}
//                       stat={item.item.stat}
//                     />
//                   );
//                 }}
//               />
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Notification;
import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Header, Notificationmsg } from "../../../components";
import { newnoti, oldnoti } from "../../../constant/objects";

// import { Header, Notificationmsg } from "../../../components";
// import { newnoti, oldnoti } from "../../../constant/objects";
const Notification = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header press3={() => navigation.goBack()} header2={true} />

          <View style={{ alignItems: "center", marginTop: 35 }}>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>
              Notifications
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              marginBottom: -15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              New Notification
            </Text>
            <View
              style={{ borderBottomWidth: 1, width: "100%", marginLeft: 5 }}
            ></View>
          </View>

          <View style={{ marginTop: 10 }}>
            <FlatList
              style={{ borderRadius: 20 }}
              data={newnoti}
              renderItem={({ item }) => (
                <Notificationmsg
                  title={item.title}
                  time={item.time}
                  image={item.image}
                />
              )}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              marginBottom: -15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Old Notification
            </Text>
            <View
              style={{ borderBottomWidth: 1, width: "100%", marginLeft: 5 }}
            ></View>
          </View>

          <View style={{ marginTop: 10 }}>
            <FlatList
              style={{ borderRadius: 20 }}
              data={oldnoti}
              renderItem={({ item }) => (
                <Notificationmsg
                  title={item.title}
                  time={item.time}
                  image={item.image}
                />
              )}
            />
          </View>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 15,
                marginTop: 10,
                fontSize: 16,
                fontWeight: "bold",
                color: "#1564EB",
              }}
            >
              View More..
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
