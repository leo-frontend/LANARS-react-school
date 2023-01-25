import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'core/services/API';
import { PhotoInterface } from '../../interfaces/Photo.interface';
import { AlbumInterface } from '../../interfaces/Album.interface';
import { Album, Photo, ServerError } from 'core/services/back-end/api-classes';
import { NewPhotoInterface } from '../../interfaces/Photo.slice.interface';
import { NewAlbumInterface } from '../../interfaces/Album.slice.interface';

const album = new Album();
const photo = new Photo();

const getErrorMessage = (error: unknown) => {
  let message: string;

  if (error instanceof ServerError) { message = error.message; }
  else { message = String(error); }

  return message;
};

export const fetchPhotoList = createAsyncThunk(
  'photos/fetchPhotoList',
  async (ids: number[] | undefined = [], { rejectWithValue }) => {
    try {
      let response;

      if (ids.length === 0) {
        response = await API.get<PhotoInterface>(photo.route);
      } else {
        response = await API.get<PhotoInterface>(`${photo.route}?ids=${ids.toString()}`);
      }

      return response as PhotoInterface[];
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  });

export const deletePhoto = createAsyncThunk(
  'photos/deletePhoto',
  async (ids: number[] | number, { rejectWithValue }) => {
    try {
      let response;

      if (Array.isArray(ids)) {
        response = await API.delete(`${photo.route}?ids=${ids.toString()}`);
      } else {
        response = await API.delete(`${photo.route}?ids=${ids}`);
      }

      return response as number[];

    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const pushPhoto = createAsyncThunk(
  'photos/addPhoto',
  async (newPhoto: NewPhotoInterface | PhotoInterface, { rejectWithValue }) => {
    try {
      const response = await API.post<NewPhotoInterface>(photo.route, newPhoto);
      return response as PhotoInterface;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const updatePhoto = createAsyncThunk(
  'photos/updatePhoto',
  async (updatedPhoto: PhotoInterface, { rejectWithValue }) => {
    try {
      const response = await API.patch<PhotoInterface>(`${photo.route}`, updatedPhoto);
      return response as PhotoInterface;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchAlbumList = createAsyncThunk(
  'albums/fetchAlbumList',
  async (ids: number[] | undefined = [], { rejectWithValue }) => {
    try {
      let response;

      if (ids.length === 0) {
        response = await API.get<AlbumInterface>(album.route);
      } else {
        response = await API.get<AlbumInterface>(`${album.route}?ids=${ids.toString()}`);
      }

      return response as AlbumInterface[];
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const deleteAlbum = createAsyncThunk(
  'albums/deleteAlbum',
  async (ids: number[] | number, { rejectWithValue }) => {
    try {
      let response;

      if (Array.isArray(ids)) {
        response = await API.delete(`${album.route}?ids=${ids.toString()}`);
      } else {
        response = await API.delete(`${album.route}?ids=${ids}`);
      }

      return response as number[];
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const pushAlbum = createAsyncThunk(
  'albums/addAlbum',
  async (newAlbum: NewAlbumInterface | AlbumInterface, { rejectWithValue }) => {
    try {
      const response = await API.post<NewAlbumInterface>(album.route, newAlbum);
      return response as AlbumInterface;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const updateAlbum = createAsyncThunk(
  'albums/updateAlbum',
  async (updatedAlbum: AlbumInterface, { rejectWithValue }) => {
    try {
      const response = await API.patch<AlbumInterface>(`${album.route}`, updatedAlbum);
      return response as AlbumInterface;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);
