import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const Product = ({ product, marginTop, hori, num, marginBottom, press }) => {
  return (
    <View style={{ marginTop: marginTop }}>
      <FlatList
        data={product}
        showsHorizontalScrollIndicator={false}
        // horizontal={true}
        horizontal={hori}
        numColumns={num}
        renderItem={(items) => {
          return (
            <TouchableOpacity
              onPress={() =>
                press.navigate("Products", {
                  screen: "Addtocart",
                  params: {
                    image: items.item.image,
                    productname: items.item.title,
                    price: items.item.price,
                    tag: items.item.tag,
                  },
                })
              }
            >
              <View
                style={{
                  marginRight: 15,
                  alignItems: "center",
                  marginBottom: marginBottom,
                }}
              >
                <View
                  style={[
                    styles.productback,
                    { backgroundColor: items.item.backcolor },
                  ]}
                >
                  <View style={{ width: "80%", alignSelf: "center" }}>
                    <View style={styles.topitem}>
                      <View
                        style={[
                          styles.tag,
                          { backgroundColor: items.item.backcolor },
                        ]}
                      >
                        <Text>{items.item.tag}</Text>
                      </View>
                      <View
                        style={{
                          height: 30,
                          width: 30,
                          borderRadius: 15,
                          backgroundColor: "white",
                          opacity: 0.7,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AntDesign
                          name="star"
                          color={items.item.iconcolor}
                          size={22}
                        />
                      </View>
                    </View>
                  </View>
                  {/* <TouchableOpacity onPress={press}> */}
                  <View
                    style={{
                      // margin: 2,
                      // paddingHorizontal:10,
                      width: "90%",
                      alignSelf: "center",
                      flexDirection: "row",
                      marginTop: 10,
                      // justifyContent:'space-around',
                      // alignItems: "center",
                      // justifyContent: "center",
                    }}
                  >
                    <View style={{ marginVertical: 30, marginTop: 40 }}>
                      <Text
                        style={{
                          fontSize: 22,
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        {items.item.price}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 110,
                        height: 110,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ width: "80%", height: "80%", marginRight: 20 }}
                        resizeMode="contain"
                        source={items.item.image}
                      />
                    </View>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    // fontWeight: "bold",
                    // color: "red",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  {items.item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  productback: {
    width: 155,
    height: 160,
    borderRadius: 30,
    opacity: 8,
  },
  topitem: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tag: {
    width: 45,
    height: 18,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
  },
});
export { Product };
//my
{
  /* <View>
<Text
  style={{
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
    marginTop: 80,
  
  }}
>
  {items.item.title}
</Text>
</View> */
}

// import React from "react";
// import { FlatList, Text, View, StyleSheet, Image } from "react-native";
// import AntDesign from "@expo/vector-icons/AntDesign";
// const Product = ({ product, marginTop }) => {
//   return (
//     <View style={{ marginTop: marginTop }}>
//       <FlatList
//         data={product}
//         showsHorizontalScrollIndicator={false}
//         horizontal={true}
//         renderItem={(items) => {
//           return (
//             <View style={{ marginRight: 15 }}>
//               <View
//                 style={[
//                   styles.productback,
//                   { backgroundColor: items.item.backcolor },
//                 ]}
//               >
//                 <View style={{ width: "80%", alignSelf: "center" }}>
//                   <View style={styles.topitem}>
//                     <View
//                       style={[
//                         styles.tag,
//                         { backgroundColor: items.item.backcolor },
//                       ]}
//                     >
//                       <Text>{items.item.tag}</Text>
//                     </View>
//                     <View
//                       style={{
//                         height: 30,
//                         width: 30,
//                         borderRadius: 15,
//                         backgroundColor: "white",
//                         opacity: 0.7,
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <AntDesign
//                         name="star"
//                         size={22}
//                         color={items.item.iconcolor}
//                       />
//                     </View>
//                   </View>
//                 </View>
//                 <View
//                   style={{
//                     margin: 2,
//                     flexDirection: "row",
//                     justifyContent: "space-around",
//                     alignItems: "center",
//                     alignSelf: "center",
//                     // backgroundColor: "red",
//                     width: "90%",
//                     marginTop: 10,
//                   }}
//                 >
//                   <View style={{ marginVertical: 30, marginTop: 30 }}>
//                     <Text
//                       style={{
//                         fontSize: 22,
//                         fontWeight: "bold",
//                         textAlign: "left",
//                       }}
//                     >
//                       {items.item.price}
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       width: 110,
//                       height: 110,

//                       // width: "100%",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       //   backgroundColor: "blue",
//                     }}
//                   >
//                     <Image
//                       style={{ width: "80%", height: "80%", marginRight: 5 }}
//                       resizeMode="contain"
//                       source={items.item.image}
//                     />
//                   </View>
//                 </View>
//               </View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   productback: {
//     width: 165,
//     height: 185,
//     borderRadius: 30,
//     opacity: 0.5,
//   },
//   topitem: {
//     marginTop: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//   },

//   tag: {
//     width: 40,
//     height: 17,
//     // backgroundColor: items.item.backcolor,
//     borderRadius: 30,
//     alignItems: "center",
//     justifyContent: "center",
//     opacity: 0.6,
//     //                         // marginTop: 10,
//   },
// });
// export { Product };
