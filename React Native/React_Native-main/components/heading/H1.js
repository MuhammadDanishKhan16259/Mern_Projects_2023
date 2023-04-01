import { StyleSheet, Text } from "react-native";

const H1 = ({ children, style, fnName }) => {
    return (
        <Text onPress={fnName && fnName} style={[Styles.textStyle, style]}>
            {children}
        </Text>
    );
};


const Styles = StyleSheet.create({
    textStyle: {
        // display: "block",
        fontSize: 32,
        marginTop: 10.72,
        marginBottom: 10.72,
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold",
        color: "#333"
    }
});


export default H1;