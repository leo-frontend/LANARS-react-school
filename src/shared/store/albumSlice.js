import {createSlice} from "@reduxjs/toolkit";
import {Album} from "../../core/services/back-end/api-classes";
import

const albumSlice = createSlice({
  name: 'album',
  initialState: Album,
  reducers: {

  }
});

export const {} = albumSlice.actions;

export default albumSlice.reducer;
