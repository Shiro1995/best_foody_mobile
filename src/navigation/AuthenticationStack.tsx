import React from 'react';

import { Screens, navigationOptions } from '@navigation/index';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/authentication/login';
import SignUpScreen from '@screens/authentication/signUp /SignUp';

const Stack = createStackNavigator();

export default function AuthenticationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ ...navigationOptions }}
      initialRouteName={Screens.Login}>
      <Stack.Screen name={Screens.Login} component={LoginScreen} />
      <Stack.Screen name={Screens.SignUp} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
