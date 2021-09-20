import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert, Switch } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ButtonStyle from "../styles/ButtonStyle";
import FormStyle from "../styles/FormStyle";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid';
import Separator from './Separator.js';

const Form = ({ route, navigation }) => {
    const { list, setList, saveRegistrationStorage  } = route.params;

    // variables para el formulario
    const [client, setClient] = useState('');
    const [section, setSection] = useState(false);
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [nPersons, setNPersons] = useState(0);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }

    const confirmDate = date => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
        setDate(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    }

    // Muestra u oculta el time picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    }

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    }

    const confirmHour = hour => {
        const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
        setHour(hour.toLocaleString('es-ES', opciones));
        hideTimePicker();
    }

    const saveRegistration = e => {
        if (client.trim() === '' || date.trim() === '' || hour.trim() === '' || Number.isInteger(parseInt(nPersons)) === false) {
            showAlert();
            return;
        } else {
            if (nPersons < 1) {
                showAlert();
                return;
            }
        }

        // Crear nueva cita
        const regitration = { client, section, date, hour, nPersons };
        regitration.id = shortid.generate();

        // Agregar al state
        const newList = [...list, regitration];
        setList(newList);

        // Pasar registros al storage
        saveRegistrationStorage(JSON.stringify(newList));

        navigation.goBack();
    }

    // Muestra la alerta si falla la validacion
    const showAlert = () => {
        Alert.alert(
            'Error',
            'Algunos campos no son los correctos',
            [
                {
                    text: 'Ok'
                }
            ]
        )
    }

    return (
        <ScrollView>
            <View style={FormStyle.container}>
                <View>
                    <Text style={FormStyle.textInput}>Nombre</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={setClient}
                        value={client}
                    ></TextInput>
                </View>
                <View>
                    <Text style={FormStyle.textInput}>Número de personas</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={setNPersons}
                        value={nPersons}
                        keyboardType="number-pad"
                    ></TextInput>
                </View>
                <View>
                    <Text style={FormStyle.textInput}>Fecha:</Text>
                    <Button title='Seleccionar fecha' onPress={showDatePicker}/>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode='date'
                        onConfirm={confirmDate}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS='Elige la fecha'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                    <Text>{date}</Text>
                </View>
                <View>
                    <Text style={FormStyle.textInput}>Hora:</Text>
                    <Button title='Seleccionar hora' onPress={showTimePicker}/>
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode='time'
                        onConfirm={confirmHour}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS='Elige la hora'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                    <Text>{hour}</Text>
                </View>
                <View>
                    <Text style={FormStyle.textInput}>Sección de fumadores</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#145DA0" }}
                        thumbColor={section ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setSection}
                        value={section}
                    />
                </View>
                <Separator />
                <TouchableOpacity
                    style={ButtonStyle.appButtonContainer}
                    onPress={() => saveRegistration()}
                >
                    <Text style={ButtonStyle.appButtonText}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Form;