import React from "react";

import { StyleSheet } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DarkTheme } from "react-native-paper";

import DogScreen from "./DogScreen";
import CatScreen from "./CatScreen";

const Tab = createMaterialBottomTabNavigator()

export default function BottomNavigator() {
    return(
        <Tab.Navigator barStyle={styles.navigator}>
            <Tab.Screen
                name='Dog'
                component={DogScreen}
                options={
                    {
                    }
                }
            />
            <Tab.Screen
                name='Cat'
                component={CatScreen}
                options={
                    {
                    }
                }
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    navigator: {
        backgroundColor: DarkTheme.colors.surface
    }
})