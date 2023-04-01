import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import Home from "../screens/homes/home/Home";
// import Login from "../screens/auth/login/Login";
import { FlatList, Text } from "react-native";
import Customdrawer from "../components/customdrawer/Customdrawer";
import Home from "../screens/homes/home/Home";
import { Homes } from "./Mystack";
const Homee = () => {
  return <Text>heelo</Text>;
};
const About = () => {
  return <Text>heelo</Text>;
};
const Mydrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "transparent", flex: 1 },
      }}
      drawerContent={(props) => <Customdrawer {...props} />}
    >
      <Drawer.Screen
        name="Homes"
        component={Homes}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen name="About" component={About} /> */}
    </Drawer.Navigator>
  );
};
export default Mydrawer;
// import React from "react";
// import { Text, View } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// // import Home from "../screens/homes/home/Home";
// // import Login from "../screens/auth/login/Login";
// const Home = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: "red",
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Home Screen</Text>
//     </View>
//   );
// };
// const About = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: "blue",
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>About Screen</Text>
//     </View>
//   );
// };

// const Mydrawer = () => {
//   const Drawer = createDrawerNavigator();
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="About" component={About} />
//     </Drawer.Navigator>
//   );
// };

// export default Mydrawer;
