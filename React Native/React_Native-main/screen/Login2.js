import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Button, Alert, StatusBar } from 'react-native'

const Login2 = () => {
    let [password, setPassword] = useState("");
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#8d99ae" }}>
                <StatusBar backgroundColor={"#8d99ae"} />

                <View style={{ width: "85%", marginVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: "#14213d" }}>Login screen design no: <Text style={{ fontWeight: "bold", color: "#000" }}>02</Text></Text>
                    <Text style={{ color: "#14213d" }}>Created by: <Text style={{ color: "#000", fontWeight: "bold" }}>Shaykh Mirzaban</Text></Text>
                </View>

                <View style={{ width: "90%", padding: 10 }}>
                    <View>
                        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#14213d", paddingVertical: 20 }}>Login</Text>
                    </View>
                    <View>
                        <View>
                            <TextInput style={{ borderWidth: 2, borderStyle: "solid", borderColor: "#ccc", borderRadius: 5, padding: 10, fontSize: 17, color: "#14213d", marginVertical: 5 }} placeholder="Enter email" />

                            <TextInput style={{ borderWidth: 2, borderStyle: "solid", borderColor: "#ccc", borderRadius: 5, padding: 10, fontSize: 17, color: "#14213d", marginVertical: 5 }}
                                value={"*".repeat(password.length)}
                                placeholder="Enter password" onChangeText={(e) => setPassword(e)} />

                            <View style={{ marginVertical: 20 }}>
                                <Button onPress={() => { Alert.alert("Alert", "Successfully Login", [{ text: "OK" }]) }} color={"#14213d"} title="Login" />
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, }}>
                                Do you not yet have an account? {" "}
                                <Text style={{ color: "#14213d", fontWeight: "bold" }} onPress={() => { Alert.alert("Alert", "Sorry This page not working currently 😌", [{ text: "OK" }]) }}>Create Account</Text>
                            </Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const Style = StyleSheet.create({

});

export default Login2;