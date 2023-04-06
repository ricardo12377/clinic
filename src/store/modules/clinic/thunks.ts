import { api } from '@app/service/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllConsults = createAsyncThunk(
  'users/getAllConsults',
  async ({ id }: { id: string | null }) => {
    try {
      if (typeof id === 'string') {
        const response = await api.get(`/consult/${id}`);

        return response.data;
      } else {
        const response = await api.get('/consults');

        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllUsers = createAsyncThunk('users/geetAllUsers', async () => {
  const response = await api.get('/api/user');

  return response.data;
});
