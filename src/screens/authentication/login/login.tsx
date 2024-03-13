import React, { useCallback, useEffect, useState } from 'react';

import { Screens } from '@navigation/index';
import { signInUserWithEmailAndPassword } from '@utils/api';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

export default function LoginScreen({ navigation }: any) {
  useEffect(() => {}, []);
  const image_Background = require('@assets/Image/Background_Image.png');

  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const handleOnChangeTextEmail = (value: string) => {
    setValueEmail(value);
  };
  const handleOnChangeTextPassword = (value: string) => {
    setValuePassword(value);
  };

  const handleSubmitLogin = useCallback(() => {
    if (valueEmail && valuePassword) {
      signInUserWithEmailAndPassword(valueEmail, valuePassword);
    }
  }, [valueEmail, valuePassword]);

  const handleCreateAccount = () => {
    navigation.navigate(Screens.SignUp);
  };

  return (
    <BackGroundImage source={image_Background} resizeMode="cover">
      <SafeAreaView>
        <Container>
          <HeaderLogin>
            <HeaderLeft>
              <TitleLeft>Login Account </TitleLeft>
              <TextLeft>Welcome</TextLeft>
            </HeaderLeft>
          </HeaderLogin>
          <ViewTextLogoApp>
            <TextLogo>
              Mini
              <TextLogoOrange>Shop</TextLogoOrange>
            </TextLogo>
          </ViewTextLogoApp>
          <ViewInput>
            <InputField
              placeholder={'email'}
              value={valueEmail}
              onChangeText={e => handleOnChangeTextEmail(e)}
            />
            <InputField
              placeholder={'Password'}
              value={valuePassword}
              secureTextEntry
              onChangeText={e => handleOnChangeTextPassword(e)}
            />
          </ViewInput>
          <ButtonForgotPassword>
            <TextForgotPassword>{'Forget Password?'}</TextForgotPassword>
          </ButtonForgotPassword>
          <ButtonView>
            <ButtonTouch onPress={handleSubmitLogin}>
              <ButtonText>{'Login'}</ButtonText>
            </ButtonTouch>
          </ButtonView>
          <ViewQuestion>
            <LineHorizoltal />
            <TextQuestion>{'Or sign in with'}</TextQuestion>
            <LineHorizoltal />
          </ViewQuestion>
          <ViewIconSocial>
            <IconTouch>
              <AntDesign color={'red'} name="google" size={30} />
            </IconTouch>
            <IconTouch>
              <AntDesign color={'blue'} name="facebook-square" size={30} />
            </IconTouch>
          </ViewIconSocial>
          <ViewQuestionSignUp>
            <TextQuestionSignUp>{'Not register yet ?'}</TextQuestionSignUp>
            <ButtonCreateAccount onPress={handleCreateAccount}>
              <TextCreateAccount>{'Create Account '}</TextCreateAccount>
            </ButtonCreateAccount>
          </ViewQuestionSignUp>
        </Container>
      </SafeAreaView>
    </BackGroundImage>
  );
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
`;
const BackGroundImage = styled.ImageBackground`
  flex: 1;
`;

const HeaderLogin = styled.View`
  padding-left: 20px;
`;
const HeaderLeft = styled.View``;
const TitleLeft = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const TextLeft = styled.Text`
  margin-top: 5px;
`;

const ViewTextLogoApp = styled.View`
  margin-top: 75px;
  align-items: center;
`;
const TextLogo = styled.Text`
  font-size: 60px;
  font-weight: 700;
`;
const TextLogoOrange = styled.Text`
  color: #ffc600;
`;

const ViewInput = styled.View`
  padding: 0px 20px;
  margin-top: 50px;
`;
const InputField = styled.TextInput`
  border: 1px solid #cdcdcd;
  padding: 14px 10px;
  border-radius: 8px;
  margin: 5px 0px;
`;
const ButtonForgotPassword = styled.TouchableOpacity`
  padding-right: 20px;
`;
const TextForgotPassword = styled.Text`
  text-align: right;
`;

const ButtonView = styled.View`
  margin-top: 30px;
  padding: 0px 20px;
`;

const ButtonTouch = styled.TouchableOpacity`
  background-color: #ffc600;
  align-items: center;
  padding: 15px 0px;
  border-radius: 8px;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

const ViewQuestion = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 40px;
  margin-top: 50px;
`;

const LineHorizoltal = styled.View`
  flex: 1;
  height: 1px;
  background-color: #888787;
`;
const TextQuestion = styled.Text`
  margin: 0px 3px;
  color: #888787;
`;

const ViewIconSocial = styled.View`
  flex-direction: row;
  padding: 0px 20px;
  justify-content: space-between;
  margin-top: 20px;
`;

const IconTouch = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  border-width: 1px;
  border-color: #cdcdcd;
  align-items: center;
  margin: 0px 10px;
  border-radius: 8px;
`;

const ViewQuestionSignUp = styled.View`
  padding: 0px 20px;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
`;
const TextQuestionSignUp = styled.Text``;
const ButtonCreateAccount = styled.TouchableOpacity``;

const TextCreateAccount = styled.Text`
  font-weight: 600;
  margin-left: 5px;
`;
