import {AnyAction} from '@reduxjs/toolkit';

export function isPending(action: AnyAction): boolean {
  return action.type.endsWith('pending');
}

export function isRejected(action: AnyAction): boolean {
  return action.type.endsWith('rejected');
}
