import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

const Pais = ({busqueda, resultado }) => {
    const [info,setinfo]=useState([]);
    const [nombre,setnombre]=useState();
    const [capital,setcapital]=useState();
    const [region,setregion]=useState();
    const [lengua,setlengua]=useState([]);
    const [area,setArea]=useState();
    const {pais} = busqueda;

    useEffect(() => {
        setinfo(resultado);
        lengua.length =0;
        Object.values(info).map(e => {
            setnombre(e.nome.abreviado);
            setcapital(e.governo.capital.nome);
            setregion(e.localizacao.regiao.nome);
            setArea(e.area.total);

            Object.values(e.linguas).map(l=>{
                lengua.push(l.nome)
            })
        });
    });
    
    return (
        <Card>
            <Card.Title>{nombre}</Card.Title>
            <Card.Divider />
            <View style={{ justifyContent: 'center' }}>
                <Text>Capital:{capital}</Text>
                <Text>Region:{region}</Text>
                <Text>Lengua:{lengua.toString()}</Text>
                <Text>Área (km2):{area}</Text>
            </View>
            <View>
                <Text></Text>
            </View>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: `https://flagcdn.com/56x42/${pais}.png`,
                }}
            />
        </Card>
    );
};

const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
    }
  });
export default Pais;