import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const reset = createAction('counter/reset');
export const incrementByAmount = createAction('counter/incrementByAmount');
export const decrementByAmount = createAction('counter/decrementByAmount');


export const createUserSuccess = createAction('CREATE_USER_SUCCESS');
export const editUserSuccess = createAction('EDIT_USER_SUCCESS');
export const deleteUserSuccess = createAction('DELETE_USER_SUCCESS');
export const setMessage = createAction('SET_MESSAGE');
export const setUsers = createAction('SET_USERS');