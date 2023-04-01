import { useState } from "react";
import { Alert, ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";

function Login5() {
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
            <ScrollView contentContainerStyle={{ width: "100%", height: "100%" }}>
                <StatusBar backgroundColor={"#000"} />
                <ImageBackground
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    source={require("../images/login1.jpg")}>

                    <View style={{ backgroundColor: "#d9d9d9c9", padding: 15, borderRadius: 10, width: "85%", marginVertical: 10 }}>

                        <Text
                            style={{ fontSize: 13 }}>
                            Login screen design no:
                            <Text
                                style={{ fontWeight: "bold", color: "#a2535e" }}> {" "}
                                05
                            </Text>
                        </Text>

                        <Text
                            style={{ fontSize: 13 }}>
                            Created by:
                            <Text
                                style={{ color: "#a2535e", fontWeight: "bold" }}> {" "}
                                Shaykh Mirzaban
                            </Text>
                        </Text>

                    </View>

                    <View style={{ backgroundColor: "#d9d9d9c9", padding: 15, borderRadius: 10 }}>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 30, color: "#a2535e", fontWeight: "bold" }}>Login</Text>
                        </View>
                        <View>
                            <TextInput placeholder="Email ID"
                                style={{
                                    backgroundColor: "#c9b7b4b0",
                                    padding: 10,
                                    fontSize: 16,
                                    borderRadius: 5,
                                    marginVertical: 5,
                                    borderStyle: "solid",
                                    borderColor: "#a2535ecc",
                                    borderWidth: 2
                                }}
                                value={email}
                                onChangeText={(e) => setEmail(e)}

                            />
                            <TextInput placeholder="Password"
                                style={{
                                    backgroundColor: "#c9b7b4b0",
                                    padding: 10,
                                    fontSize: 16,
                                    borderRadius: 5,
                                    marginVertical: 5,
                                    borderStyle: "solid",
                                    borderColor: "#a2535ecc",
                                    borderWidth: 2
                                }}
                                value={"*".repeat(password.length)}
                                onChangeText={(e) => setPassword(e)}
                            />

                            <Text style={{ fontSize: 13, color: "#000", paddingVertical: 5 }}>Forgot Password?</Text>

                            <TouchableOpacity onPress={displayFn} style={{ width: "100%", height: 45, justifyContent: "center", alignItems: "center", backgroundColor: "#a2535e", borderRadius: 10, marginVertical: 10 }}>
                                <Text style={{ color: "#eee", fontSize: 17 }}>
                                    Login
                                </Text>
                            </TouchableOpacity >
                            <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                                <Text>OR</Text>
                            </View>

                            <TouchableOpacity onPress={callFn} style={{ width: "100%", height: 45, justifyContent: "center", alignItems: "center", backgroundColor: "#eee", borderRadius: 10, marginVertical: 10 }}>
                                <Text style={{ color: "#a2535e", fontSize: 15 }}>
                                    Login with Google
                                </Text>
                            </TouchableOpacity>


                            <View style={{ padding: 10 }}>
                                <Text>
                                    Do you not yet have an account? {" "}
                                    <Text onPress={callFn} style={{ color: "#a2535e", fontSize: 15, fontWeight: "bold" }}>Create Account</Text>
                                </Text>
                            </View>
                        </View>
                    </View>

                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
};



export default Login5;