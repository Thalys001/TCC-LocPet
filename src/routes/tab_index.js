import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home2 from '../pages/Home2'
import New from '../pages/New'
import Notification from '../pages/Notification'
import Profile from '../pages/Profile'
import Search from '../pages/Search'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen nome="Inicio" component={Home2} />

      <Tab.Screen nome="Procurar" component={Search} />

      <Tab.Screen nome="Novo" component={New} />

      <Tab.Screen nome="Notificação" component={Notification} />

      <Tab.Screen nome="Perfil" component={Profile} />
    </Tab.Navigator>
  )
}
