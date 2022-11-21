import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { CheckBox } from '@rneui/themed'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'



export default function Register() {
  const [checked, setChecked] = React.useState(true)
  const navigation = useNavigation()
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [confSenha, setConfSenha] = useState(null);

  async function newRegister() {
    let response = await fetch('http://192.168.0.105:3000/register', {
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
    let json = await response.json();;
    if (json === 'error') {
      console.log("Lascou");
      setErrorEmail("E-mail ou senha incorreto!")
      setErrorSenha("E-mail ou senha incorreto!")
    }
    else {

      navigation.navigate('Home');
    }
  }
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastro</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>E-mail</Text>
        <TextInput placeholder="E-maill" style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Senha" style={styles.input} />

        <Text style={styles.title}>Confirmar senha</Text>
        <TextInput placeholder="Confirmar Senha"
          style={styles.input}
          onChangeText={(text) => setConfSenha(text)} />


        <TouchableOpacity
          style={styles.buttom}
          onPress={() => Register() }
        >
          <Text style={styles.buttomText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            checked={!checked}
            checkedColor="white"
            checkedbackgroundColor="red"
            uncheckedbackgroundColor="red"
            size={30}
            textStyle={{}}
            title="Ao cadastrar-se você concorda com nossa Política de Privacidade"
            titleProps={{}}
            uncheckedColor="#000"
            checkedTitle="Política de Privacidade Aceita"
            containerStyle={{ width: '100%', alignItems: 'center', backgroundColor: "#7B68EE" }}
            onIconPress={() => setChecked(!checked)}
            onLongIconPress={() => console.log('onLongIconPress()')}
            onLongPress={() => console.log('onLongPress()')}
            onPress={() => console.log('onPress()')}
          />
        </View>
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
    marginTop: '20%',
    marginBottom: '0%',
    paddingStart: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    fontSize: 25,
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
    fontSize: 20,
    marginTop: 11
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
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttomRegister: {
    marginTop: 50,
    alignSelf: 'center'
  },
  RegisterText: {
    color: '#1e1e1e'
  },

})
