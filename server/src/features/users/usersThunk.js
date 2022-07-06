import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_arg, { extra: api }) => {
    try {
      let response = await api.get('/users');
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);