import { api } from '@app/service/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllConsults = createAsyncThunk(
  'users/getAllConsults',
  async () => {
    const response = await api.get('/api/consult');

    return response.data;
  }
);

export const getAllUsers = createAsyncThunk('users/geetAllUsers', async () => {
  const response = await api.get('/api/user');

  return response.data;
});
