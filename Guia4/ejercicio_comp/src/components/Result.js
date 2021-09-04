import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20, 
    },
});

const Result = props => {
    const { name, salary, total, errorMessage } = props;

    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>Resumen de {name}</Text>
                    <DataResult title="Salario base:" value={`${salary} $`} />
                    <DataResult title="Descuento ISSS:" value={`${total.isssDiscount} $`} />
                    <DataResult title="Descuento AFP:" value={`${total.afpDiscount} $`} />
                    <DataResult title="Descuento Renta:" value={`${total.rentaDiscount} $`} />
                    <DataResult title="Salario Neto:" value={`${total.netSalary} $`} />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

const DataResult = (props) => {
    const { title, value } = props;

    return (
        <View>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

export default Result;