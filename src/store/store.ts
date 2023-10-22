import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';

import rootReducer from './rootReducer';
import { IReducerState } from './store.interface';

const persistConfig: PersistConfig<IReducerState> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  timeout: undefined,
};
const persistedReducer = persistReducer<IReducerState>(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
});
