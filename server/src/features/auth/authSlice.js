import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser } from './authThunk';

const initialState = {
  currentUser: null,
  isAuth: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.isAuth = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isAuth = action.payload ? true : false;
        state.currentUser = action.payload || null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isAuth = false;
        state.error = action.payload.error || action.error.message;
      });
  },
});

export const authReducer = authSlice.reducer;
