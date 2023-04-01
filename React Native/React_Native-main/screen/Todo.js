import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function Todo() {
    let [item, setItem] = useState("");
    let [data, setData] = useState([]);
    let [currentV, setCurrentV] = useState("");
    let [id, setId] = useState(0);
    let [flag, setFlag] = useState(false);

    const addItem = () => {
        setData((val) => [...val, item]);
        setItem('');
    }

    const deleteItem = (e) => {
        setData(val => val.filter((value, index) => index !== e));
    }

    const updateItem = (val, ind) => {
        setFlag(true);
        setId(ind);
        setCurrentV(val);
    }

    const replaceItem = () => {
        setData((val) => val.map((value, index) => {
            if (index === id) {
                return value = currentV;
            } else {
                return value;
            }
        }));
        setFlag(false);
    }

    const deleteAllItem = () => {
        setData([]);
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{
                width: "100%", justifyContent: "flex-start", alignItems: "flex-start",
                minHeight: "100%",
                backgroundColor: "#3d405b"
            }}>

                <StatusBar backgroundColor={"#333"} />

                {
                    flag !== true &&
                    <View style={{ width: "100%" }}>

                        <View style={{
                            backgroundColor: "#001d3d",
                            width: "100%",
                            height: 45,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                fontSize: 25,
                                color: "#eee"
                            }}>Todo</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                            <TextInput placeholder="Add Item" style={Styles.textInputDesign} value={item} onChangeText={(e) => { setItem(e) }} />

                            <TouchableOpacity style={Styles.addButton} onPress={addItem}>

                                <Text style={{
                                    fontSize: 20,
                                    color: "#ffc300"
                                }}
                                >Add</Text>

                            </TouchableOpacity>
                        </View>

                        <View style={Styles.boxes}>
                            {
                                data && data.length > 0 &&
                                data.map((value, index) => {
                                    return (
                                        <View style={Styles.boxChild} key={index}>
                                            <Text style={Styles.boxChildText}>
                                                {value}
                                            </Text>

                                            <View style={{ flexDirection: "row" }}>
                                                <TouchableOpacity onPress={() => deleteItem(index)} style={Styles.button}>
                                                    <Text style={[Styles.buttonText, { color: "#d00000" }]}>Delete</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity onPress={() => { updateItem(value, index) }} style={Styles.button}>
                                                    <Text style={[Styles.buttonText, { color: "#7209b7" }]}>Update</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                })
                            }

                        </View>
                    </View>
                }

                {
                    flag === true && <View style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "90%", height: 300, justifyContent: "center", alignItems: "center", backgroundColor: "#ccc", borderRadius: 15 }}>

                            <TextInput style={{ width: "90%", padding: 15, backgroundColor: "#eee", borderRadius: 5, marginVertical: 20, fontSize: 17 }} value={currentV} onChangeText={(e) => setCurrentV(e)} placeholder="replaceItem" />

                            <TouchableOpacity style={Styles.addButton} onPress={replaceItem}>

                                <Text style={{
                                    fontSize: 20,
                                    color: "#eee"
                                }}
                                >Replace</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                }

                {
                    flag !== true && data.length > 3 &&
                    <TouchableOpacity style={[Styles.addButton, { width: 150, marginLeft: 20, marginVertical: 10 }]} onPress={deleteAllItem}>

                        <Text style={{
                            fontSize: 16,
                            color: "#ffc300"
                        }}
                        >Delete ALL Item</Text>

                    </TouchableOpacity>
                }

                {/* <View>
                    <Text>
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                        asdsadasdsadsadsadsadasdsadsd
                    </Text>
                </View> */}
            </ScrollView>
        </SafeAreaView>
    )
};


const Styles = StyleSheet.create({
    boxes: { width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center", marginVertical: 10 },
    boxChild: { width: "90%", backgroundColor: "#001d3d", borderRadius: 10, padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginVertical: 5 },
    boxChildText: { color: "#eee", fontSize: 17 },
    button: {
        width: 80, height: 35, backgroundColor: "#eee", justifyContent: "center", alignItems: "center", borderRadius: 5, margin: 7
    },
    buttonText: { fontSize: 16, color: "#000" },
    textInputDesign: { width: 210, height: 55, backgroundColor: "#ebebebe8", padding: 15, borderRadius: 10, margin: 10, fontSize: 17 },
    addButton: { width: 100, height: 55, backgroundColor: "#001d3d", borderRadius: 10, justifyContent: "center", alignItems: "center" }
});

export default Todo;