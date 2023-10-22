import React from 'react';

import { Screens, navigationOptions } from '@navigation/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/authentication/login';

const Stack = createStackNavigator();
export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={navigationOptions}
        initialRouteName={Screens.Login}>
        <Stack.Screen
          name={Screens.Login}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
