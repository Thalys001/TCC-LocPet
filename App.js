import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'

async function  sessao()
{
  let resData = await AsyncStorage.getItem('userData');
      console.log(JSON.parse(resData));
}
sessao();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#7B68EE" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  )
}
