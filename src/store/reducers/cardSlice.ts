import { createSlice } from '@reduxjs/toolkit';

import { CARD_SLICE, ICardState } from './interface';

const initialState: ICardState = {
  isFirstLoad: false,
};

const cardSlice = createSlice({
  name: CARD_SLICE,
  initialState,
  reducers: {
    addToCart: () => {},
    incrementCount: () => {},
    addToWishList: () => {},
  },
});

export const { addToCart, incrementCount, addToWishList } = cardSlice.actions;

export default initialState;
