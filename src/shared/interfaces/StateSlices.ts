import {IPhoto} from './Photo';
import {IAlbum} from './Album';

export interface IPhotoState {
  photos: IPhoto[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}
export interface IAlbumState {
  album: IAlbum[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}
