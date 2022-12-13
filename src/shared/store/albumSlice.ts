import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import API from '../../core/services/API';
import {IAlbum} from '../interfaces';
import {IAlbumState} from '../interfaces/StateSlices';


export const addAlbum = createAsyncThunk(
  'photo/addAlbum',
  async function (album: IAlbum, thunkAPI) {
    try {
      return await API.post('/api/albums', album) as IAlbum;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error');
    }
  }
);

export const updateAlbum = createAsyncThunk(
  'photo/updateAlbum',
  async function (album: Required<IAlbum>, thunkAPI) {
    try {
      return await API.patch('/api/albums', album) as IAlbum;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error');
    }
  }
);

export const getAlbum = createAsyncThunk(
  'photo/getAlbum',
  async function (id: number[], thunkAPI) {
    try {
      return await API.get(`/api/albums${id === null ? `?ids=${[...id]}` : ''}`) as IAlbum[] | IAlbum;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error');
    }
  }
);

export const deleteAlbum = createAsyncThunk(
  'photo/deleteAlbum',
  async function (id: number, thunkAPI) {
    try {
      return await API.delete(`/api/albums?ids=${id}`);
    } catch (error) {
      return thunkAPI.rejectWithValue('Error');
    }
  }
);

const initialState: IAlbumState = {
  album: [],
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addAlbum.fulfilled, (state, action) => {
        state.album.push(action.payload);
      })
      .addCase(updateAlbum.fulfilled, (state, action) => {
        const id = state.album.findIndex(item => item.id === action.payload.id);
        state.album[id] = {
          ...state.album[id],
          ...action.payload,
        };
      })
      .addCase(getAlbum.fulfilled, (state, action) => {
        state.album = Array.isArray(action.payload) ? action.payload : [...state.album, action.payload];
      })
      .addCase(deleteAlbum.fulfilled, (state, action) => {
        state.album = state.album.filter(item => item.id !== action.payload.id);
      });
  },
});


export default albumSlice.reducer;
