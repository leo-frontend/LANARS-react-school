import React, { useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import NoPhotos from './NoPhotos';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { getPhoto } from 'shared/store/reducers/photoReducerSlice';
import FabUploadPhoto from 'modules/components/FabUploadPhoto';

export const AllPhotos: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhoto([]));
  }, [dispatch]);

  const photos = useAppSelector((photo) => photo.photos.photos);
  return (
    photos.length > 0 ?
      <ImageList cols={6} rowHeight={142} gap={8} sx={{ width: 895 }}>
        {photos.map((photo) => (
          <ImageListItem
            key={photo.id}
            sx={{
              height: 'auto',
              // eslint-disable-next-line @typescript-eslint/naming-convention
              '& .MuiImageListItem-img': {
                width: 142,
                height: 142,
                borderRadius: 8,
              }}}
          >
            <img
              src={`data:image/jpeg;base64,${photo.image}`}
              srcSet={`data:image/jpeg;base64,${photo.image}`}
              alt={photo.description}
              loading="lazy"/>
          </ImageListItem>
        ))}
        <FabUploadPhoto />
      </ImageList> : <NoPhotos />
  );
};
