import { StyleSheet, Text } from "react-native";

const H2 = ({ children, style, fnName }) => {
    return (
        <Text onPress={fnName && fnName} style={[Styles.textStyle, style]}>
            {children}
        </Text>
    );
};


const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        marginTop: 13.28,
        marginBottom: 13.28,
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold"
    }
});


export default H2;