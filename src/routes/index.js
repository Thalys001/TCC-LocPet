import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Avistados from '../pages/Avistados'
import Procurados from '../pages/Procurados'
import Adocao from '../pages/Adocao'
import Doacao from '../pages/Doacao'
import Settings from '../pages/Settings'

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen nome="Home" component={Home} />

      <Tab.Screen nome="Avistados" component={Avistados} />

      <Tab.Screen nome="Procurados" component={Procurados} />

      <Tab.Screen nome="Adocao" component={Adocao} />

      <Tab.Screen nome="Doacao" component={Doacao} />

      <Tab.Screen nome="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
