import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { api } from '../rtk/api';

const store = configureStore({
  reducer: { rootReducer,
  [api.reducerPath]: api.reducer},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);
export default store;
