import { useState } from "react";
import { Alert, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import H1 from "../components/heading/H1";

function Login4() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const callFn = () => {
        Alert.alert("Alert", "Sorry This page not working currently 😌", [{ text: "OK" }])
    }

    const displayFn = () => {
        Alert.alert("Alert", `Successfully Login \n email: ${email} \n password: ${password}`, [{ text: "OK" }])
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ backgroundColor: "#efd2b1", width: "100%", minHeight: "100%" }}>
                <StatusBar backgroundColor={"#efd2b1"} barStyle="dark-content" />

                <View style={Styles.imageTop}>
                    <ImageBackground blurRadius={7} fadeDuration={1000} style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }} source={require("../images/login.jpg")}>
                        <View style={{ backgroundColor: "#eee", padding: 15, borderRadius: 10 }}>
                            <Text style={{ fontSize: 13 }}>Login screen design no: <Text style={{ fontWeight: "bold", color: "#de664c" }}>04</Text></Text>
                            <Text style={{ fontSize: 13 }}>Created by: <Text style={{ color: "#de664c", fontWeight: "bold" }}>Shaykh Mirzaban</Text></Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={{
                    width: "100%",
                    height: "100%",
                    borderTopRightRadius: 50, borderTopLeftRadius: 50,
                    backgroundColor: "#eee",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}>
                    <View style={{ marginTop: 10 }}>
                        <H1 style={{ fontSize: 25, color: "#de664c" }}>Login</H1>
                    </View>

                    <View>
                        <TextInput
                            value={email}
                            style={{
                                width: 250,
                                padding: 10,
                                borderBottomColor: "#f0c9ad",
                                borderBottomWidth: 2,
                                marginVertical: 5
                            }}
                            placeholder="Enter your email"
                            onChangeText={(e) => setEmail(e)}
                        />

                        <TextInput
                            style={{
                                width: 250,
                                padding: 10,
                                borderBottomColor: "#f0c9ad",
                                borderBottomWidth: 2,
                                marginVertical: 5
                            }}
                            placeholder="Enter your password"
                            value={"*".repeat(password.length)}
                            onChangeText={(e) => setPassword(e)}
                        />

                        <TouchableOpacity onPress={displayFn} style={{
                            width: 250, padding: 10, justifyContent: "center", alignItems: "center", backgroundColor: "#fc7c68",
                            borderRadius: 5,
                            marginTop: 10
                        }}>
                            <Text style={{ fontSize: 17, color: "#eeee", fontWeight: "bold" }}>Login</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ width: 250, marginTop: 10 }}>
                        <Text style={{ fontSize: 14 }}>
                            Do you not yet have an account? {" "}
                            <Text onPress={callFn} style={{ color: "#de664c", fontWeight: "bold" }}>Create Account</Text>
                        </Text>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
};


const Styles = StyleSheet.create({
    imageTop: {
        width: "100%",
        height: 250
    }
});

export default Login4;