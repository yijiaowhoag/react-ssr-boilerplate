import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../features/users/usersSlice';
import { authReducer } from '../features/auth/authSlice';
import { adminsReducer } from '../features/admins/adminsSlice';

const createStore = (initialState, extraArgument) =>
  configureStore({
    reducer: {
      users: usersReducer,
      auth: authReducer,
      admins: adminsReducer,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument } }),
  });

export default createStore;
