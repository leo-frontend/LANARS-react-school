import {configureStore} from '@reduxjs/toolkit';
import photoSlice from './photoSlice';
import albumSlice from './albumSlice';

const store = configureStore({
  reducer: {
    photo: photoSlice,
    album: albumSlice,
  }
})

export default store;
