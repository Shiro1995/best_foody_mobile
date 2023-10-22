import React from 'react';

import { Screens } from '@navigation/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/authentication/login';

//
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screens.Login} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
