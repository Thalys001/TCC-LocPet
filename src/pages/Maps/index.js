import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MapView, { Marker } from 'react-native-maps'

import * as Location from 'expo-location'

const Map = () => {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      console.log(location)
    })()
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Maps</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.62348364204039,
          longitude: -46.74943498729773,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0021
        }}
        showUserLocation
        mapaType="terrain"
      ></MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    paddingBottom: '30%',
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: '#000',
    
  },
  containerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '40%',
    paddingBottom: '5%',
    
    // flex: 1,
    // paddingTop: '30%',
    // paddingBottom: '30%',
    // paddingLeft: '5%',
    // paddingRight: '5%',
    // backgroundColor: '#FFF',
  },
  map: {
    flex: 1,
    border: '10%',
    backgroundColor: '#fff',
  }
})

export default Map
