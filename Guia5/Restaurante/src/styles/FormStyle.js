import React from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";

const FormStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 8,
        marginRight: 8
    },
    textInput: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#145DA0',
        fontSize: 16,
        borderRadius: 8
    },
    responseView: {
        margin: 20
    },
    responseText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default FormStyle;