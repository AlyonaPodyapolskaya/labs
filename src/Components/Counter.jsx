import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import store from '../redux/store';
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from '../redux/actions';

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

export { store, Counter };
