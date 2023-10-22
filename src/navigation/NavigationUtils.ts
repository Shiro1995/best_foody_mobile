import {
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

export const navigationOptions: StackNavigationOptions = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

export const navigationRef = createNavigationContainerRef<any>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}
export function replace(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
export function push(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}
export function pop(screen: number) {
  navigationRef.current?.dispatch(StackActions.pop(screen));
}
export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}
export function goBack() {
  navigationRef.current?.goBack();
}

export const getNavigation = () => {
  return navigationRef.current;
};

export const navigateReset = (stackName: string, params?: any) => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name: stackName, params }],
  });
};
