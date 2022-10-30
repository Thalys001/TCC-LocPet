import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Avistados() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AVISTADOS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flez: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})
