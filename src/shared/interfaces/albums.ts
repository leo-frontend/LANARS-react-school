import { IPhotos } from './photos';

export interface IAlbums {
  title: string;
  description: string;
  photos: IPhotos[];
  date: number;
  id: number;
}
