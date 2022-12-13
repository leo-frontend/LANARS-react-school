export interface IAlbum {
    title: string;
    description: string;
    photos: number[];
    date: number;
    id?: number;
}

export interface IAlbumState {
  album: IAlbum[];
}
