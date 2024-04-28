import { createReducer } from '@reduxjs/toolkit';
import { createUserSuccess, editUserSuccess, deleteUserSuccess, setMessage, setUsers } from './actions';

const initialState = {
  users: [],
  message: '',
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createUserSuccess, (state, action) => {
      state.users.push(action.payload);
      state.message = 'Пользователь успешно создан.';
    })
    .addCase(editUserSuccess, (state, action) => {
      const editedUserIndex = state.users.findIndex(user => user.id === action.payload.id);
      state.users[editedUserIndex] = action.payload;
      state.message = 'Данные пользователя успешно обновлены.';
    })
    .addCase(deleteUserSuccess, (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      state.message = 'Пользователь успешно удален.';
    })
    .addCase(setMessage, (state, action) => {
      state.message = action.payload;
    })
    .addCase(setUsers, (state, action) => {
      state.users = action.payload;
    });
});

export default userReducer;
