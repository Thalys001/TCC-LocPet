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
  const navigation = useNavigation();
  const [display, setDisplay] = useState('none');
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [userLogin, setUserLogin] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorSenha, setErrorSenha] = useState(null);

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const validate = () => {
    let error = false 
    setErrorEmail(null)
    setErrorSenha(null)
    if (!re.test(String(email).toLowerCase())){
    setErrorEmail("Preencha seu e-mail corretamente")
    error = true
    }
    if(email == null){
      setErrorSenha("Ops, seu e-mail não pode ser vazio!")
      error = true
    }
    if (senha == null){
      setErrorSenha("Ops, sua senha não pode ser vazia!")
      error = true
    }
    if(senha  < 4){
      setErrorSenha("Senha não pode ser menor que 4 caracteres.")
      error = true
    }
    return !error
    }
  //Envio do formulário de Acesso
  async function sendAcess() {
    let response = await fetch('http://192.168.0.105:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        senha: senha
      })
    });
    let json=await response.json();;
      if(json === 'error'){
        console.log("hdhd");
          setErrorEmail("E-mail ou senha incorreto!")
          setErrorSenha("E-mail ou senha incorreto!")
      }
      else{
        
        navigation.navigate('Home');
      } 
  }
 //const chamada no onpress do botão "Acessar"
 const acessar = () => {
  if (validate()){
   sendAcess()
  }
  }
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
        <Text>{email} - {senha}</Text>
        <Text style={styles.title}></Text>
        <TextInput placeholder="E-mail"
          onChangeText={(text)=> setEmail(text)}
          style={styles.input} />

        <Text style={styles.title}></Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
        />

        <TouchableOpacity
          style={styles.buttom}
          onPress={() => acessar ()}
        //onPress={() => navigation.navigate('Home')}
        //onPress={() => setDisplay('flex')}
        >
          <Text
            style={styles.buttomText}
          >
            Entrar
          </Text>
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
