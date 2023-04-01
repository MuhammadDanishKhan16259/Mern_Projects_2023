import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Header = ({
  header1,
  press,
  press2,
  header2,
  press3,
  height,
  width,
  press4,
  filter,
  filteropen,
  one,
}) => {
  return (
    <>
      {header1 && (
        <View style={styles.top}>
          <View
            style={{
              width: "100%",
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ alignSelf: "flex-start", width: "10%" }}>
              <TouchableOpacity onPress={press}>
                <Image
                  source={require("../../assets/images/menu.png")}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", width: "80%" }}>
              <Image
                source={require("../../assets/images/logo2.png")}
                style={{ width: 120, height: 30 }}
              />
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>By</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "flex-end",
                width: "10%",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity onPress={press4}>
                <Image
                  source={require("../../assets/images/notif.png")}
                  style={{ width: 16, height: 24, marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={press2}>
                <Image
                  source={require("../../assets/images/profile.png")}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {header2 && (
        <View
          style={{
            flexDirection: "row",
            marginTop: 50,
            width: "100%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 42,
              width: 42,
              borderRadius: 21,
              backgroundColor: "#00000029",
              opacity: 0.6,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: 0,
            }}
          >
            <TouchableOpacity onPress={press3}>
              <Image
                source={require("../../assets/images/leftarrow.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../assets/images/logo2.png")}
            style={{ width: width ? width : 140, height: height ? height : 35 }}
          />
          {filter ? (
            <TouchableOpacity
              onPress={filteropen}
              style={{ position: "absolute", right: 0, top: 10 }}
            >
              <LinearGradient
                colors={["#650E0D", "#CA1C1A"]}
                start={{ x: 0.1, y: 0.2 }}
                end={{ x: 0.8, y: 1 }}
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  right: 0,
                  top: 10,
                }}
              >
                <Image
                  source={
                    one
                      ? require("../../assets/images/filter2.png")
                      : require("../../assets/images/filter.png")
                  }
                  style={{ width: 14, height: 12 }}
                />
              </LinearGradient>
            </TouchableOpacity>
          ) : null}
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    marginTop: 40,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export { Header };

// import React from "react";
// import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { Images } from "../../constant/image";
// // import { TouchableOpacity } from "react-native-gesture-handler";
// const Header = ({
//   header1,
//   press,
//   press2,
//   header2,
//   press3,
//   press4,
//   press5,
// }) => {
//   return (
//     <>
//       {header1 && (
//         <View style={styles.top}>
//           <View
//             style={{
//               width: "100%",
//               alignItems: "center",
//               justifyContent: "space-between",
//               flexDirection: "row",
//               //   backgroundColor: "red",
//             }}
//           >
//             <View
//               style={{
//                 alignSelf: "flex-start",
//                 width: "10%",
//                 // backgroundColor: "yellow",
//               }}
//             >
//               <TouchableOpacity onPress={press}>
//                 <Image
//                   source={require("../../assets/images/menu.png")}
//                   style={{ width: 45, height: 45 }}
//                 />
//               </TouchableOpacity>
//             </View>

//             {/* <View style={{ alignItems: "center", backgroundColor: "green",width: }}> */}
//             <View
//               style={{
//                 // alignSelf: "flex-start",
//                 width: "80%",
//                 // backgroundColor: "grey",
//                 // justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Image
//                 // source={Images.backgroundimage.background1}
//                 source={require("../../assets/images/logo2.png")}
//                 style={{ width: 120, height: 30 }}
//               />
//               <Text style={{ fontSize: 12, fontWeight: "bold" }}>By</Text>
//             </View>

//             <View
//               style={{
//                 alignSelf: "flex-start",
//                 width: "10%",
//                 // backgroundColor: "blue",
//                 justifyContent: "flex-end",
//                 alignItems: "center",
//                 flexDirection: "row",
//               }}
//             >
//               {/* <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 backgroundColor: "blue",
//               }}
//             > */}
//               <TouchableOpacity onPress={press4}>
//                 <Image
//                   source={require("../../assets/images/notif.png")}
//                   style={{ width: 16, height: 24, marginRight: 10 }}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={press2}>
//                 <Image
//                   source={require("../../assets/images/profile.png")}
//                   style={{ width: 45, height: 45 }}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       )}
//       {header2 && (
//         <View
//           style={{
//             // justifyContent: "center",
//             // flexDirection: "row",
//             // marginTop: 40,
//             // width: "100%",
//             // justifyContent: "space-between",
//             // alignItems: "center",
//             flexDirection: "row",
//             marginTop: 40,
//             width: "100%",
//             alignItems: "center",
//             justifyContent: "center",
//             // justifyContent: "space-between",
//           }}
//         >
//           <View
//             style={{
//               // flexDirection:"row",
//               // marginTop:40,
//               // width:"100%",
//               // alignItems:"center",
//               // justifyContent:"center",
//               height: 42,
//               width: 42,
//               borderRadius: 21,
//               // backgroundColor: "#00000029",
//               alignItems: "center",
//               position: "absolute",
//               backgroundColor: "#00000029",
//               borderRadius: 21,
//               left: 0,
//               // elevation: 10,
//               // opacity: 0.6,
//             }}
//           >
//             <TouchableOpacity onPress={press3}>
//               <Image
//                 source={require("../../assets/images/leftarrow.png")}
//                 style={{
//                   height: 24,
//                   width: 24,
//                   marginTop: 10,

//                   opacity: 0.6,
//                   // borderRadius: 41,
//                 }}
//               />
//             </TouchableOpacity>
//           </View>
//           {/* <View style={{ alignItems: "center", width: "90%" }}> */}
//           <Image
//             source={require("../../assets/images/logo2.png")}
//             style={{
//               width: 140,
//               height: 35,
//               alignItems: "center",
//               justifyContent: "center",
//               alignSelf: "center",
//             }}
//           />

//           <View
//             style={{
//               flexDirection: "row",
//               marginTop: 10,
//               alignItems: "center",
//             }}
//           >
//             <TouchableOpacity onPress={press5}>
//               <Image
//                 source={require("../../assets/images/filter.png")}
//                 style={{ width: 45, height: 45, backgroundColor: "red" }}
//               />
//             </TouchableOpacity>
//           </View>
//           {/* </View> */}
//         </View>
//       )}
//     </>
//   );
// };
// const styles = StyleSheet.create({
//   top: {
//     flexDirection: "row",
//     marginTop: 40,
//     width: "100%",
//     justifyContent: "space-between",
//     alignItems: "center",
//     // backgroundColor: "pink",
//     // textAlign: "center",
//     // alignSelf: "center",
//     // marginTop: 50,
//     // marginEnd: 80,
//   },
// });
// export { Header };
