import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Consult, User, UserSlice } from './props';
import { getAllConsults, getAllUsers } from './thunks';

const initialState: UserSlice = {
  user: {} as User,
  users: [{} as User],
  consults: [{} as Consult],
  getConsultsStatus: {
    error: '',
    status: 'idle'
  },
  getUsersStatus: {
    error: '',
    status: 'idle'
  }
};

export const clinicSlicer = createSlice({
  name: 'clinic',
  initialState,
  reducers: {
    SetUser(state: UserSlice, action: PayloadAction<User>) {
      state.user = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllConsults.pending, (state: UserSlice) => {
        state.getConsultsStatus.status = 'loading';
      })
      .addCase(
        getAllConsults.fulfilled,
        (state: UserSlice, action: PayloadAction<Consult[]>) => {
          state.getConsultsStatus.status = 'succeeded';
          state.consults = action.payload?.map(item => {
            return item;
          });
        }
      )
      .addCase(getAllConsults.rejected, (state: UserSlice, action) => {
        state.getConsultsStatus.status = 'failed';
        state.getConsultsStatus.error = action.error?.message;
      })
      .addCase(getAllUsers.pending, (state: UserSlice) => {
        state.getUsersStatus.status = 'loading';
      })
      .addCase(
        getAllUsers.fulfilled,
        (state: UserSlice, action: PayloadAction<User[]>) => {
          state.getUsersStatus.status = 'succeeded';
          state.users = action.payload?.map(item => {
            return item;
          });
        }
      )
      .addCase(getAllUsers.rejected, (state: UserSlice, action) => {
        state.getUsersStatus.status = 'failed';
        state.getUsersStatus.error = action.error?.message;
      });
  }
});

export const { SetUser } = clinicSlicer.actions;

export default clinicSlicer.reducer;
