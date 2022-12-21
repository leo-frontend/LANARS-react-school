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
      return await API.get(`/api/photos${id === null ? `?ids=${[...id]}` : ''}`) as IPhoto[] | IPhoto;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error');
    }
  }
);

export const deletePhoto = createAsyncThunk(
  'photo/deletePhoto',
  async function (id: number, thunkAPI) {
    try {
      return await API.delete(`/api/photos?ids=${id}`) as number;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error');
    }
  }
);

const initialState: IPhotoState = {
  photos: [],
  loading: 'idle',
  error: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addPhoto.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.photos.push(action.payload);
      })
      .addCase(updatePhoto.fulfilled, (state, action) => {
        const id = state.photos.findIndex(item => item.id === action.payload.id);
        state.loading = 'succeeded';
        state.photos[id] = {
          ...state.photos[id],
          ...action.payload,
        };
      })
      .addCase(getPhoto.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.photos = Array.isArray(action.payload) ? action.payload : [...state.photos, action.payload];
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.photos = state.photos.filter(item => item.id !== action.payload);
      })
      .addMatcher(isPending, isPendingAction)
      .addMatcher(isFulfilled, isFulfilledAction)
      .addMatcher(isRejected, isRejectedAction);
  },
});


export default photoSlice.reducer;
