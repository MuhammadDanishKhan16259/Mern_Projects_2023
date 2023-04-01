import React from "react";
import {
  ImageBackground,
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
const Customdrawer = ({ navigation }) => {
  const sidebar = [
    {
      title: "Home",
      image: require("../../assets/images/home.png"),
      Change: "Home",
      //   close: "closeDrawer()",
    },
    {
      title: "Settings",
      image: require("../../assets/images/user2.png"),
      Change: "Profilesetting",
    },
    {
      title: "Subcription",
      // image: require("../../assets/images/subs.png"),
      image: require("../../assets/images/subs.png"),
    },
    {
      title: "Favorites",
      image: require("../../assets/images/favo.png"),
    },
    {
      title: "Cart",
      image: require("../../assets/images/cart.png"),
    },
    {
      title: "My Orders",
      image: require("../../assets/images/order.png"),
    },
    {
      title: "Contact us",
      image: require("../../assets/images/contact.png"),
    },
    {
      title: "Logout",
      image: require("../../assets/images/logout.png"),
    },
  ];
  return (
    <ImageBackground
      source={require("../../assets/images/drawe3.png")}
      style={{ height: "100%", width: "100%" }}
      resizeMode={"stretch"}
    >
      <View style={{ width: "75%", alignSelf: "center", marginTop: 70 }}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 180, height: 30 }}
        />
        <View style={{ marginTop: 90 }}>
          <FlatList
            data={sidebar}
            renderItem={(item) => {
              // onPress={() => navigation.closeDrawer()}
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(item.item.Change);
                  }}
                >
                  <View style={{ flexDirection: "row", marginBottom: 23 }}>
                    <Image
                      source={item.item.image}
                      style={{ width: 20, height: 22, marginRight: 13 }}
                    />
                    <Text style={{ color: "white", fontSize: 16 }}>
                      {item.item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default Customdrawer;
