import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthenticationStack from './AuthenticationStack';
import auth from '@react-native-firebase/auth';

export default function MainStack() {
  

  
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user:any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  
  
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
