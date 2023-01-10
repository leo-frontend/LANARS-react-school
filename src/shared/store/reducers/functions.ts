import { AnyAction } from '@reduxjs/toolkit';

export const isPending = (action: AnyAction): boolean => {
  return action.type.endsWith('/pending');
};

export const isFulfilled = (action: AnyAction): boolean => {
  return action.type.endsWith('/fulfilled');
};

export const isError = (action: AnyAction): boolean => {
  return action.type.endsWith('/rejected');
};
