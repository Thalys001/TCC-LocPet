import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform,
  TouchableOpacity
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

const statusBarHeight = StatusBar.currentHeight

export default function Procurados() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text>Conteúdo</Text>

          <TouchableOpacity
            style={styles.buttom}
            onPress={() => navigation.navigate('Maps')}
          >
            <Text style={styles.buttomText}>Mapa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
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
  },
  buttom: {
    backgroundColor: '#000',
    width: '20%',
    borderRadius: 30,
    paddingVertical: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
})
