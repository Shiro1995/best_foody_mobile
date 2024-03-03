import React from 'react';

import { Screens } from '@navigation/index';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Home/Home';

import MainTabBar from './MainTabBar';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName={Screens.Home}>
      <Stack.Screen
        name={Screens.AppStack}
        component={MainTabBar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
