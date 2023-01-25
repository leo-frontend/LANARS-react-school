import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PhotoInterface } from '../../interfaces/Photo.interface';
import { IPhotosState} from '../../interfaces/Photo.slice.interface';
import { pushPhoto, deletePhoto, fetchPhotoList, updatePhoto } from '../actions/actionCreators';
import { isActiveSliceStatus, PromiseStatuses, setError, setStatus, StatusMessage } from '../helpers/helpers';

const initialState: IPhotosState = {
  photosList: [],
  status: StatusMessage.DEFAULT,
  errorMessage: '',
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPhotoList.fulfilled, (state, action: PayloadAction<PhotoInterface[]>) => {
        state.photosList = action.payload;
        fetch('/api/photos').then((responce) => console.log(responce));
      })
      .addCase(updatePhoto.fulfilled, (state, action: PayloadAction<PhotoInterface>) => {
        state.photosList = state.photosList.map(singlePhoto => singlePhoto.id === action.payload.id ? action.payload : singlePhoto);
      })
      .addCase(pushPhoto.fulfilled, (state, action: PayloadAction<PhotoInterface>) => {
        state.photosList.push(action.payload);
        fetch('/api/photos').then((responce) => console.log(responce));
      })
      .addCase(deletePhoto.fulfilled, (state, action: PayloadAction<number[]>) => {
        state.photosList = state.photosList.filter(singlePhoto => !action.payload.includes(singlePhoto.id) && singlePhoto);
      })
      .addMatcher((action) => isActiveSliceStatus(action, photosSlice.name, PromiseStatuses.FULFILLED),
        (state) => setStatus(state, StatusMessage.DEFAULT))
      .addMatcher((action) => isActiveSliceStatus(action, photosSlice.name, PromiseStatuses.PENDING),
        (state) => setStatus(state, StatusMessage.LOADING))
      .addMatcher((action) => isActiveSliceStatus(action, photosSlice.name, PromiseStatuses.REJECTED),
        setError);
  },
});

export default photosSlice.reducer;
