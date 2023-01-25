import { configureStore } from '@reduxjs/toolkit';
import { photosSlice } from './slices/photosSlice';
import { albumsSlice } from './slices/albumsSlice';

const store = configureStore({
  reducer: {
    photo: photosSlice.reducer,
    album: albumsSlice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
