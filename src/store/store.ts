import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import clinicSlicer from './modules/clinic/slice';

const store = configureStore({
  reducer: {
    clinic: clinicSlicer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export default store;
