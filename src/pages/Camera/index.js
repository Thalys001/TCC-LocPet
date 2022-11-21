import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Camera } from 'expo-camera'

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [camera, setCamera] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  
  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted')
    })()
  }, [])
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri)
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        />
      </View>
      <Button
        title="virar camera"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          )
        }}
      ></Button>
      <Button style={styles.tirarFoto} title="tirar foto" 
      onPress={() => takePicture()} />
      {image && <Image source={{ uri: image }} style={{ flex: 2 }} />}
    </View>
  )
}
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,  
    marginBottom: '0%',
    marginEnd: 30
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  tirarFoto: {
    backgroundColor: '#000',
    width: '100%',
    borderRadius: 30,
    paddingVertical: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
