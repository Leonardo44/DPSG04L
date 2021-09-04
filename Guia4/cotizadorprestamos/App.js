/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Result from './src/components/Result';
import Footer from './src/components/Footer';

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 15,
  },
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});

const App = () => {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if(capital && interest && months){
      calculate();
    }else{
      reset();
    }
  }, [capital, interest, months]);

  const calculate = () => {
    reset();
    if(!capital){
      setErrorMessage('Añade la cantidad que quieres solicitar');
    }else if(!interest){
      setErrorMessage('Añade el interes de prestamos');
    }else if(!months){
      setErrorMessage('Selecciona los meses a pagar');
    }else{
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ','),
      });
    }
  }

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  }

  return (
    <>
    <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <Result
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />
      <Footer></Footer>
    </>
  );
}

export default App;
