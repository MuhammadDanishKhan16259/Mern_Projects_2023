import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  Animated,
  Easing,
} from "react-native";

const Splash = ({ navigation }) => {
  let rotateValeHolder = new Animated.Value(0);
  const startRotationFuntion = () => {
    rotateValeHolder.setValue(0);
    Animated.timing(rotateValeHolder, {
      toValue: 70,
      duration: 6000,
      easing: Easing.circle,
      useNativeDriver: false,
    }).start(() => startRotationFuntion());
  };

  const RotateData = rotateValeHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    setTimeout(() => {
      startRotationFuntion();
      setTimeout(() => {
        navigation.replace("Login");
      }, 1000);
    }, 1000);
  }, []);

  // useEffect(() => {

  //   setInterval(() => {

  //       startRotationFuntion();
  //       setInterval(() => {
  //           navigation.navigate("Login");
  //         }, 2000);
  //     }, 1000);

  //   // setInterval(() => {
  //   //   navigation.navigate("Login");
  //   // }, 1000);
  // }, []);
  return (
    <ImageBackground
      // source={require("../../../assests/images/Splash.png")}
      source={require("../../../assets/images/Splash.png")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.splash}>
        <Animated.Image
          // source={require("../../../assests/images/logo.png")}
          source={require("../../../assets/images/logo.png")}
          style={{
            width: 224,
            height: 43,
            transform: [{ rotate: RotateData }],
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  splash: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Splash;

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   StyleSheet,
//   ImageBackground,
//   Dimensions,
//   Image,
// } from "react-native";
// const Splash = ({ navigation }) => {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.replace("Login");
//     }, 3000);
//   }, []);

//   return (
//     <ImageBackground
//       source={require("../../../assets/images/Splash.png")}
//       style={{
//         // width: Dimensions.get("screen").width,
//         // height: Dimensions.get("screen").height,
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <View style={styles.splash}>
//         <Image
//           source={require("../../../assets/images/Logo.png")}
//           style={{ width: 224, height: 43 }}
//         />
//       </View>
//     </ImageBackground>
//   );
// };
// const styles = StyleSheet.create({
//   splash: {
//     height: "100%",
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default Splash;
