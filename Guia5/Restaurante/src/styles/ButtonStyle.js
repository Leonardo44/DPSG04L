import React from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";

const ButtonStyle = StyleSheet.create({
    appButtonContainer: {
        marginTop: 8,
        elevation: 8,
        backgroundColor: "#145DA0",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        height: 44,
        flex: 1,
        justifyContent: 'center',
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default ButtonStyle;