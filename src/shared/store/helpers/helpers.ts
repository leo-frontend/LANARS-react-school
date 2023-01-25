import { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { IAlbumState } from '../../interfaces/Album.slice.interface';
import { IPhotosState } from '../../interfaces/Photo.slice.interface';
import { StatusMessageStrings, TStatusMessage } from '../types';

export enum PromiseStatuses {
  FULFILLED = '/fulfilled',
  PENDING = '/pending',
  REJECTED = '/rejected'
}

export enum StatusMessage {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  ERROR = 'LOADING'
}

export const setStatus = (state: IPhotosState | IAlbumState, status: StatusMessageStrings): void => {
  state.status = status;
};

export const isActiveSliceStatus = (action: AnyAction, sliceName: string, status: TStatusMessage): boolean => {
  return action.type.endsWith(status) && action.type.includes(sliceName);
};

export const setError = (state: IAlbumState | IPhotosState, action: PayloadAction<string>): void => {
  state.status = 'ERROR';
  state.errorMessage = action.payload;
};
