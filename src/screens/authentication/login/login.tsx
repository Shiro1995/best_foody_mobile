import React, { useEffect } from 'react';

import CustomButton from '@components/Button';
import styled from 'styled-components/native';

export default function LoginScreen() {
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <Container>
        <Text>Hello</Text>
        <CustomButton />
      </Container>
    </SafeAreaView>
  );
}

const SafeAreaView = styled.SafeAreaView``;

const Container = styled.View``;

const Text = styled.Text``;

// export default LoginScreen;
