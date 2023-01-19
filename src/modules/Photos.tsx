import React, {useEffect} from 'react';

import {Box, ImageList, ImageListItem} from '@mui/material';

import {getPhoto} from '../shared/store/photoSlice';
import {useAppDispatch, useAppSelector} from '../shared/hooks/redux_hooks';
import NotFound from '../shared/components/NotFound';
import UploadButton from 'shared/components/UploadButton/UploadButton';


const Photos = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {photo} = useAppSelector(state => state);

  useEffect(() => {
    dispatch(getPhoto([]));
  }, []);


  return (
    <Box sx={{mt: 3}}>
      {photo.photos.length === 0 ?
        <NotFound name="photo" svgSwitch={true}/> :
        <>
          <ImageList cols={6} gap={8} rowHeight={208}>
            {photo.photos.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  style={{borderRadius: 8, width: 208}}
                  src={`data:${item.type};base64,${item.image}`}
                  alt={item.description}/>
              </ImageListItem>
            ))}
          </ImageList>
          <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <UploadButton nameBtn="Upload photo"/>
          </Box>
        </>
      }
    </Box>
  );
};
export default Photos;
