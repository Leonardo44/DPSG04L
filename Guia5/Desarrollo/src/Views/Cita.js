import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Cita = ({ item, eliminarPaciente }) => {
    const dialogoEliminar = id => {
        console.log('eliminando...', id);
        eliminarPaciente(id);
    }

    return (
        <View style={style.cita}>
            <View>
                <Text style={style.label}>Paciente:</Text>
                <Text style={style.texto}>{item.paciente}</Text>
            </View>
            <View>
                <Text style={style.label}>Propietario:</Text>
                <Text style={style.texto}>{item.propietario}</Text>
            </View>
            <View>
                <Text style={style.label}>Sintomas:</Text>
                <Text style={style.texto}>{item.sintomas}</Text>
            </View>
            <View>
                <TouchableHighlight
                    style={style.btnEliminar}
                    onPress={ ()=> {
                            dialogoEliminar(item.id)
                        }
                    }
                >
                    <Text style={style.textoEliminar}>Eliminar items</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        fontSize: 18
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Cita;
