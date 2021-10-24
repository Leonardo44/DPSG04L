/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Formulario from './src/Components/Formulario';
import Pais from './src/Components/pais';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [busqueda, guardarbusqueda] = useState({
    pais: ''
  })
  const [consultar, guardarconsultar] = useState(false);
  const [resultado, guardarresultado] = useState({});

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const { pais } = busqueda;
    const consultarPais = async () => {
      if (consultar) {
        const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarresultado(resultado);
          guardarconsultar(false);
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarPais();
  },[consultar]);
    
  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país'), [{ Text: 'Ok' }];
  };

  return (
    <View style={styles.app}>
      <ScrollView>
        <View style={styles.contenido}>
          <Formulario
            busqueda={busqueda}
            guardarbusqueda={guardarbusqueda}
            guardarconsultar={guardarconsultar}
          />
        </View>
        <View style={styles.contenido}>
          <Pais
            busqueda={busqueda}
            resultado={resultado}></Pais>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center',
  },
  contenido: {
    margin: '2.5%',
  },
});

export default App;
