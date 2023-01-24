import {AnyAction} from '@reduxjs/toolkit';
import {IActionState} from '../interfaces/StateSlices';

export function isPending(action: AnyAction): boolean {
  return action.type.endsWith('pending');
}

export function isFulfilled(action: AnyAction): boolean {
  return action.type.endsWith('fulfilled');
}

export function isRejected(action: AnyAction): boolean {
  return action.type.endsWith('rejected');
}

export function isPendingAction(state: IActionState): void {
  state.loading = 'PENDING';
}

export function isFulfilledAction(state: IActionState): void {
  state.loading = 'SUCCEEDED';
}

export function isRejectedAction(state: IActionState, action: AnyAction): void {
  state.loading = 'FAILED';
  state.error = action.error.message;
}
