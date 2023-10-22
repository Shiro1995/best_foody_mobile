import React from 'react';

import { Button } from 'react-native';
import styled from 'styled-components/native';

const CustomButton: React.FC = () => {
  return (
    <Container>
      <Button title="hello222" />
    </Container>
  );
};

const Container = styled.View``;

export default CustomButton;
