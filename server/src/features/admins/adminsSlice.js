import { createSlice } from '@reduxjs/toolkit';
import { fetchAdmins } from './adminsThunk';

const initialState = {
  entities: [],
  loading: false,
  error: '',
};

const adminsSlice = createSlice({
  name: 'admins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmins.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error || action.error.message;
      });
  },
});

export const adminsReducer = adminsSlice.reducer;
