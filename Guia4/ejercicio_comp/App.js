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
 
 const styles = StyleSheet.create({
   Header: {
     backgroundColor: colors.PRIMARY_COLOR,
     height: 240,
     borderBottomLeftRadius: 30,
     borderBottomRightRadius: 30,
     alignItems: 'center'
   },
   HeadApp: {
     fontSize: 18,
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
   const [name, setName] = useState(null);
   const [salary, setSalary] = useState(null);
   const [total, setTotal] = useState(null);
   const [errorMessage, setErrorMessage] = useState("");
 
   useEffect(() => {
     if(name && salary){
       calculate();
     }else{
       reset();
     }
   }, [name, salary]);
 
   const calculate = () => {
     reset();
     if(!name){
        setErrorMessage('Añade el nombre del empleado');
     }else if(!salary){
        setErrorMessage('Añade el salario base');
     }else{
        let isssDiscount = (salary * 0.03);
        let afpDiscount = (salary * 0.04);
        let rentaDiscount = (salary * 0.05);
        let netSalary = salary - (isssDiscount + afpDiscount + rentaDiscount)

        setTotal({
            baseSalary: salary,
            isssDiscount: isssDiscount,
            afpDiscount: afpDiscount,
            rentaDiscount: rentaDiscount,
            netSalary: netSalary
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
         <Text style={styles.HeadApp}>Calcular descuentos de salario</Text>
         <Form
           setName={setName}
           setSalary={setSalary}
         />
       </SafeAreaView>
       <Result
         name={name}
         salary={salary}
         total={total}
         errorMessage={errorMessage}
       />
     </>
   );
 }
 
 export default App;
 