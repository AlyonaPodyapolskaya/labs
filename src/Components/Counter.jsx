import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const { increment, decrement, reset, incrementByAmount, decrementByAmount } = counterSlice.actions;

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <Typography variant="body1" sx={{ margin: '15px' }} gutterBottom>
        Счетчик: {count}
      </Typography>
      <Button variant="contained" sx={{ margin: '15px' }} onClick={() => dispatch(increment())}>
        Увеличить
      </Button>
      <Button variant="contained" sx={{ margin: '15px' }} onClick={() => dispatch(decrement())}>
        Уменьшить
      </Button>
      <Button variant="contained" sx={{ margin: '15px' }} onClick={() => dispatch(reset())}>
        Сбросить
      </Button>
      <Button variant="contained" sx={{ margin: '15px' }} onClick={() => dispatch(incrementByAmount(5))}>
        Увеличить на 5
      </Button>
      <Button variant="contained" sx={{ margin: '15px' }} onClick={() => dispatch(decrementByAmount(5))}>
        Уменьшить на 5
      </Button>
    </div>
  );
};

export { store, Counter, increment, decrement, reset, incrementByAmount, decrementByAmount };
