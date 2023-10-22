import React from 'react';

import { Screens, navigationOptions } from '@navigation/index';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/authentication/login';
//
const Stack = createStackNavigator();

export default function AuthenticationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ ...navigationOptions }}
      initialRouteName={Screens.Login}>
      <Stack.Screen name={Screens.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
}
