import { StatusMessageStrings } from 'shared/store/types';
import { AlbumInterface } from './Album.interface';

export interface IAlbumState {
  albumsList: AlbumInterface[];
  status: StatusMessageStrings;
  errorMessage: string;
}

export interface NewAlbumInterface extends Omit<AlbumInterface, 'id'>  {id?: number}
