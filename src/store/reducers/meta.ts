import { createSlice } from '@reduxjs/toolkit';

import { META_SLICE, IMetaState } from './interface';

const initialState: IMetaState = {
  isFirstLoad: false,
};

const metaSlice = createSlice({
  name: META_SLICE,
  initialState,
  reducers: {},
});

export const metaReducer = metaSlice.reducer;

export default initialState;
