import {configureStore} from "@reduxjs/toolkit";
import photoSlice from "./photoSlice";
import albumSlice from './albumSlice'

export default configureStore({
  reducer: {
    photo: photoSlice,
    album: albumSlice
  }
});
