import { StatusMessageStrings } from 'shared/store/types';
import {PhotoInterface} from './Photo.interface';

export interface IPhotosState {
  photosList: PhotoInterface[];
  status: StatusMessageStrings;
  errorMessage: string;
}

export interface NewPhotoInterface extends Omit<PhotoInterface, 'id'> { id?: number }
