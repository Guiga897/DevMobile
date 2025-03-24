import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "ghostwhite",
        ...Platform.select({
            ios: {paddingTop: 20},
            android: {paddingTop: StatusBar.currentHeight},
        }),
    },
    box: {
        width: 120,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray"
    },
    boxText: {
        color: "darkslategray",
        fontWeight: "bold"
    }
});