import {IPhoto} from './Photo.interface';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IAlbum {
  title: string;
  description: string;
  photos: IPhoto[];
  date: number;
}
