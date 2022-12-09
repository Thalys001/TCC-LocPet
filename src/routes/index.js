import React, {useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import RegisterAnimals from '../pages/RegisterAnimals'
import ForgotPassword from '../pages/ForgotPassword'
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
      screenOptions={{
        tabBarActiveTintColor: '#f5f5f5',
        tabBarInactiveTintColor: '#0a0a0a',
        alignItems: 'center',
        justifyContent: 'center',
        tabBarStyle: {
          position: 'absolute',
          // paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#7B68EE',
          borderTopWidth: 0,
          bottom: 15,
          left: 7,
          right: 7,
          elevation: 10,
          borderRadius: 30
        }
      }}
    >
      <Tab.Screen
        name="Avistados"
        component={Avistados}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <FontAwesome5 name="dog" size={size} color={color} />
            }
            return <FontAwesome5 name="dog" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Procurados"
        component={Procurados}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <FontAwesome5 name="search" size={size} color={color} />
            }
            return <FontAwesome5 name="search" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false,
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
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <FontAwesome5
                  name="hand-holding-heart"
                  size={size}
                  color={color}
                />
              )
            }
            return (
              <FontAwesome5
                name="hand-holding-heart"
                size={size}
                color={color}
              />
            )
          }
        }}
      />

      <Tab.Screen
        name="Opções"
        component={Settings}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <FontAwesome5 name="user" size={size} color={color} />
            }
            return <FontAwesome5 name="user" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator()

export default function Routes() {
  //componentes da navegação Stack
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
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="RegisterAnimals"
        component={RegisterAnimals}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  )
}
