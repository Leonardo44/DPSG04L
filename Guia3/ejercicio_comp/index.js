import { AppRegistry } from 'react-native';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { Card } from 'react-native-elements';

const DATA = [
    {
        id: '1',
        title: 'Enchiladas',
        src: require('./src/imgs/enchiladas.jpg'),
        description: 'Las enchiladas salvadoreñas son un plato muy típico de la cocina de El Salvador. Originalmente se basan en una mezcla de tortilla de maíz y achiote, lo que les da el característico color naranja, pero no son picantes ni se usan chiles en la preparación. En esta receta, puedes usar tortillas de maíz regulares.'
    },
    {
        id: '2',
        title: 'Pan con Pollo',
        src: require('./src/imgs/pan_pollo.jpg'),
        description: 'Los panes con Pollo Salvadoreños, es un platillo típico que se acostumbra a comer en las celebraciones. En El Salvador se acostumbra a comer los panes con Pollo, en las celebraciones de cumpleaños, quince años, fiestas navideñas, fiestas de fin de año, entre otras celebraciones, donde se acompaña con un vaso de horchata, gaseosa, fresco natural o una taza de café.'
    },
    {
        id: '3',
        title: 'Pupusas',
        src: require('./src/imgs/pupusas.jpg'),
        description: 'La pupusa es una tortilla gruesa de maíz o arroz hecha a mano que se rellena con uno o más ingredientes. Los ingredientes más comunes son el queso, el chicharrón, el ayote o los frijoles refritos.'
    },
    {
        id: '4',
        title: 'Riguas',
        src: require('./src/imgs/riguas.jpg'),
        description: 'Las riguas son tortas delgadas de maíz fresco y tierno que se cocinan en hojas de plátano. Originarias de El Salvador, son una preparación básica de la cocina salvadoreña. Estas tortas generalmente se comen solas, como acompañamiento de un plato dulce o como postre con crema o cuajada'
    },
    {
        id: '5',
        title: 'Sopa de Pata',
        src: require('./src/imgs/sopa_pata.jpg'),
        description: 'La sopa de pata o caldo de pata es una abundante sopa de callos y pies de vaca de El Salvador. También se prepara con verduras locales como chayote, maíz, mandioca (yuca), chile y tomate. Se condimenta con orégano y cilantro, y debe su hermoso color rojo anaranjado a las semillas de achiote.'
    },
];

const Item = ({ title, img, description }) => (
    <Card>
        <Card.Title style={styles.title}>{ title }</Card.Title>
        <Card.Divider />
        <View style={styles.item}>
            <Image
                style={styles.img}
                source={ img }
            />
            <Text style={styles.description}>{description}</Text>
        </View>
    </Card>
);

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.src} description={item.description} />
    ); 

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    description: {
        fontSize: 14,
        textAlign: 'justify'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
    },
    img: {
        width: 160,
        height: 100,
        borderWidth: 2,
        resizeMode: 'contain',
        margin: 8,
    }
});

AppRegistry.registerComponent("ejercicio_comp", () => App);
