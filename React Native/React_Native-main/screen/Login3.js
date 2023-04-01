import { Alert, ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native"

import Login3Css from "./styleComponent/Login3Css";
import H1 from "../components/heading/H1";
import { useState } from "react";

const Login3 = () => {
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
            <ScrollView contentContainerStyle={Login3Css.container}>
                <StatusBar backgroundColor={"#dda15e"} />
                <ImageBackground
                    fadeDuration={1000}
                    blurRadius={5}
                    style={Login3Css.image}
                    resizeMode="cover"
                    source={require("../images/bg1.webp")}
                >

                    <View style={Login3Css.form}>
                        <View style={{ marginVertical: 20 }}>
                            <H1 style={{ color: "#b87138" }}>Login</H1>
                        </View>

                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <TextInput
                                style={Login3Css.textArea}
                                placeholder="Enter your email"
                                value={email}
                                onChangeText={(e) => setEmail(e)}
                            />

                            <TextInput
                                style={Login3Css.textArea}
                                placeholder="Enter your password"
                                value={"*".repeat(password.length)}
                                onChangeText={(e) => setPassword(e)}
                            />

                            <TouchableOpacity onPress={displayFn} style={Login3Css.button}>
                                <Text style={{ fontSize: 20 }}>Login</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: 250, marginTop: 10 }}>
                            <Text style={{ fontSize: 14 }}>
                                Do you not yet have an account? {" "}
                                <Text style={{ color: "#b87138", fontWeight: "bold" }} onPress={callFn}>Create Account</Text>
                            </Text>
                        </View>

                        <View style={{ width: 250, marginTop: 20 }}>
                            <Text style={{ fontSize: 13 }}>Login screen design no: <Text style={{ fontWeight: "bold", color: "#b87138" }}>03</Text></Text>
                            <Text style={{ fontSize: 13 }}>Created by: <Text style={{ color: "#b87138", fontWeight: "bold" }}>Shaykh Mirzaban</Text></Text>
                        </View>
                    </View>

                </ImageBackground>
            </ScrollView>
        </SafeAreaView >
    )
};


export default Login3;