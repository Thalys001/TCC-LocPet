import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Avistados from '../pages/Avistados'
import Procurados from '../pages/Procurados'
import Settings from '../pages/Settings'
import Doacao from '../pages/Doacao'

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator>

            <Tab.Screen name="Avistados" component={Avistados} />

            <Tab.Screen name="Procurados" component={Procurados} />           

            <Tab.Screen name="Opções" component={Settings} />

            <Tab.Screen name="Doação" component={Doacao} />

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