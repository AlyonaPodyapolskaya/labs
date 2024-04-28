import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from './actions';

const initialState = {
  value: 0,
};

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value += 1;
    })
    .addCase(decrement, (state) => {
      state.value -= 1;
    })
    .addCase(reset, (state) => {
      state.value = 0;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    })
    .addCase(decrementByAmount, (state, action) => {
      state.value -= action.payload;
    });
});


export default counterReducer;

