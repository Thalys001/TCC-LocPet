import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation()
  const [display, setDisplay] = useState('none')
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Login</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.msg_login(display)}>
          Erro! Usuário ou Senha Inválidos!!!{' '}
        </Text>
        <Text style={styles.title}></Text>
        <TextInput placeholder="Digite um email..." style={styles.input} />

        <Text style={styles.title}></Text>
        <TextInput
          placeholder="Digite sua senha..."
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.buttom}
          //onPress={() => navigation.navigate('Home')}
          onPress={() => setDisplay('flex')}
        >
          <Text style={styles.buttomText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.RegisterText}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.RegisterText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B68EE'
  },
  containerHeader: {
    marginTop: '60%',
    marginBottom: '0%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#7B68EE',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    display: 'none',
    fontSize: 20
  },
  input: {
    padding: 10,
    paddingStart: 20,
    width: '100%',
    height: 50,
    marginTop: 12,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  // TextInput: {
  //   padding: 10,
  //   paddingStart: 20,
  //   width: '80%',
  //   height: 50,
  //   marginTop: 20,
  //   borderRadius: 30,
  //   backgroundColor: '#fff'
  // },
  buttom: {
    backgroundColor: '#000',
    width: '100%',
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
  },
  buttomRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  RegisterText: {
    color: '#a1a1a1',
    fontWeight: 'bold',
    marginTop: 10,
    alignItems: 'center'
  },
  msg_login: (text = 'none') => ({
    fontWeight: 'bold',
    fontSize: 15,
    color: 'red',
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    display: text
  })
})
