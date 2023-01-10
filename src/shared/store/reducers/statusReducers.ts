import { AsyncThunk, AnyAction } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

type StateAction = {
  isLoading: string;
  error: null | string;
};

export function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('/pending');
}

export function isFulfilledAction(action: AnyAction): action is FulfilledAction {
  return action.type.endsWith('/fulfilled');
}

export function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('/rejected');
}

export function handlePendingAction(state: StateAction): void {
  state.isLoading = 'pending';
  state.error = null;
}

export function handleFulfilledAction(state: StateAction): void {
  state.isLoading = 'succeeded';
  state.error = null;
}

export function handleRejectedAction(state: StateAction, action: AnyAction): void {
  state.isLoading = 'failed';
  state.error = action.payload;
}
