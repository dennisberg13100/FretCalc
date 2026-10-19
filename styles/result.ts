import { StyleSheet } from "react-native"
import { colors } from "./colors"

export const resultStyles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        fontSize: 12, 
        borderBottomWidth: 2,
        marginBottom: 20
    },
    headerComponent: {
        flexDirection: "column"
    },
    headerComponentTitle: {
    }, 
    headerComponentValue: {
        fontSize: 22
    }, 
    headerComponentCenter: {
        alignItems: "center",
    },
    headerComponentRight: {
        alignItems: "flex-end"
    },
    listCard: {
        flexDirection: "row",
        flex: 1,
        marginHorizontal: 30,
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginTop: 2,
        justifyContent: "space-between",
        borderWidth: 1, 
    }
})