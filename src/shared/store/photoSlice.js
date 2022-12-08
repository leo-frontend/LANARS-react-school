import {createSlice} from "@reduxjs/toolkit";
import {Photo} from "../../core/services/back-end/api-classes";

const photoSlice = createSlice({
  name: 'photo',
  initialState: Photo,
  reducers: {

  }
});

export const {} = photoSlice.actions;

export default photoSlice.reducer;
