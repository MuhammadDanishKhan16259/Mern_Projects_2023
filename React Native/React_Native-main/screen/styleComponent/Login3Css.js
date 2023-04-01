import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textSize: {
        fontSize: 35
    },
    textArea: {
        backgroundColor: "#e3d5ca", color: "#333", width: 250, padding: 13, fontSize: 16,
        borderRadius: 10,
        marginVertical: 5
    },
    button: {
        width: 120, height: 50, backgroundColor: "#f4a261", justifyContent: "center", alignItems: "center", borderRadius: 10, marginVertical: 20
    },
    form: {
        width: "90%", justifyContent: "center", alignItems: "center"
    }

});


export default Style;