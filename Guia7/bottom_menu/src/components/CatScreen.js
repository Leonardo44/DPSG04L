import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Appbar, DarkTheme } from "react-native-paper";
import PetCard from "./PetCard";

const catList = [
    {
        id: '1',
        name: 'Persa',
        img: require('../img/persa.jpeg')
    },
    {
        id: '2',
        name: 'Bengala',
        img: require('../img/gato-de-bengala.jpeg')
    },
    {
        id: '3',
        name: 'British Shortair',
        img: require('../img/British_shorthair.jpeg')
    },
    {
        id: '4',
        name: 'Ragdoll',
        img: require('../img/Ragdoll.jpeg')
    },
    {
        id: '5',
        name: 'Siberiano',
        img: require('../img/siberiano.jpeg')
    }
]

export default function CatScreen() {
    return(
        <View style={style.font}>
            <Appbar.Header>
                <Appbar.Content title='Cats' />
            </Appbar.Header>
            <FlatList
                data={catList}
                renderItem={
                    ({item}) => (
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