import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, Chip, DarkTheme, Divider, Text, Title } from "react-native-paper";

export default function PetCard(props) {
    const {item} = props

    return(
        <View>
            <View style={styles.cardRow}>
                <Avatar.Image source={item.img} size={50} />
                <Title style={styles.cardTitle}>{item.name}</Title>
            </View>
            <Divider />
        </View>
    )
}

const styles = StyleSheet.create({
    cardRow: {
        flexDirection: 'row',
        backgroundColor: DarkTheme.colors.surface,
        flexWrap: 'wrap',
        margin: 10,
    },
    cardTitle: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 30
    }
})