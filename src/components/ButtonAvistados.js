import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

const ButtonAvistados = () => {
  const clickHandler = () => {
    alert('Botão Clicado')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}
        >
          <Image
            source={{
              uri: 'https://developerplus.com.br/wp-content/uploads/2021/12/plus_icon.png'
            }}
            style={styles.floatingButtonStyle}
          />
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
    top: 260,
    left: 70,
    alignItems: 'center',
    position: 'fixed'
  },
  floatingButtonStyle: {
    // resizeMode: 'contain',
    width: 75,
    height: 75
  }
})
