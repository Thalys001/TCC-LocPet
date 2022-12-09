import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity ,Button, Image, SafeAreaView} from 'react-native'
import { Camera } from 'expo-camera'
import { FontAwesome } from '@expo/vector-icons'

export default function App() {
  const camRef = useRef(null)
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermission(status === 'granted')
    })()
  }, [])
  if (hasCameraPermission === null){
    return <View />
    
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>
  }

  function toggleCameraType() {
    setType(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
  }

  async function takePicture (){
    if (camRef) {
      const data = await camRef.current.takePictureAsync(null)
      setImage(data.uri)
    }
  }
  
  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        type={type}>
        <View style={styles.contentButtons}>
          <TouchableOpacity
             style={styles.buttonFlip}
              onPress={toggleCameraType}>
               <FontAwesome name='exchange' size={23} color={"#7B68EE"}></FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity
             style={styles.buttonCamera}
              onPress={takePicture}>
               <FontAwesome name='camera' size={23} color={"#7B68EE"}></FontAwesome>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center'
    },
    camera:{
      width: '100%',
      height: '100%'
    },
    contentButtons:{
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "row"
    },
    buttonFlip:{
      position: 'absolute',
      bottom: 50,
      left: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      margin: 20,
      height: 50,
      width: 50,
      borderRadius: 50     
    },
    buttonCamera:{
      position: 'absolute',
      bottom: 50,
      right: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      margin: 20,
      height: 50,
      width: 50,
      borderRadius: 50     
    }

  })