/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
*/

import React, { useState, useEffect} from 'react';
import { StyleSheet, useColorScheme, Button, Text } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './src/Views/List';
import Form from './src/Views/Form';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // definir el state de citas
  const [list, setList] = useState([]);

  useEffect(() => {
    const getListStorage = async () => {
      try {
        const listStorage = await AsyncStorage.getItem('registration');
        console.log(listStorage);
        if(listStorage) {
          setList(JSON.parse(listStorage))
        }
      } catch (error) {
        console.log(error);
      }
    }

    getListStorage();
  }, []);

  const saveRegistrationStorage = async (json) => {
    try {
      await AsyncStorage.setItem('registration', json);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteRegistration = id => {
    const filterList = list.filter( cita => cita.id !== id );
    setList( filterList );
    saveRegistrationStorage(JSON.stringify(filterList));
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List"
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? '#0C2D48' : '#0C2D48',
          },
          headerTintColor: isDarkMode ? '#fff' : '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >

        <Stack.Screen name="List" 
          options={({ navigation, route }) => ({
            headerTitle: <Text>Lista</Text>,
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('Form', { list: list, setList: setList, saveRegistrationStorage: saveRegistrationStorage });
                }}
                title="Agregar registro"
                color="#fff"
              />
            ),
          })}
          // initialParams={{ list: list, setList: setList, deleteRegistration: deleteRegistration }}
        >
          {props => <List {...props} list={list} setList={setList} deleteRegistration={deleteRegistration}></List>}
        </Stack.Screen>
        <Stack.Screen 
          name="Form" 
          options={{ title: 'Registrar' }} 
          component={Form} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;