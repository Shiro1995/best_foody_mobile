import React, { memo } from 'react';

import { auth } from 'config/firebase';
import { signOut } from 'firebase/auth';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Home = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {}
  };
  return (
    <Container>
      <TextStyles>{'Home'}</TextStyles>
      <TouchableOpacity onPress={handleLogout}>
        <Text>{'Logout'}</Text>
      </TouchableOpacity>
    </Container>
  );
};

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const TextStyles = styled.Text``;

export default memo(Home);
