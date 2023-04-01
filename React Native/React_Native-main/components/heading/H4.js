import { StyleSheet, Text } from "react-native";

const H4 = ({ children, style, fnName }) => {
    return (
        <Text onPress={fnName && fnName} style={[Styles.textStyle, style]}>
            {children}
        </Text>
    );
};


const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold"
    }
});


export default H4;