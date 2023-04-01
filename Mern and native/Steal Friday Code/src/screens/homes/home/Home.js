import { LinearGradient } from "expo-linear-gradient";
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
import CountDown from "react-native-countdown-component";
import { Header, Product, Viewall, Products2 } from "../../../components";
import { product, product2, product3 } from "../../../constant/objects";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#F8F8F8" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header
            press2={() => navigation.navigate("Profilesetting")}
            press={() => navigation.openDrawer()}
            header1={true}
            press4={() => navigation.navigate("Notification")}
          />
          <View style={{ width: "100%" }}>
            <Image
              source={require("../../../assets/images/mask.png")}
              style={{
                width: 81,
                height: 41,
                alignItems: "center",
                alignSelf: "center",
              }}
            />
          </View>
          <LinearGradient
            colors={["#650E0D", "#CA1C1A"]}
            start={{ x: 0.1, y: 0.2 }}
            end={{ x: 0.8, y: 1 }}
            style={styles.timer}
          >
            {/* <CountDown
              separatorStyle={{}}
              style={{}}
              until={2000000}
              size={20}
              digitStyle={{ marginHorizontal: 20 }}
              digitTxtStyle={{ color: "white", fontSize: 28 }}
              timeLabelStyle={{ fontSize: 10, marginTop: -8 }}
              timeToShow={["D", "H", "M", "S"]}
              timeLabels={{ d: "Days", h: "Hours", m: "Minutes", s: "Seconds" }}
            /> */}
          </LinearGradient>

          <Viewall
            viewAllBtn
            text="Featured Deals"
            text2={"View All"}
            press={"Featureddeals"}
            marginTop={20}
            left={0}
          />
          {/* press={() => {
              navigation.navigate("Addtocart");
            }} */}
          <Product
            hori={true}
            product={product}
            marginTop={40}
            press={navigation}
          />

          <Viewall
            viewAllBtn
            text="Deal Categories"
            text2={"View All"}
            press={"Activedeals"}
            left={0}
            marginTop={30}
            // Press={"Login"}
          />

          <View style={{ marginTop: 20 }}>
            <Products2 product={product2} press={navigation} />
          </View>

          <Viewall
            press={"Activedeals"}
            viewAllBtn
            text="Active Deals"
            text2={"View All"}
            marginTop={0}
            left={0}
          />

          <Product
            press={navigation}
            hori={false}
            num={2}
            product={product3}
            marginbottom={15}
            marginTop={20}
          />
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
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timer: {
    width: "100%",
    height: 61,
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default Home;

// import {
//   SafeAreaView,
//   ScrollView,
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   Touchable,
//   TouchableOpacity,
// } from "react-native";
// import React from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import CountDown from "react-native-countdown-component";
// import { Header, Product, Viewall, Products2 } from "../../../components";
// // import { useNavigation } from '@react-navigation/native';
// // import Products2 from "../../../components/products2/Products2";

// const Home = ({ navigation }) => {
//   const product = [
//     {
//       tag: "Old",
//       price: "$15.00",
//       image: require("../../../assets/images/Shirt.png"),
//       title: "Gym T-shirt",
//       backcolor: "#00000029",
//       iconcolor: "#00000029",
//       // iconcolor: "#114C8A",
//     },
//     {
//       tag: "Old",
//       price: "$15.00",
//       image: require("../../../assets/images/Shoes.png"),
//       title: "Nike Collection",
//       backcolor: "#998BC8AD",

//       iconcolor: "#453B62",
//       // iconcolor: "#BFFB41",
//     },
//     {
//       tag: "New",
//       price: "$15.00",
//       image: require("../../../assets/images/Headphone.png"),
//       title: "Beats up HeadSet",
//       // backcolor: "#115794",
//       backcolor: "#114C8A",
//       // iconcolor: "#114C8A",
//       iconcolor: "#114C8A",
//     },
//     {
//       tag: "New",
//       price: "$15.00",
//       image: require("../../../assets/images/Shoes2.png"),
//       title: "Nike Collection",
//       backcolor: "#CDF37B",

//       iconcolor: "#BFFB41",
//     },
//     // {
//     //   tag: "Old",
//     //   price: "$15.00",
//     //   image: require("../../../assets/images/Airpods.png"),
//     //   title: "Apple Airpods",
//     //   backcolor: "#AF0010",
//     //   iconcolor: "##FF0000",
//     //   // iconcolor: "#114C8A",
//     // },
//     {
//       tag: "Old",
//       price: "$15.00",
//       image: require("../../../assets/images/Shirt1.png"),
//       title: "Gym T-shirt",
//       backcolor: "#00000029",
//       iconcolor: "#00000029",
//       // iconcolor: "#114C8A",
//     },
//   ];
//   const product2 = [
//     {
//       image: require("../../../assets/images/Headphone2.png"),
//       title: "Accessories",
//       total: "48 Product",
//     },
//     {
//       image: require("../../../assets/images/Shirt2.png"),
//       title: "Clothing",
//       total: "98 Product",
//     },
//     {
//       image: require("../../../assets/images/Shoes3.png"),
//       title: "Shoes",
//       total: "100 Product",
//     },
//   ];
//   const product3 = [
//     {
//       tag: "Old",
//       price: "$15.00",
//       image: require("../../../assets/images/Shirt.png"),
//       title: "Gym T-shirt",
//       backcolor: "#00000029",
//       iconcolor: "#00000029",
//       // iconcolor: "#114C8A",
//     },
//     {
//       tag: "Old",
//       price: "$15.00",
//       image: require("../../../assets/images/Shoes.png"),
//       title: "Nike Collection",
//       backcolor: "#998BC8AD",

//       iconcolor: "#453B62",
//       // iconcolor: "#BFFB41",
//     },
//     {
//       tag: "New",
//       price: "$15.00",
//       image: require("../../../assets/images/Headphone.png"),
//       title: "Beats up HeadSet",
//       // backcolor: "#115794",
//       backcolor: "#114C8A",
//       // iconcolor: "#114C8A",
//       iconcolor: "#114C8A",
//     },
//     {
//       tag: "New",
//       price: "$15.00",
//       image: require("../../../assets/images/Shoes2.png"),
//       title: "Nike Collection",
//       backcolor: "#CDF37B",

//       iconcolor: "#BFFB41",
//     },
//     {
//       tag: "Old",
//       price: "$15.00",
//       image: require("../../../assets/images/Airpods.png"),
//       title: "Apple Airpods",
//       backcolor: "#AF0010",
//       iconcolor: "##FF0000",
//       // iconcolor: "#114C8A",
//     },
//     {
//       tag: "Old",
//       price: "$15.00",
//       image: require("../../../assets/images/Shirt1.png"),
//       title: "Gym T-shirt",
//       backcolor: "#00000029",
//       iconcolor: "#00000029",
//       // iconcolor: "#114C8A",
//     },
//   ];

//   return (
//     <ScrollView>
//       <SafeAreaView style={{ flex: 1 }}>
//         <View style={{ width: "90%", alignSelf: "center" }}>
//           {/* <Text style={{ color: "black" }}>hommmmmeeeeeeeeeeeeeeeeee</Text> */}
//           <Header
//             press2={() => navigation.navigate("Profilesetting")}
//             press={() => navigation.openDrawer()}
//             header1={true}
//           />
//           <View style={{ width: "100%" }}>
//             <Image
//               // source={require("../../assets/images/hide.png")}
//               source={require("../../../assets/images/hide.png")}
//               style={{
//                 width: 91,
//                 height: 41,
//                 marginTop: 10,
//                 alignSelf: "center",
//                 // backgroundColor: "orange",
//               }}
//             />
//           </View>
//           <LinearGradient
//             colors={["#650E0D", "#CA1C1A"]}
//             start={{ x: 0.1, y: 0.2 }}
//             end={{ x: 0.8, y: 1 }}
//             style={styles.timer}
//           >
//             {/* <View style={{width:"90%",alignSelf: "center",flexDirection: "row",justifyContent: "space-between",alignItems:"center"}}>
//                 <View style={{alignItems:"center"}}>
//                   <Text style={{color: "white",fontSize: 28,fontWeight:"bold"}}>00</Text>
//                   <Text style={{color: "white",fontSize: 10, marginTop: -5}}>Days</Text>
//                 </View>
//                 <View style={{borderLeftWidth: 1,height: 40 ,borderLeftColor: "#030303"}}></View>
//                 <View style={{alignItems:"center"}}>
//                   <Text style={{color: "white",fontSize: 28,fontWeight:"bold"}}>14</Text>
//                   <Text style={{color: "white",fontSize: 10, marginTop: -5}}>Hours</Text>
//                 </View>
//                 <View style={{borderLeftWidth: 1,height: 40, borderLeftColor: "#030303"}}></View>
//                 <View style={{alignItems:"center"}}>
//                   <Text style={{color: "white",fontSize: 28,fontWeight:"bold"}}>30</Text>
//                   <Text style={{color: "white",fontSize: 10, marginTop: -5}}>Minutes</Text>
//                 </View>
//                 <View style={{borderLeftWidth: 1,height: 40, borderLeftColor: "#030303"}}></View>
//                 <View style={{alignItems:"center"}}>
//                   <Text style={{color: "white",fontSize: 28,fontWeight:"bold"}}>09</Text>
//                   <Text style={{color: "white",fontSize: 10, marginTop: -5}}>Seconds</Text>
//                 </View>
//               </View>
//            */}
//             {/* onFinish={() => alert("Finished")} */}
//             {/* separatorStyle={{ marginTop: 20 }} */}
//             <CountDown
//               style={{}}
//               until={2000000}
//               size={20}
//               digitStyle={{ borderRightWidth: 1 }}
//               digitTxtStyle={{ color: "white", fontSize: 28 }}
//               timeLabelStyle={{ fontsize: 10, marginTop: -5 }}
//               timeToShow={["D", "H", "M", "S"]}
//               timeLabels={{
//                 d: "Days",
//                 h: "Hours",
//                 m: "Minutes",
//                 s: "Seconds",
//               }}
//             />
//           </LinearGradient>
//           {/*
//           <Viewall
//             title={"Feature Deals"}
//             viewall={"View All"}
//             marginTop={15}
//           /> */}
//           {/* <Viewall
//             title={"Featured Deals"}
//             viewall={"View All"}
//             marginTop={15}
//           /> */}
//           <Viewall
//             viewAllBtn
//             text="Featured Deals"
//             text2={"View All"}
//             marginTop={25}
//             left={0}
//           />
//           <Product hori={true} product={product} marginTop={20} />
//           <Viewall
//             viewAllBtn
//             text="Deal Categories"
//             text2={"View All"}
//             marginTop={30}
//             left={0}
//           />
//           {/* <Viewall
//             title={"Deal Categories"}
//             viewall={"View All"}
//             marginTop={20}
//           /> */}
//           {/* <Viewall viewAllBtn text="helo"  title={"Deal Categories"} viewall={"View All"} marginTop={25}  /> */}
//           <View style={{ marginTop: 20 }}>
//             {/* <Products2 products2={products2} marginTop={40} /> */}
//             <Products2 product={product2} />
//           </View>
//           <Viewall
//             viewAllBtn
//             text="Active Deals"
//             text2={"View All"}
//             marginTop={20}
//             left={0}
//           />
//           {/* <Product
//             hori={false}
//             num={2}
//             product={product}
//             marginTop={20}
//             marginBottom={15}
//           /> */}
//           <Product
//             hori={false}
//             num={2}
//             product={product3}
//             marginTop={20}
//             marginBottom={15}
//           />
//           <TouchableOpacity>
//             <Text
//               style={{
//                 textAlign: "center",
//                 paddingBottom: 15,
//                 marginTop: 10,
//                 fontWeight: "bold",
//                 color: "#1564EB",
//               }}
//             >
//               View More..
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   timer: {
//     width: "100%",
//     height: 60,
//     // backgroundColor: "#AF0010",
//     borderRadius: 18,
//     marginTop: 10,
//     justifyContent: "space-between",
//   },
// });
// export default Home;
