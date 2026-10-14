import { StyleSheet } from "react-native"
import { colors } from "./colors"

export const globalStyles = StyleSheet.create({
    conatine: {
        flex: 1, 
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 50, 
        fontWeight: "bold",
        color: colors.primary
    },
    subtitle: {
        fontSize: 16, 
        marginTop: 8,
        textAlign: "center",
    },
    label: {
        fontSize: 16,
        alignSelf: "flex-start",
        marginTop: 24,
        marginBottom: 8,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        padding: 10,
        fontSize: 18,
    },
    precisionContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        width: "100%",
    },
    precisionOption: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        overflow: "hidden",
    },
    precisionSelected: {
        backgroundColor: colors.primary,
        color: colors.background,
        borderColor: colors.primary,
    },
    button: {
        width: "100%",
        backgroundColor: colors.primary,
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 24,
    },
    buttonText: {
        color: colors.background,
        fontSize: 16,
        fontWeight: "bold",
    },
})