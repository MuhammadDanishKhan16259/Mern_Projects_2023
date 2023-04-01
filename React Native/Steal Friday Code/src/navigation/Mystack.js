import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Splash from "../screens/auth/splash/Splash";
import Login from "../screens/auth/login/Login";
import Splash from "../screens/auth/Splash/Splash";
import Signup from "../screens/auth/signup/Signup";
import Payment from "../screens/auth/payment/Payment";
import Home from "../screens/homes/home/Home";
import Mydrawer from "./Mydrawer";
// import Profilesetting from "../screens/homes/home/profilesetting/Profilesetting";
// import Profile from "../screens/homes/home/profilesetting/Profile";
// import Notifications from "../screens/homes/home/profilesetting/Notifications";
// import Changepassword from "../screens/homes/home/profilesetting/Changepassword";
// import Termscondition from "../screens/homes/home/profilesetting/termscondition/Termscondition";
// import PrivacyPolicy from "../screens/homes/home/profilesetting/privacypolicy/PrivacyPolicy";
import Profilesetting from "../screens/profileoption/profilesetting/Profilesetting";

import Changepassword from "../screens/profileoption/changepassword/Changepassword";
import Termscondition from "../screens/profileoption/termscondition/Termscondition";

import Myprofile from "../screens/profileoption/myprofile/MyProfile";
import Notification from "../screens/profileoption/notification/Notification";
import Privacypolicy from "../screens/profileoption/privacypolicy/Privacypolicy";
import Notificationsetting from "../screens/notificationsetting/Notificationsetting";
import Addtocart from "../screens/products/addtocart/Addtocart";
import Featureddeals from "../screens/products/featureddeals/Featureddeals";
import Activedeals from "../screens/products/activedeals/Activedeals";
import Categories from "../screens/products/categories/Categories";
// import Addtocart from "../screens/products/addtocart/Addtocart";
// import Featureddeals from "../screens/products/featureddeals/Featureddeals";

const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notificationsetting"
        component={Notificationsetting}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profilesetting"
        component={Profilesetting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Myprofile"
        component={Myprofile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Changepassword"
        component={Changepassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Termscondition"
        component={Termscondition}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Privacypolicy"
        component={Privacypolicy}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Addtocart"
        component={Addtocart}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Featureddeals"
        component={Featureddeals}
        options={{ headerShown: false }}
      /> */}

      {/* <Stack.Screen
        name="Featureddeals"
        component={Featureddeals}
        options={{ headerShown: false }}
      /> */}

      {/* <Stack.Screen
        name="FeaturedDeals"
        component={FeaturedDeals}
        options={{ headerShown: false }}
      /> */}

      {/* <Stack.Screen
        name="profiles"
        component={Profiles}
        options={{ headerShown: false }}
      /> */}

      {/* Profile */}
      {/* <Stack.Screen
        name="Mydrawer"
        component={Mydrawer}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
  //   <Stack.Screen
  //   name="Splash"
  //   component={Splash}
  //   options={{ headerShown: false }}
  // />
  // export const Homes = () => {
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="Home1"
  //         component={Login}
  //         options={{ headerShown: false }}
  //       />
  //     </Stack.Navigator>
  //   );
};

export const Products = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Addtocart"
        component={Addtocart}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Featureddeals"
        component={Featureddeals}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Activedeals"
        component={Activedeals}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Mydrawer"
          component={Mydrawer}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Homes"
          component={Homes}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Mydrawer"
          component={Mydrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
