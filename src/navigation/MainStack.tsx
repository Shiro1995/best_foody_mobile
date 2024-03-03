import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import useAuth from 'hook/useAuth';

import AppStack from './AppStack';
import AuthenticationStack from './AuthenticationStack';

export default function MainStack() {
  const { user } = useAuth();
  const ActiveStack = () => {
    if (user) {
      return <AppStack />;
    }
    return <AuthenticationStack />;
  };
  return (
    <NavigationContainer>
      <ActiveStack />
    </NavigationContainer>
  );
}
