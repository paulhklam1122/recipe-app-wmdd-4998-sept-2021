import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import IndexScreen from '../screens/IndexScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { setStatusBarStyle } from 'expo-status-bar'

const Stack = createNativeStackNavigator()

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Index'
        component={IndexScreen}
        options={{
          title: 'Recipe App',
          headerStyle: {
            backgroundColor: '#2c3e50'
          },
          headerTitleStyle: {
            color: '#fff'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppStack
