import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, FlatList, TouchableHighlight } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";

const List = ({ route, navigation, list, setList, deleteRegistration }) => {
    const isVisible = useIsFocused();

    useEffect(() => {
        if (isVisible) {
            const getListStorage = async () => {
                try {
                  const listStorage = await AsyncStorage.getItem('registration');
                  console.log(listStorage)
                  console.log('____')
                  if(listStorage) {
                    setList(JSON.parse(listStorage))
                  }
                } catch (error) {
                  console.log(error);
                }
            }
          
            getListStorage();
        }
    }, [isVisible]);

    const RowItem = ({ item }) => (
        <View style={styles.container}>
            <Text></Text>
            <View>
                <Text style={styles.value}>Cliente:</Text>
                <Text style={styles.key}>{item.client}</Text>
            </View>
            <View>
                <Text style={styles.value}>Número de personas:</Text>
                <Text style={styles.key}>{item.nPersons}</Text>
            </View>
            <View>
                <Text style={styles.value}>Fecha:</Text>
                <Text style={styles.key}>{item.date}</Text>
            </View>
            <View>
                <Text style={styles.value}>Hora:</Text>
                <Text style={styles.key}>{item.hour}</Text>
            </View>
            <View>
                <Text style={styles.value}>Sección de fumadores:</Text>
                <Text style={styles.key}>{item.section ? 'Sí' : 'No'}</Text>
            </View>
            <View>
                <TouchableHighlight
                    style={styles.appButtonContainer}
                    onPress={ ()=> {
                            deleteRegistration(item.id)
                        }
                    }
                >
                    <Text style={styles.appButtonText}>Eliminar</Text>
                </TouchableHighlight>
            </View>
        </View>
    );

    return (
        <View>
            <FlatList
                data={list}
                renderItem={({item}) => { return <RowItem item={item} /> }}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 8
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    key: {
        fontSize: 16,
        fontWeight: 'normal'
    },
    appButtonContainer: {
        marginTop: 8,
        elevation: 8,
        backgroundColor: "red",
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


export default List;