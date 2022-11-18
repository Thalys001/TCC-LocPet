import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

const statusBarHeight = StatusBar.currentHeight

export default function Adoção() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text>Conteúdo em desenvolvimento!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25
  },
  content: {
    alignSelf: 'center',
    flex: 1,
    width: '95%',
    height: 280,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(1, 31, 38, 0.54)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  }
})
