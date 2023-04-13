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

export const createDoctor = createAsyncThunk(
  'users/createDoctor',
  async ({ name, email }: { name: string; email: string }) => {
    const response = await api.post('/api/doctor', {
      name,
      email
    });

    return response.data;
  }
);

export const createConsult = createAsyncThunk(
  'consult/createConsult',
  async ({
    title,
    obs,
    client,
    doctorId
  }: {
    title: string;
    obs?: string;
    client: string;
    doctorId: string;
  }) => {
    const response = await api.post('/api/consult', {
      title,
      obs,
      client,
      doctorId
    });

    return response.data;
  }
);
