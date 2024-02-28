import React from 'react';

import { Screens } from '@navigation/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Home/Home';
import useAuth from 'hook/useAuth';

import AuthenticationStack from './AuthenticationStack';

const Stack = createStackNavigator();

export default function MainStack() {
  const { user } = useAuth();
  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Screens.Login} component={AuthenticationStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screens.Home} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
