import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

//
interface ContainerIF {
  paddingBottom?: number;
}
const Container = styled.View<ContainerIF>`
  flex-direction: row;
  padding-bottom: ${props => props.paddingBottom || 0}px;
  border-top-width: 1.5px;
`;

const SubContainer = styled.View`
  height: 75px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 13px;
`;

const IndicatorBG = styled.View`
  height: 5px;
  width: 10px;
  overflow: hidden;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  top: 0px;
`;

const Indicator = styled.View`
  height: 10px;
  width: 10px;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
`;

const Text = styled.Text<{ isFocus: boolean }>`
  padding-top: 7px;
  font-size: 12px;
  font-weight: ${props => (props.isFocus ? 'bold' : 'normal')};
`;

interface Props {
  routeName: string;
}
const RenderIcon: React.FC<Props> = ({ routeName }) => {
  switch (routeName) {
    case 'Home':
      return <AntDesign color={'red'} name="google" size={30} />;
    case 'Profile':
      return <AntDesign color={'blue'} name="facebook-square" size={30} />;
    default:
      return null;
  }
};

function CustomBottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <Container paddingBottom={insets.bottom}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
        };

        const accessibilityState = isFocused ? { selected: true } : {};

        return (
          <Button
            key={`${route.name}-${index}`}
            accessibilityRole="button"
            accessibilityState={accessibilityState}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}>
            <SubContainer>
              <RenderIcon routeName={route.name} />
              <Text isFocus={isFocused} numberOfLines={1}>
                {label}
              </Text>
            </SubContainer>
          </Button>
        );
      })}
    </Container>
  );
}

export default React.memo(CustomBottomTabBar);
