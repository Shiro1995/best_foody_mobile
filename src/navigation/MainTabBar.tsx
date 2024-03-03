import React, { memo } from 'react';

import CustomTabbar from '@components/CustomTabbar';
import { Screens } from '@navigation/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home/Home';

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.Home}
      tabBar={props => <CustomTabbar {...props} />}>
      <Tab.Screen name={Screens.Home} component={Home} />
      <Tab.Screen name={Screens.Profile} component={Home} />
    </Tab.Navigator>
  );
};

export default memo(MainTabBar);
