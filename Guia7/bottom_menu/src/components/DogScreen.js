import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Appbar, DarkTheme } from "react-native-paper";
import PetCard from "./PetCard";

const dogList = [
    {
        id: '1',
        name: 'Pomerania',
        img: require('../img/pomerania.jpeg')
    },
    {
        id: '2',
        name: 'Husky siberiano',
        img: require('../img/Husky_siberiano.webp')
    },
    {
        id: '3',
        name: 'Shiba Inu',
        img: require('../img/shiba-inu.jpeg')
    },
    {
        id: '4',
        name: 'Corgi',
        img: require('../img/corgi.jpeg')
    },
    {
        id: '5',
        name: 'Pug',
        img: require('../img/pug.jpeg')
    }
]

export default function DogScreen() {
    return (
        <View style={style.font}>
            <Appbar.Header>
                <Appbar.Content title='Dogs' />
            </Appbar.Header>
            <FlatList
                data={dogList}
                renderItem={
                    ({ item }) => (
                        <PetCard item={item} />
                    )
                }
            />
        </View>
    )
}

const style = StyleSheet.create({
    font: {
        flex: 1,
        backgroundColor: DarkTheme.colors.background
    }
})