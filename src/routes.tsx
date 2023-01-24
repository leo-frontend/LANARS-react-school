import { AllPhotos, Albums } from 'modules/pages';
import {ImageOutlined, PhotoAlbumOutlined } from '@mui/icons-material';
import { FC } from 'react';

interface IRoute {
  title: string;
  path: string;
  component: FC<{}>;
  icon: JSX.Element;
}

export const routes: Array<IRoute> = [
  {
    title: 'All photos',
    path: '/AllPhotos',
    component: AllPhotos,
    icon: <ImageOutlined />,
  },
  {
    title: 'Albums',
    path: '/Albums',
    component: Albums,
    icon: <PhotoAlbumOutlined />,
  },
];
