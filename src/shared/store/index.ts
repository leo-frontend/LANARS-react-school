import { configureStore } from '@reduxjs/toolkit';
import photoReducerSlice from './reducers/photoReducerSlice';

export const store = configureStore({
  reducer: {
    photos: photoReducerSlice,
    // albums: albumReducerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
