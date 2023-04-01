import { useState } from "react";
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function Login1() {
    let [flag, setFlag] = useState(false);
    let [success, setSuccess] = useState(false);
    let [password, setPassword] = useState("");

    const displayFn = () => {
        setFlag(true)
    }
    const hideFn = () => {
        setFlag(false);
        setSuccess(false);
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={Styles.container}>
                <StatusBar backgroundColor={"#eee"} barStyle={"dark-content"} />

                <View style={{ width: "90%", marginVertical: 20 }}>
                    <Text style={{ fontSize: 16, color: "#333" }}>Login screen design no: <Text style={{ fontWeight: "bold", color: "#000" }}>01</Text></Text>
                    <Text style={{ color: "#333" }}>Created by: <Text style={{ color: "#000", fontWeight: "bold" }}>Shaykh Mirzaban</Text></Text>
                </View>


                <View style={Styles.box}>
                    <View style={Styles.heading}>
                        <Text style={Styles.headingText}>Login</Text>
                    </View>
                    <View style={Styles.form}>
                        <View style={Styles.topPart}>
                            <TextInput style={Styles.inputArea} placeholder="Enter email" />

                            <TextInput style={Styles.inputArea}
                                value={"*".repeat(password.length)}
                                placeholder="Enter password" onChangeText={(e) => setPassword(e)} />

                            <View style={Styles.button}>
                                <Button onPress={() => { setSuccess(true); setFlag(true); }} color={"#14213d"} title="Login" />
                            </View>
                        </View>
                        <View style={Styles.bottom}>
                            <Text Style={Styles.textStyle}>
                                Do you not yet have an account? {" "}
                                <Text onPress={displayFn} style={Styles.specialLink}>Create Account</Text>
                            </Text>
                        </View>
                    </View>
                </View>

                {
                    flag &&
                    <View style={{ position: "absolute", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", backgroundColor: flag ? "#1c1d1ecc" : "" }}>
                        <View style={Styles.error}>

                            {
                                success ? <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: 25, color: "green" }}>Login Successfully</Text>
                                </View> :
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 35, color: "red" }}>404</Text>
                                        <Text style={{ fontSize: 20, color: "red" }}>Error</Text>
                                    </View>
                            }

                            <View>
                                <TouchableOpacity onPress={hideFn} style={Styles.closeBtn}>
                                    <Text style={{ color: "#eee", fontSize: 18 }}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }

            </ScrollView>
        </SafeAreaView>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#edede9",
    },
    box: {
        width: "90%",
        padding: 15,
        backgroundColor: "#8d99ae",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        width: "100%",
        backgroundColor: "#edf2f4",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
    },
    headingText: {
        fontSize: 25,
        color: "#333",
        fontWeight: "bold"
    },
    form: {
        width: "100%",
        heihgt: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#edf2f4",
        marginVertical: 10,
        borderRadius: 10,
        padding: 10
    },
    topPart: {
        marginVertical: 10,
        backgroundColor: "#8d99ae",
        width: "100%",
        borderRadius: 10,
        padding: 10
    },
    inputArea: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        fontSize: 17,
        borderRadius: 5,
        marginVertical: 5,
    },
    button: {
        marginTop: 10,
        marginBottom: 5,
    },
    bottom: {
        marginVertical: 10
    },
    textStyle: {
        textAlign: "center",
        fontSize: 15
    },
    specialLink: {
        color: "#14213d",
        textDecorationStyle: "solid",
        textDecorationColor: "#14213d",
        textDecorationLine: "underline",
        fontWeight: "bold"
    },
    error: {
        width: "90%",
        height: 300,
        borderRadius: 10,
        backgroundColor: "#ccc",
        zIndex: 12222,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    closeBtn: { width: 200, height: 40, backgroundColor: "#000", justifyContent: "center", alignItems: "center", borderRadius: 10, margin: 20, height: 40 }
});

export default Login1;