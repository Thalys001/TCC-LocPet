import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import *as Location from 'expo-location'

const Map = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      setLocation(location);
      console.log(location);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Maps</Text>
      <MapView style={styles.map}
       initialRegion={{
       latitude: -23.60,
       longitude: -46.76,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421
      }}   
      showsUserLocation
      mapaType="terrain"
      >
       
        </MapView>
    </View>
  );
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  map: {
      flex: 1
    },
});

export default Map; 

