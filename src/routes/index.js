import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
// import Home from '../pages/Home'

import Avistados from '../pages/Avistados'
import Procurados from '../pages/Procurados'
import Adocao from '../pages/Adocao'
import Camera from '../pages/Camera'
import Settings from '../pages/Settings'
import Maps from '../pages/Maps'

import ButtonCam from '../components/ButtonCam'

import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#0a0a0a',
          borderTopColor: 'transparent'
        },
        activeTintColor: '#f5f5f5',
        inactiveTintColor: '#0a0a0a',
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#7B68EE'
        }
      }}
    >
      <Tab.Screen
        name="Avistados"
        component={Avistados}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="dog" size={24} color="black" />
          )
        }}
      />

      <Tab.Screen
        name="Procurados"
        component={Maps}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="search" size={24} color="black" />
          )
        }}
      />

      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, size }) => (
            <ButtonCam size={size} focused={focused} />
          )
        }}
      />

      <Tab.Screen
        name="Adoção"
        component={Adocao}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="hand-holding-heart" size={24} color="black" />
          )
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={Settings}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="user-alt" size={24} color="black" />
          )
        }}
      />
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
