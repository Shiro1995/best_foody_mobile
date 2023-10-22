import { metaReducer } from '@reducers/meta';
import { AnyAction, Reducer, combineReducers } from '@reduxjs/toolkit';

import { META_SLICE } from './reducers/interface';

const appReducer = combineReducers({
  [META_SLICE]: metaReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;
