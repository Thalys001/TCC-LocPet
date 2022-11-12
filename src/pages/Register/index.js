import React from 'react'
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
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastre-se</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome completo</Text>
        <TextInput placeholder="Digite o seu nome..." style={styles.input} />

        <Text style={styles.title}>CPF</Text>
        <TextInput placeholder="Digite o seu CPF..." style={styles.input} />

        <Text style={styles.title}>E-mail</Text>
        <TextInput placeholder="Digite o seu e-maill..." style={styles.input} />

        <Text style={styles.title}>Telefone</Text>
        <TextInput
          placeholder="Digite o seu telefone..."
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite a sua senha..." style={styles.input} />

        <Text style={styles.title}>Confirmar senha</Text>
        <TextInput placeholder="Digite a sua senha" style={styles.input} />

        <TouchableOpacity
          style={styles.buttom}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttomText}>Entrar</Text>
        </TouchableOpacity>

        <CheckBox
          style={styles.checkbox}
          checked={!checked}
          checkedColor="#000"
          checkedbackgroundColor="#7B68EE"
          uncheckedbackgroundColor="#7B68EE"
          size={30}
          textStyle={{}}
          title="Ao cadastrar-se você concorda com nossa Política de Privacidade"
          titleProps={{}}
          uncheckedColor="#000"
          checkedTitle="Ao cadastrar-se você concorda com nossa Política de Privacidade"
          containerStyle={{ width: '100%', alignItems: 'center' }}
          onIconPress={() => setChecked(!checked)}
          onLongIconPress={() => console.log('onLongIconPress()')}
          onLongPress={() => console.log('onLongPress()')}
          onPress={() => console.log('onPress()')}
        />
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
    marginTop: '40%',
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
    color: '#a1a1a1'
  },
  checkbox: {
    backgroundColor: '#000'
  }
})
