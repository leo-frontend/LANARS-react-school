import { PromiseStatuses, StatusMessage } from './helpers/helpers';

type ReverseMap<T> = T[keyof T];

export type StatusMessageStrings = keyof typeof StatusMessage;

export type  TStatusMessage = ReverseMap<typeof PromiseStatuses>;
