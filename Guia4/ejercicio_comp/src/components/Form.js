import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import colors from '../utils/colors';

const Form = props => {
    const { setName, setSalary } = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <Text style={styles.labelInput}>{"\n"}Salario Base{"\n"}</Text>
                <TextInput
                    placeholder="Salario base"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setSalary(e.nativeEvent.text)}
                />
                <Text style={styles.labelInput}>Nombre Empleado{"\n"}</Text>
                <TextInput
                    placeholder="Nombre empleado..."
                    style={styles.input}
                    onChange={e => setName(e.nativeEvent.text)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 50,
        borderRadius: 30,
        height: 220,
        justifyContent: 'center',
    },
    labelInput: {
        color: '#fff',
    },
    viewInputs: {
        flexDirection: 'column',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '100%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
});

export default Form;
