import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import API from '../../core/services/API';
import {IPhoto} from '../interfaces';
import {IPhotoState} from '../interfaces/StateSlices';
import {isFulfilled, isFulfilledAction, isPending, isPendingAction, isRejected, isRejectedAction} from './helpers';


export const addPhoto = createAsyncThunk(
  'photo/addPhoto',
  async function (photo: IPhoto, thunkAPI) {
    try {
      return await API.post('/api/photos', photo) as IPhoto;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updatePhoto = createAsyncThunk(
  'photo/updatePhoto',
  async function (photo: Required<IPhoto>, thunkAPI) {
    try {
      return await API.patch('/api/photos', photo) as IPhoto;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPhoto = createAsyncThunk(
  'photo/getPhoto',
  async function (id: number[], thunkAPI) {
    try {
      return await API.get(`/api/photos${id.length === 0 ? '' : `?ids=${id.join()}`}`) as IPhoto[] | IPhoto;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error');
    }
  }
);

export const deletePhoto = createAsyncThunk(
  'photo/deletePhoto',
  async function (id: (number | undefined)[], thunkAPI) {
    try {
      return await API.delete(`/api/photos?ids=${id.join()}`) as number[];
    } catch (error) {
      return thunkAPI.rejectWithValue('Error');
    }
  }
);

const initialState: IPhotoState = {
  photos: [],
  loading: 'IDLE',
  error: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addPhoto.fulfilled, (state, action) => {
        state.loading = 'SUCCEEDED';
        state.photos.push(action.payload);
      })
      .addCase(updatePhoto.fulfilled, (state, action) => {
        state.loading = 'SUCCEEDED';
        state.photos = state.photos.map(photo => photo.id === action.payload.id ? action.payload : photo);
      })
      .addCase(getPhoto.fulfilled, (state, action) => {
        state.loading = 'SUCCEEDED';
        state.photos = Array.isArray(action.payload) ? action.payload : [action.payload];
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.loading = 'SUCCEEDED';
        state.photos = action.payload.length === 1
          ? state.photos.filter(item => item.id !== action.payload[0])
          : state.photos = [];
      })
      .addMatcher(isPending, isPendingAction)
      .addMatcher(isFulfilled, isFulfilledAction)
      .addMatcher(isRejected, isRejectedAction);
  },
});


export default photoSlice.reducer;
