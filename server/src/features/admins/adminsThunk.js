import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAdmins = createAsyncThunk(
  'admins/fetchAdmins',
  async (_arg, { extra: api, rejectWithValue }) => {
    try {
      let response = await api.get('/admins');
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
