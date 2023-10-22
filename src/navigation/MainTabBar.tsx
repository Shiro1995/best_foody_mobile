import React, { memo } from 'react';

import { Screens } from '@navigation/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '@screens/authentication/login';

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <Tab.Navigator initialRouteName={Screens.Login}>
      <Tab.Screen name={Screens.Login} component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default memo(MainTabBar);
