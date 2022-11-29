import {PhotoInterface} from './Photo.interface'

export interface AlbumInterface {
  title: string;
  description: string;
  photos: PhotoInterface[];
  date: number;
  id?: number;
}
