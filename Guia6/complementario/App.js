/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { View, Text, Image, Button, ScrollView, StyleSheet, Modal, TouchableHighlight } from 'react-native'

const App = () => {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalStatus}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.mainTitle}>Lugares de interés</Text>
              <View style={styles.modalList}>
                <View style={styles.modalItemList}>
                  <Image
                    style={styles.modalImages}
                    source={require('./src/img/1.jpeg')}
                  />
                </View>

                <View style={styles.modalItemList}>
                  <Image
                    style={styles.modalImages}
                    source={require('./src/img/2.jpeg')}
                  />
                </View>
                <View style={styles.modalItemList}>
                  <Image
                    style={styles.modalImages}
                    source={require('./src/img/3.jpeg')}
                  />
                </View>
              </View>
              <Button title="Cerrar" onPress={() => (setModalStatus(!modalStatus))}></Button>
            </View>
          </View>
        </Modal>
        <Text style={styles.mainTitle}>Hotel Sheraton presidente - San Salvador</Text>
        <ScrollView horizontal>
          <View>
            <Image
              style={styles.banner}
              source={require('./src/img/1.jpeg')}
            />
          </View>
          <View>
            <Image
              style={styles.banner}
              source={require('./src/img/2.jpeg')}
            />
          </View>
          <View>
            <Image
              style={styles.banner}
              source={require('./src/img/2.jpeg')}
            />
          </View>
        </ScrollView>

        <Text style={styles.titulo}>Tipos habitaciones</Text>
        <View style={styles.roomsList}>

          <View style={styles.roomItemList}>
            <Image
              style={styles.images}
              source={require('./src/img/4.jpg')}
            />
            <Text style={styles.imageTitle}>King guest room</Text>
          </View>

          <View style={styles.roomItemList}>
            <Image
              style={styles.images}
              source={require('./src/img/6.jpeg')}
            />
            <Text style={styles.imageTitle}>Habitación doble</Text>
          </View>

          <View style={styles.roomItemList}>
            <Image
              style={styles.images}
              source={require('./src/img/9.png')}
            />
            <Text style={styles.imageTitle}>Presidential suite</Text>
          </View>
        </View>

        <Text style={styles.titulo}>Servicios Disponibles</Text>
        <View style={styles.servicesList}>

          <View style={styles.servicesItemList}>
            <Image
              style={styles.images}
              source={require('./src/img/10.jpeg')}
            />
             <Text style={styles.imageTitle}>Bar</Text>
          </View>

          <View style={styles.servicesItemList}>
            <Image
              style={styles.images}
              source={require('./src/img/11.jpeg')}
            />
            <Text style={styles.imageTitle}>Piscina</Text>
          </View>

          <View style={styles.servicesItemList}>
            <Image
              style={styles.images}
              source={require('./src/img/13.jpeg')}
            />
            <Text style={styles.imageTitle}>Spa</Text>
          </View>
        </View>

        <View>
          <Button
            title="Lugares de interés"
            onPress={() => (setModalStatus(!modalStatus))}
          />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1
  },
  banner: {
    width: 250,
    height: 250,
    marginRight: 10
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'rgb(49, 107, 131)',
    color: 'rgb(255,255, 255)',
    padding: 10
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 10,
    textAlign: 'center'
  },
  images: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  modalImages: {
    width: '100%',
    height: 110,
    marginVertical: 10
  },
  imageTitle: {
    textAlign: 'center',
    fontSize: 17,
    padding: 5,
    backgroundColor: 'rgba(3, 83, 151, 1)',
    fontWeight: 'bold',
    color: 'rgb(255,255, 255)'
  },
  modalList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  modalItemList: {
    flexBasis: '100%'
  },
  roomsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  roomItemList: {
    flexBasis: '100%'
  },
  servicesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  servicesItemList: {
    flexBasis: '49%'
  }
});
