import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlbumInterface } from '../../interfaces/Album.interface';
import { IAlbumState } from '../../interfaces/Album.slice.interface';
import { pushAlbum, deleteAlbum, fetchAlbumList, updateAlbum } from '../actions/actionCreators';
import { isActiveSliceStatus, PromiseStatuses, setError, setStatus, StatusMessage } from '../helpers/helpers';

const initialState: IAlbumState = {
  albumsList: [],
  status: StatusMessage.DEFAULT,
  errorMessage: '',
};

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAlbumList.fulfilled, (state, action: PayloadAction<AlbumInterface[]>) => {
        state.albumsList = action.payload;
      })
      .addCase(updateAlbum.fulfilled, (state, action: PayloadAction<AlbumInterface>) => {
        state.albumsList = state.albumsList.map(singleAlbum => singleAlbum.id === action.payload.id ? action.payload : singleAlbum);
      })
      .addCase(pushAlbum.fulfilled, (state, action: PayloadAction<AlbumInterface>) => {
        state.albumsList.push(action.payload);
      })
      .addCase(deleteAlbum.fulfilled, (state, action: PayloadAction<number[]>) => {
        state.albumsList = state.albumsList.filter(singleAlbum => !action.payload.includes(singleAlbum.id));
      })
      .addMatcher((action) => isActiveSliceStatus(action, albumsSlice.name, PromiseStatuses.FULFILLED),
        (state) => setStatus(state, StatusMessage.DEFAULT))
      .addMatcher((action) => isActiveSliceStatus(action, albumsSlice.name, PromiseStatuses.PENDING),
        (state) => setStatus(state, StatusMessage.LOADING))
      .addMatcher((action) => isActiveSliceStatus(action, albumsSlice.name, PromiseStatuses.REJECTED),
        setError);
  },
});

export default albumsSlice.reducer;
