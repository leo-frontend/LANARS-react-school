import { IPhotos } from './../../interfaces/photos';
import API from 'core/services/API';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { isPending, isFulfilled, isError } from './functions';

export const getPhoto = createAsyncThunk(
  'photos/getPhoto',
  async (ids: number[] = [], { rejectWithValue }) => {
    try {
      const response = await API.get(`/api/photos${ids.length > 0 ? ('?ids=' + ids.join('')) : ''}`) as IPhotos[] | IPhotos;
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const uploadPhoto = createAsyncThunk(
  'photos/uploadPhoto',
  async (photo: Omit<IPhotos, 'id'>, { rejectWithValue }) => {
    try {
      const response = await API.post('/api/photos', photo) as IPhotos;
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const updatePhoto = createAsyncThunk(
  'photos/updatePhoto',
  async (photo: IPhotos, { rejectWithValue }) => {
    try {
      const response = await API.patch('/api/photos', photo) as IPhotos;
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const deletePhoto = createAsyncThunk(
  'photos/deletePhoto',
  async (ids: number[] | number, { rejectWithValue }) => {
    try {
      await API.delete(`/api/photos?ids=${ids}`) as IPhotos[] | IPhotos;
      return { ids };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

type InitialState = {
  photos: IPhotos[];
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: InitialState = {
  photos: [],
  isLoading: 'idle',
  error: null,
};

export const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhoto.fulfilled, (state, { payload }) => {
        state.photos = payload as IPhotos[];
      })
      .addCase(uploadPhoto.fulfilled, (state, { payload }) => {
        state.photos.push(payload);
      })
      .addCase(updatePhoto.fulfilled, (state, { payload }) => {
        const newPhoto = payload;
        const photoIndex = state.photos.findIndex((photo) => photo.id === newPhoto.id);
        if (photoIndex >= 0) {
          state.photos[photoIndex] = newPhoto;
        }
      })
      .addCase(deletePhoto.fulfilled, (state, { payload }) => {
        state.photos = state.photos.filter(photo => photo.id !== payload.ids);
      })
      .addMatcher(isPending, (state) => {
        state.isLoading = 'pending';
        state.error = null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = 'failed';
        state.error = action.payload;
      })
      .addMatcher(isFulfilled, (state) => {
        state.isLoading = 'succeeded';
        state.error = null;
      });
  },
});

export default photoSlice.reducer;
