import { SafeAreaView, ScrollView } from "react-native";

// components
import Login1 from "./screen/Login1";
import Login2 from "./screen/Login2";
import Login3 from "./screen/Login3";
import Login4 from "./screen/Login4";
import Login5 from "./screen/Login5";
import Todo from "./screen/Todo";


const App = () => {
  return (
    <>
      {/* <Login1 /> */}
      {/* < Login2 /> */}
      {/* < Login3 /> */}
      {/* <Login4 /> */}
      {/* <Login5 /> */}
      <Todo />
    </>
  )
};

export default App;




























// import { useCallback, useState } from "react";
// const { SafeAreaView, ScrollView, Text, RefreshControl, TouchableOpacity, Image, Button, TouchableHighlight, View, Alert, Platform, StatusBar, Dimensions } = require("react-native")


// const wait = (waiting) => {
//   return new Promise(resolve => setTimeout(resolve, waiting));
// }

// const App = () => {
//   let [flag, setFlag] = useState(false);
//   console.log(Platform.OS === "android");
//   console.log(StatusBar.currentHeight);
//   console.log(Dimensions.get("screen"));
//   // console.log(useDimensions().screen);

//   const onRefresh = useCallback(() => {
//     setFlag(true);
//     wait(2000).then(() => setFlag(false));
//   }, []);

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView
//         refreshControl={
//           <RefreshControl
//             refreshing={flag}
//             onRefresh={onRefresh}
//           />
//         }
//       >
//         <Text>What are you doing?</Text>

//         <TouchableOpacity style={{ backgroundColor: "#ccc", flex: 1, padding: 10 }}
//           onPress={() => alert("welcome")}
//         >
//           <Text>Welcome</Text>
//         </TouchableOpacity>

//         <Image
//           blurRadius={0}
//           fadeDuration={1000}
//           source={
//             {
//               width: 200,
//               height: 350,
//               uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
//             }
//           }
//         />
//         <Button title={"Click me"} onPress={() => alert("welcome")} />
//         <TouchableHighlight onPress={() => Alert.prompt("wwelcom", "asdsad", (text) => console.log(text))}>
//           <View style={{ flex: 1, backgroundColor: "#ccc", padding: 10 }}>
//             <Text style={{ color: "#eee" }}>Click me</Text>
//           </View>
//         </TouchableHighlight>
//       </ScrollView>
//     </SafeAreaView>
//   )
// };


// export default App;



