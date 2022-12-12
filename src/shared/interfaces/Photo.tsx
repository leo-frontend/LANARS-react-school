export interface IPhoto {
  date: number;
  description: string;
  id: number;
  image: string;
  size: number;
  type: string;
}

export interface IPhotoState {
  photos: IPhoto[];
}
