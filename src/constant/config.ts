import { Platform } from 'react-native';
import * as NativeConfig from 'react-native-config';

const assignByPlatform = (
  originObject: Object,
  placeApiKey: string,
  cases: {
    [key in typeof Platform.OS]?: any;
  },
) => {
  return Object.assign(originObject, {
    [placeApiKey]: cases[Platform.OS],
  });
};

function Config() {
  const configObj = Object.assign(
    {
      API_URL: '',
    },
    NativeConfig.Config,
  );

  assignByPlatform(configObj, 'PLACE_API_KEY', {
    ios: NativeConfig.Config.IOS_PLACE_API_KEY,
    android: NativeConfig.Config.ANDROID_PLACE_API_KEY,
  });

  return configObj;
}

const CONFIG = Config();

export default CONFIG;
