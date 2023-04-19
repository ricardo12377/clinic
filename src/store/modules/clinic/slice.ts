import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Consult, User, UserSlice } from './props';
import {
  createConsult,
  createDoctor,
  deleteConsult,
  getAllConsults,
  getAllUsers
} from './thunks';

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
  },
  createConsult: {
    error: '',
    status: 'idle'
  },
  createDoctor: {
    error: '',
    status: 'idle'
  },
  deleteConsult: {
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
      })
      .addCase(createDoctor.pending, (state: UserSlice) => {
        state.createDoctor.status = 'loading';
      })
      .addCase(createDoctor.fulfilled, (state: UserSlice) => {
        state.createDoctor.status = 'succeeded';
      })
      .addCase(createDoctor.rejected, (state: UserSlice, action) => {
        state.createDoctor.status = 'failed';
        state.createDoctor.error = action.error?.message;
      })
      .addCase(createConsult.pending, (state: UserSlice) => {
        state.createConsult.status = 'loading';
      })
      .addCase(createConsult.fulfilled, (state: UserSlice) => {
        state.createConsult.status = 'succeeded';
      })
      .addCase(createConsult.rejected, (state: UserSlice, action) => {
        state.createConsult.status = 'failed';
        state.createConsult.error = action.error?.message;
      })
      .addCase(deleteConsult.fulfilled, (state: UserSlice) => {
        state.deleteConsult.status = 'fulfilled';
      });
  }
});

export const { SetUser } = clinicSlicer.actions;

export default clinicSlicer.reducer;
