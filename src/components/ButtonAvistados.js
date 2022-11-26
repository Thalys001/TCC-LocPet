import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { MaterialIcons } from '@expo/vector-icons'

const ButtonAvistados = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("RegisterAnimals")}
          style={styles.touchableOpacityStyle}
        >
          <Text style={styles.buttomText}>Entrar</Text>
{/* 
<TouchableOpacity
          style={styles.buttom}
          onPress={() => navigation.navigate("Home")}
        >
        </TouchableOpacity> */}


          <ImageBackground style={styles.imageRegister}>
            <MaterialIcons
              name="add-circle"
              size={80}
              color="rgba(1, 99, 122, 1)"
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ButtonAvistados

const styles = StyleSheet.create({
  container: {
    zIndex: 9999,
    flex: 1,
    top: 275,
    left: 70,
    alignItems: 'center'
  },
  imageRegister: {
    width: 75,
    height: 75
  }
})
